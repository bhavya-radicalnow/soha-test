// src/app/api/lead/route.js
import { NextResponse } from "next/server";

/**
 * Server route that forwards incoming lead POSTs to your Google Apps Script.
 * Set GSHEET_SCRIPT_URL in .env.local (server-side only).
 */

const SCRIPT_URL = process.env.GSHEET_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbysrhoXweh8doEdJr35f5H53QMfEtwhn60MzYIOypK9QAbWtBbJRK1kprJod1e7OWCc/exec';

export async function POST(req) {
  try {
    if (!SCRIPT_URL) {
      return NextResponse.json({ error: "Server misconfigured: missing GSHEET_SCRIPT_URL" }, { status: 500 });
    }

    const body = await req.json();

    // Basic validation
    const name = (body.name || "").toString().trim();
    const phone = (body.phone || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const location = (body.location || body.Location || "").toString().trim();

    if (!name || !phone) {
      return NextResponse.json({ error: "Missing required fields: name or phone" }, { status: 400 });
    }

    // Build payload to forward to Google Script
    const payload = {
      name,
      phone,
      email,
      location,
      utm_campaign: body.utm_campaign || "",
      utm_term: body.utm_term || "",
      utm_medium: body.utm_medium || "",
      utm_source: body.utm_source || "",
    };

    const r = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await r.text();
    // Try parse Apps Script response
    let scriptResponse;
    try {
      scriptResponse = JSON.parse(text);
    } catch {
      scriptResponse = { raw: text };
    }

    // Forward script response
    return NextResponse.json({ forwarded: true, scriptResponse }, { status: 200 });
  } catch (err) {
    console.error("API /api/lead error:", err);
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}