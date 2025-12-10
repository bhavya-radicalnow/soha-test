"use client";

import { useState } from "react";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";

export default function FooterCTA() {
  const [open, setOpen] = useState(false);


  async function handleSubmit(values) {
    try {
      // Normalize & validate phone (simple 10-digit India mobile)
      const phone = (values.phone || "").toString().replace(/\s+/g, "");
      if (!/^\d{10}$/.test(phone)) {
        throw new Error("Please enter a valid 10-digit phone number.");
      }

      // Capture UTM params from URL
      const searchParams =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search)
          : new URLSearchParams();

      const utm_campaign = searchParams.get("utm_campaign") || "";
      const utm_source = searchParams.get("utm_source") || "";
      const utm_medium = searchParams.get("utm_medium") || "";
      const utm_term = searchParams.get("utm_term") || "";

      const payload = {
        name: values.name || "",
        email: values.email || "",
        phone,
        location: values.location || values.Location || "",
        utm_campaign,
        utm_source,
        utm_medium,
        utm_term,
      };

      // POST to Next.js server route
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Network / unexpected error:", err);
      throw err;
    }
  }

  return (
    <main className="bg-[#EFEFEF]">
      <footer className="relative mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        <section className="relative overflow-hidden rounded-[28px] bg-[#EFEFEF]">
          <div className="px-6 md:px-10 lg:px-14 py-10">

            {/* Heading + Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="mb-2 font-semibold text-[#FF70A3]">Contact Us Today</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  <span className="text-[#2a2230]">Join Us to Begin Your</span>
                  <br />
                  <span className="text-[#FF70A3]">Parenthood Journey Today</span>
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#FF70A3] px-5 sm:px-6 py-3.5 sm:py-4 md:pt-4  text-sm sm:text-base font-semibold text-white shadow-sm transition hover:bg-rose-500"
              >
                Book A Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Info blocks */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <Info divider icon={<PhoneIcon />} title="Call Us:" value={<a href="tel:08045309999">080-45309999</a>} />
              <Info divider icon={<MailIcon />} title="E-mail Us:" value={<a href="mailto:info@ovumfertility.in">info@ovumfertility.in</a>} />
              <Info divider icon={<WebIcon />} title="Our Website:" value={<a href="https://www.ovumfertility.in" target="_blank" rel="noreferrer">www.ovumfertility.in</a>} />
              <Info icon={<LocationIcon />} title="Visit Us:" value={<>Bhattarahalli <br />Kalyan Nagar <br />Hoskote <br />Hennur</>} />
            </div>

          </div>
        </section>
      </footer>

      {/* Contact Modal */}
      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        fields={[
          { type: "text", name: "name", label: "Name", placeholder: "Your full name", required: true },
          { type: "email", name: "email", label: "Email Id", placeholder: "you@example.com", required: true },
          { type: "tel", name: "phone", label: "Phone no", placeholder: "10-digit mobile", required: true },
          {
            type: "select",
            name: "location",
            label: "Preferred Location",
            placeholder: "Choose Location",
            options: ["Bhattarahalli", "Kalyan Nagar", "Hoskote", "Hennur"],
            required: true,
          },
        ]}
        submitLabel="Submit"
        subtitle="We’ll call you back to confirm slot."
      />
    </main>
  );
}

/* ---- Info Block ---- */
function Info({ icon, title, value, divider = false }) {
  return (
    <div className={["relative flex items-start gap-4 py-6 pr-0 lg:pr-8", divider ? "lg:mr-8" : ""].join(" ")}>
      {divider && <span className="pointer-events-none absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-black/10 lg:block" />}
      <div className="mt-1 text-[#FF70A3] shrink-0">{icon}</div>
      <div className="leading-6">
        <div className="text-base font-semibold text-[#2a2230]">{title}</div>
        <div className="mt-1 text-sm text-[#2a2230]">{value}</div>
      </div>
    </div>
  );
}

/* ---- Icons ---- */
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.11 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.89.31 1.76.57 2.6a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.6.57A2 2 0 0 1 22 16.92Z" fill="currentColor" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M4 4h16a2 2 0 0 1 2 2v.2l-10 6-10-6V6a2 2 0 0 1 2-2Zm18 5.2V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.2l10 6 10-6Z" fill="currentColor" />
    </svg>
  );
}
function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-7 10h14a8 8 0 0 1-14 0Zm7-8a8 8 0 0 1 7.94 7H4.06A8 8 0 0 1 12 4Z" fill="currentColor" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z" fill="currentColor" />
    </svg>
  );
}
