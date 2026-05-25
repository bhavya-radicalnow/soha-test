"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";
import Skeleton from "react-loading-skeleton";

export default function HeroPage() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  async function handleSubmit(values) {
    try {
      const phone = (values.phone || "").toString().replace(/\s+/g, "");
      if (!/^\d{10}$/.test(phone)) {
        throw new Error("Please enter a valid 10-digit phone number.");
      }
      const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
      const payload = {
        ...values,
        utm_campaign: searchParams.get("utm_campaign") || "",
        utm_source: searchParams.get("utm_source") || "",
        utm_medium: searchParams.get("utm_medium") || "",
        utm_term: searchParams.get("utm_term") || "",
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
    <main className="bg-white">
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-7 lg:px-25">
          <Image
            src="/logo-dr chaithra.png"
            alt="Logo"
            width={150}
            height={150}
            className="absolute top-10 left-0 mt-2 ml-2 z-30 pointer-events-none select-none"
          />
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-6 pt-6 pb-10 md:pt-8 md:pb-12 lg:pt-10 lg:pb-14">
            <div className="order-2 md:order-1 md:col-span-6 relative z-20">
              {loaded ? (
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-[3rem] lg:text-6xl xl:text-[5rem] font-semibold leading-tight tracking-tight text-gray-900">
                    Dr. Chaithra S K
                  </h1>
                  <p className="mt-4 text-lg sm:text-2xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800">
                    The expert of IVF and reproductive medicine
                  </p>
                  {/* <p className="mt-4 text-lg font-semibold text-gray-900">Medical Director - Ovum Fertility</p> */}

                  <p className="mt-4 text-sm text-gray-600">MBBS, MS-OBG, FRM, DRM</p>
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF70A3] px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-300 hover:bg-pink-500 hover:scale-[1.02]"
                    >
                      Book A Consultation
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <Skeleton height={60} width="80%" />
                  <Skeleton height={30} width="90%" />
                </div>
              )}
            </div>

            <div className="order-1 md:order-2 md:col-span-6 justify-self-center md:justify-self-end -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-12 xl:-ml-24">
              <div className="relative aspect-[4/5] w-[19rem] sm:w-[20rem] md:w-[28rem] lg:w-[40rem] xl:w-[45rem]">
                {loaded && (
                  <Image
                    src="/doctor.webp"
                    alt="Dr. Chaithra S K"
                    fill
                    priority
                    className={`object-contain transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setImageLoaded(true)}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="relative z-30 md:-mt-20 lg:-mt-32 xl:-mt-80">
            <div className="w-full rounded-3xl bg-[rgba(236,102,150,0.16)] px-4 py-8 backdrop-blur-[6px] shadow-sm sm:px-8 sm:py-10">
              {loaded ? (
                <dl className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-2 items-start justify-items-center">
                  <Stat label="IVF/ICSI Procedures" value="2000+" />
                  <Stat label="IVF Success Rate" value="65%" />
                  <Stat label="Couples Treated" value="8000+" />
                  <Stat label="Practo Rating" value="96%" />
                  <Stat label="Live Birth Rate" value="48%" />
                </dl>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                  {Array(5).fill(0).map((_, i) => (
                    <Skeleton key={i} height={40} width={80} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {open && (
        <ContactModal
          open={open}
          onClose={() => setOpen(false)}
          onSubmit={handleSubmit}
          fields={[
            { type: "text", name: "name", label: "Name", placeholder: "Your full name", required: true },
            { type: "email", name: "email", label: "Email Id", placeholder: "you@example.com", required: true },
            { type: "tel", name: "phone", label: "Phone no", placeholder: "10-digit mobile", required: true },
            { type: "select", name: "location", label: "Preferred Location", placeholder: "Choose Location", options: ["Bhattarahalli", "Kalyan Nagar", "Hoskote", "Hennur"], required: true },
          ]}
          submitLabel="Submit"
          subtitle="We’ll call you back to confirm slot."
        />
      )}
    </main>
  );
}

function Stat({ label, value }) {
  const isBlackText = label === "Practo Rating" || label === "Live Birth Rate";
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FF70A3] lg:text-4xl">
        {value}
      </div>
      <div className={`mt-2 text-xs sm:text-sm font-medium whitespace-nowrap ${isBlackText ? 'text-black' : 'text-[#24305a]'}`}>
        {label}
      </div>
    </div>
  );
}