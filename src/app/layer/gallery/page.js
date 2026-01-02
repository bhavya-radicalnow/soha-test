"use client";

import Link from "next/link";
import Image from "next/image";
import Picture from "./picture";
import Videos from "./videos";
import Journey from "./journey";
import Pic1 from "./pic1";
import Pic2 from "./pic2";
import Pic3 from "./pic3";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";

export default function SuccessStories() {
  const [open, setOpen] = useState(false);

  async function handleSubmit(values) {
    try {
      const phone = (values.phone || "").toString().replace(/\s+/g, "");
      if (!/^\d{10}$/.test(phone)) {
        throw new Error("Please enter a valid 10-digit phone number.");
      }
      // Capture UTM params from current URL (if any)
      const searchParams = new URLSearchParams(
        typeof window !== "undefined" ? window.location.search : ""
      );
      const utm_campaign = searchParams.get("utm_campaign") || "";
      const utm_source = searchParams.get("utm_source") || "";
      const utm_medium = searchParams.get("utm_medium") || "";
      const utm_term = searchParams.get("utm_term") || "";

      const payload = {
        ...values,
        utm_campaign,
        utm_source,
        utm_medium,
        utm_term,
      };

      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Network error submitting lead:", err);
      throw err;
    }
  }
  return (
    <main className="bg-white relative overflow-hidden flex flex-col">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-gray-900 shadow-sm transition hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] lg:min-h-[95vh] w-full bg-[url('/hero-bg.webp')] bg-cover bg-center">
        <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 px-4 pt-20 pb-8 sm:px-6 sm:pt-24 sm:pb-12 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-0">

          {/* Left Content */}
          <div className="flex flex-col items-start z-10 lg:pr-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-3 py-1.5 shadow-sm sm:mb-8 sm:px-5 sm:py-2.5">
              <span className="text-[#FF70A3]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[18px] sm:h-[18px]">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm font-bold text-[#FF70A3] uppercase tracking-wide">Inspiring Gallery</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-[#24305a] sm:text-5xl md:text-6xl lg:text-7xl">
              From
              <span className="relative mx-2 sm:mx-3 inline-block text-[#FF70A3]">
                Dreams
                {/* Scribble underline */}
                <svg className="absolute -bottom-1 left-0 w-full sm:-bottom-2" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2.5" className="sm:stroke-[4]" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              to <br />
              Reality <br className="hidden sm:block" />
              <span className="text-[#FF70A3]">Explore</span> Our <br className="hidden sm:block" />
              Gallery
            </h1>

            {/* CTA */}
            <button className="mt-6 mb-6 sm:mt-10 inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-2xl bg-[#FF70A3] px-6 py-3 text-sm sm:text-lg font-bold text-white shadow-lg transition hover:bg-rose-500 hover:scale-105 active:scale-95" onClick={() => setOpen(true)}>
              Book A Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-[350px] w-full sm:h-[500px] lg:h-screen lg:absolute lg:right-0 lg:top-0 lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0">
            <Image
              src="/doctor.webp"
              alt="Dr. Chaithra"
              fill
              className="object-contain object-bottom lg:object-cover lg:object-top"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <ContactModal
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={handleSubmit}
          fields={[
            {
              type: "text",
              name: "name",
              label: "Name",
              placeholder: "Your full name",
              required: true,
            },
            {
              type: "email",
              name: "email",
              label: "Email Id",
              placeholder: "you@example.com",
              required: true,
            },
            {
              type: "tel",
              name: "phone",
              label: "Phone no",
              placeholder: "10-digit mobile",
              required: true,
            },
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

      <Picture />
      <Pic1 />
      <Pic2 />
      <Pic3 />
      <Journey />
      <Videos />

    </main>

  );
}
