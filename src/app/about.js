"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";
import Skeleton from "react-loading-skeleton";


export default function AboutSection() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  async function handleSubmit(values) {
    try {
      // Basic phone validation: 10 digits (India-style). Adjust if you need +91 etc.
      const phone = (values.phone || "").toString().replace(/\s+/g, "");
      if (!/^\d{10}$/.test(phone)) {
        throw new Error("Please enter a valid 10-digit phone number.");
      }

      const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
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

      // POST to your Next.js server route which forwards to Google Apps Script
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Network / unexpected error while submitting lead:", err);
      throw err;
    }
  }

  return (
    <main className="bg-white">
      <section className="container mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8 xl:p-7 overflow-hidden">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
          {/* Left Image Section */}
          <div className="md:col-span-6 relative flex justify-center md:justify-start">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl bg-[#EDEDED]">
                <div className="relative aspect-[4/5] w-full">
                  {!loaded ? (
                    <Skeleton height="100%" borderRadius={24} />
                  ) : (
                    <Image
                      src="/couple.webp"
                      alt="Family"
                      fill
                      onLoad={() => setLoaded(true)}
                      className="object-cover rounded-3xl transition-opacity duration-700"
                      priority
                    />
                  )}
                </div>
              </div>

              {/* Experience Badge */}
              {loaded ? (
                <div className="absolute 
  left-[-10px] top-[12%]
  sm:left-[-20px] sm:top-[10%]
  md:left-[-10px] md:top-[9%]
  lg:left-[-25px] lg:top-[7%]
  xl:left-[-25px] xl:top-[5%]
  2xl:left-[-15px] 2xl:top-[7%]
  animate-float-horizontal
">
                  <Image
                    src="/exp-badge.webp"
                    alt="14+ years of experience"
                    width={150}
                    height={150}
                    className="w-[70px] sm:w-[85px] md:w-[90px] lg:w-[120px] xl:w-[120px] 2xl:w-[120px] h-auto"
                    priority
                  />
                </div>

              ) : (
                <div className="absolute left-[-10px] top-[12%]">
                  <Skeleton circle width={100} height={100} />
                </div>
              )}

              {/* Doctor Image */}
              <div className="absolute bottom-0 right-[-10px] sm:right-[-18px] md:right-[-24px] lg:right-[-30px] xl:right-[-40px] 2xl:right-[-50px]">
                <div className="bg-white pt-4 pl-6 pr-0 pb-0 rounded-tl-[40px] md:pt-5 md:pl-10 xl:pt-8 xl:pl-16">
                  <div className="relative overflow-hidden h-[140px] w-[130px] right-[8px] sm:h-[140px] sm:w-[140px] md:h-[150px] md:w-[150px] md:right-6 lg:h-[200px] lg:w-[200px] xl:h-[270px] xl:w-[250px] xl:right-10 2xl:h-[200px] 2xl:w-[200px] rounded-[27px]">
                    {!loaded ? (
                      <Skeleton height="100%" borderRadius={24} />
                    ) : (
                      <Image
                        src="/chaitra.webp"
                        alt="Dr. Chaithra"
                        fill
                        className="object-cover object-center rounded-[27px]"
                        priority
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Section */}
          <div className="md:col-span-6 px-4 sm:px-6 lg:px-8 xl:px-10">

            <>
              <p className="mb-2 text-sm font-semibold text-[#FF70A3] sm:text-base lg:text-lg">
                About
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl font-extrabold leading-tight text-[#24305a] max-w-3xl">
                Turning Dreams of Families
                <br className="hidden sm:block" /> into Reality
              </h2>

              <p className="text-[#24305a] mt-5 max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-[1.35rem] leading-relaxed text-black-800 text-justify sm:text-left">
                Dr. Chaithra S. K. is an infertility specialist at Ovum Fertility, Bangalore, with over 14 years of experience in reproductive medicine. Trained in reproductive medicine and endoscopy at Ruby Hall Clinic, and holding a diploma in advanced reproductive medicine from Kiel University, she blends clinical expertise with a compassionate and personalised approach to patient care.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#FF70A3] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-rose-500"
                >
                  Book A Consultation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </>

          </div>
        </div>
      </section>

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
