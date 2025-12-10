"use client";
import Skeleton from "react-loading-skeleton";

import { useState,useEffect } from "react";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";

export default function ApproachSection() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 1000);
      return () => clearTimeout(timer);
    }, []);

  async function handleSubmit(values) {
    try {
      // Normalize & validate phone (simple India 10-digit check)
      const phone = (values.phone || "").toString().replace(/\s+/g, "");
      if (!/^\d{10}$/.test(phone)) {
        throw new Error("Please enter a valid 10-digit phone number.");
      }

      // Capture UTM params from current URL (if any)
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
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7 lg:col-span-7">
            <p className="mb-3 font-semibold text-[#FF70A3] ">Approach</p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#24305a] sm:text-4xl lg:text-5xl">
              Personalized Fertility
              <br />
              <span className="text-[#FF70A3]">Care with a Human Touch</span>
            </h2>
 <p className="mt-5 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg">
              Dr. Chaithra delivers evidence-based, personalised fertility treatments that balance realistic expectations with cutting-edge medical techniques. She leverages the latest technology to tailor care to each patient’s unique needs and actively drives innovation in reproductive medicine. With a strong focus on patient education and continuity of care, she has guided thousands of national and international patients through their fertility journeys with expertise and compassion.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF70A3] to-[#FF70A3] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-5">
            <div className="relative w-full overflow-hidden rounded-[28px]">
              <div className="relative aspect-[4/3] w-full">

              {!loaded ? (
  <Skeleton height={450} width={450} borderRadius={10} />
) : (
                <Image
                  src="/care.webp"
                  alt="Hands holding a uterus cutout"
                  fill
                  priority
                 onLoad={() => setLoaded(true)}
                      className="object-cover rounded-3xl transition-opacity duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 560px"
                />
)}
              </div>
            </div>
          </div>
        </div>
      </section>

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
