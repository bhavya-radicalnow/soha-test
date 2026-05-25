"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";
import Skeleton from "react-loading-skeleton";

const ArticleModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-10 right-0 text-white hover:text-gray-300 text-4xl z-20"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex-1 overflow-y-auto flex justify-center">
          <Image
            src="/image.png"
            alt="Full Times of India Article"
            width={1200}
            height={1600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default function AboutSection() {
  const [open, setOpen] = useState(false);
  const [articleOpen, setArticleOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const contactFields = [
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
  ];

  async function handleSubmit(values) {
    try {
      const phone = (values.phone || "").toString().replace(/\s+/g, "");
      if (!/^\d{10}$/.test(phone)) {
        throw new Error("Please enter a valid 10-digit phone number.");
      }
      const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
      const payload = {
        name: values.name || "",
        email: values.email || "",
        phone,
        location: values.location || values.Location || "",
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
              {/* {loaded && (
                <div className="absolute left-0 top-[10%] z-10">
                  <Image
                    src="/exp-badge.webp"
                    alt="14+ years of experience"
                    width={200}
                    height={200}
                    className="w-[100px] sm:w-[120px] md:w-[130px] lg:w-[160px] xl:w-[160px] 2xl:w-[160px] h-auto"
                    priority
                  />
                </div>
              )} */}


              {/* Experience Badge - Adjusted with negative margin/position */}
{loaded && (
  <div className="absolute -left-8 top-[10%] z-10"> {/* Changed from 'left-0' to '-left-8' (adjust as needed) */}
    <Image
      src="/exp-badge.webp"
      alt="14+ years of experience"
      width={200}
      height={200}
      className="w-[100px] sm:w-[120px] md:w-[130px] lg:w-[160px] xl:w-[160px] 2xl:w-[160px] h-auto"
      priority
    />
  </div>
)}

              {/* Doctor image overlay */}
              <div className="absolute bottom-0 right-[-10px] sm:right-[-18px] md:right-[-24px] lg:right-[-30px] xl:right-[-40px] 2xl:right-[-50px] z-10">
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
          <div className="md:col-span-6 md:px-0">
            <p className="mb-2 text-sm font-semibold text-[#FF70A3] sm:text-base lg:text-lg flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF70A3]" />
              About
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl font-extrabold leading-tight text-[#24305a] max-w-3xl">
              Turning Dreams of Families<br className="hidden sm:block" /> into Reality
            </h2>
            <p className="text-[#24305a] mt-5 max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-[1.35rem] leading-relaxed text-justify sm:text-left">
              Dr Chaithra S. K. is an infertility specialist at Milann Ovum Fertility, Bangalore with 14+ years of experience. Trained in reproductive medicine &amp; endoscopy (Ruby Hall Clinic) and diploma in advanced reproductive medicine (Kiel University), she combines clinical expertise with a compassionate, personalised approach.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#FF70A3] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-rose-500"
              >
                Book A Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Article Card */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div
                className="flex items-center gap-6 cursor-pointer group"
                onClick={() => setArticleOpen(true)}
              >
                <div className="flex-shrink-0 w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/image.png"
                    alt="Times of India Article"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex flex-col gap-2 flex-grow">
                  <p className="text-base md:text-lg font-bold text-black leading-tight">
                    Ask the expert: IVF Decisions <br/>Every Couple Should Understand
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    Times of India, Bangalore times edition
                  </p>
                  
                  <div className="self-start text-sm font-semibold text-[#FF70A3] bg-pink-50 border border-[#FF70A3] rounded-full px-6 py-2 hover:bg-[#FF70A3] hover:text-white transition-all mt-1">
                    Read Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArticleModal open={articleOpen} onClose={() => setArticleOpen(false)} />
      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        fields={contactFields}
        submitLabel="Submit"
        subtitle="We'll call you back to confirm slot."
      />
    </main>
  );
}
