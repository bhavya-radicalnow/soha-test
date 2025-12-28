"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";
import Skeleton from "react-loading-skeleton";

export default function HeroPage() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false); // overall page shimmer control
  const [imageLoaded, setImageLoaded] = useState(false);

  // Simulate data loading (like API fetch)
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
    <main className="bg-white">
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-7 lg:px-25">
          <Image
            src="/logo-dr chaithra.png"
            alt=""
            width={150}
            height={150}
            className="absolute top-10 left-0 mt-2 ml-2 z-30 pointer-events-none select-none"
          />
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-6 pt-6 pb-10 md:pt-8 md:pb-12 lg:pt-10 lg:pb-14">
            {/* LEFT — TEXT */}
            <div className="order-2 md:order-1 md:col-span-6 relative z-20">
              {loaded ? (
                <>
                  <h1 className="text-3xl sm:text-4xl md:text-[3rem] lg:text-6xl xl:text-[5rem] font-semibold leading-tight tracking-tight text-gray-900">
                    Dr. Chaithra S K
                  </h1>
                  <p className="mt-4 text-lg sm:text-2xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800">
                    Leading IVF and Reproductive{" "}
                    <br className="hidden sm:block" />
                    Medicine Expert in Bangalore
                  </p>
                  <p className="mt-4 text-lg font-semibold text-gray-900">
                    Medical Director - Ovum Fertility
                  </p>
                  <p className="mt-4 text-sm text-gray-600">
                    MBBS, MS-OBG, FRM, DRM
                  </p>
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[rgba(255,112,163,1)] text-white font-semibold shadow-sm transition-all duration-300 hover:bg-pink-500 hover:scale-[1.02] pl-15 px-[2rem] py-[1.2rem] text-sm sm:px-[5rem] sm:py-[1.6rem] sm:text-base md:px-[2rem] md:py-[1.2rem] md:text-lg lg:px-[3rem] lg:py-[1.7rem] lg:text-xl xl:px-[5rem] xl:py-[1.5rem] 2xl:px-[9rem] 2xl:py-[2.2rem] 2xl:text-2xl"
                    >
                      Book A Consultation
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5"
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
              ) : (
                // Skeleton placeholder for text and button
                <div className="space-y-4">
                  <Skeleton height={60} width="80%" />
                  <Skeleton height={30} width="90%" />
                  <Skeleton height={20} width="40%" />
                  <div className="pt-4">
                    <Skeleton height={60} width={250} borderRadius={30} />
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT — IMAGE with shimmer */}
            <div className="order-1 md:order-2 md:col-span-6 justify-self-center md:justify-self-end -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-12 xl:-ml-24">
              <div className="relative aspect-[4/5] w-[19rem] sm:w-[20rem] md:w-[28rem] lg:w-[40rem] xl:w-[45rem] 2xl:w-[50rem]">
                {!loaded && (
                  <Skeleton height="100%" width="100%" borderRadius="1rem" />
                )}

                {loaded && (
                  <>
                    <Image
                      src="/bg.webp"
                      alt=""
                      fill
                      priority
                      className="z-0 object-contain object-center pointer-events-none select-none"
                      aria-hidden
                    />
                    <Image
                      src="/doctor.webp"
                      alt="Dr. Chaithra S K"
                      fill
                      priority
                      onLoad={() => setImageLoaded(true)}
                      className={`z-10 object-contain object-center pointer-events-none select-none transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                    />
                  </>
                )}
              </div>
            </div>
          </div>

          {/* STATS SECTION */}
          <div className="relative z-30 md:-mt-20 lg:-mt-32 xl:-mt-80">
            <div className="w-full rounded-3xl bg-[rgba(236,102,150,0.16)] px-6 py-8 backdrop-blur-[6px] shadow-sm sm:px-8 sm:py-10">

              {loaded ? (
                <dl className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-6 items-center justify-items-center">
                  <Stat label={<>IVF/ICSI Procedures</>} value="2000+" />
                  <Stat label={<>IVF Success Rate</>} value="65%" />
                  <Stat label={<>Couples Treated</>} value="8000+" />
                  <Stat label={<>Approval Rating on Practo</>} value="96%" />
                  <Stat label="Live Birth" value="48%" />
                </dl>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="text-center">
                        <Skeleton height={40} width={80} />
                        <Skeleton height={20} width={100} />
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {loaded && (
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
      )}
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="text-center min-w-[120px] max-w-[180px] px-2">
      <div className="text-3xl font-extrabold tracking-tight text-[#FF70A3] lg:text-4xl">
        {value}
      </div>

      <div
        className="mt-2 inline-block px-3 py-1 rounded-full
                   bg-white/80 backdrop-blur-md
                   border border-white/30 shadow-sm 
                   text-xs sm:text-sm font-medium text-[#202020]
                   leading-snug whitespace-nowrap"
      >
        {label}
      </div>
    </div>
  );
}


