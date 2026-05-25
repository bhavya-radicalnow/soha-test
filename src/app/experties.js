"use client";

import Image from "next/image";
import { useState } from "react";

export default function FieldOfExpertise() {
  const expertise = [ 
    {
      src: "/ovarian.webp",
      hoverSrc: "/ovarian-white.webp",
      title: "Ovarian Stimulation, IVF, ICSI",
      description:"Boosting egg production with IVF/ICSI."
    },
    {
      src: "/embruo.webp",
      hoverSrc: "/embruo-white.webp",
      title: " Embryo Transfer",
      description: "Placing the developed embryo back into the uterus."

    },
{
      src: "/laproscopic.webp",
      hoverSrc: "/WHITE-2.webp",
      title: "Fertility, Hystero–Laparoscopy",
      description: "Minimally invasive fertility-boosting surgery."
    },

 {
      src: "/implantation.webp",
      hoverSrc: "/implantation-white.webp",
      title: "Reproductive Immunology",
    description: "Treating immune issues that affect pregnancy."
    },

 {
      src: "/reprodu.webp",
      hoverSrc: "/reprodu-white.webp",
          title: "Reproductive Genetics",
    description: "Checking genetic issues affecting fertility or pregnancy."
    },

    {
      src: "/highrick.webp",
      hoverSrc: "/WHITE.webp",
       title: "Male Infertility",
    description: "Treating sperm and male reproductive disorders."
    },
    
    {
      src: "/poor-ovarian.webp",
      hoverSrc: "/poor-ovarian-white.webp",
          title: "Ovarian & Endometrial Health",
    description: "Improving egg quality and uterine lining."
    },
   
    {
      src: "/donor.webp",
      hoverSrc: "/donor-white.webp",
          title: "Donor & Surrogacy Programs",
    description: "Providing options for couples who need them."
    },
   
    {
      src: "/ultrasonography.webp",
      hoverSrc: "/ultrasonography-white.webp",
          title: "Advanced Ultrasonography",
    description: "Using high-level ultrasound technologies."
      
    },
    {
      src: "/fertitity.webp",
      hoverSrc: "/fertility-white.webp",
     title: "Fertility Preservation",
    description: "Freezing eggs, sperm, or embryos for future use."
    },
   
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-10 md:py-16">
        <div
          className="rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12"
          style={{
            background:
              "linear-gradient(100.24deg, rgba(252, 241, 236, 0.8) 20.09%, rgba(228, 243, 253, 0.6) 48.04%, rgba(252, 243, 239, 0.5) 80.99%)",
          }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#24305a] text leading-tight">
            Field of Expertise
          </h3>

          <div className="
  mt-10 
  grid 
  grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-5 
  gap-x-8 gap-y-10
">

            {expertise.map((item, i) => (
              <ExpertiseCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


function ExpertiseCard({ item }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="
        group flex flex-col items-center text-center
        rounded-3xl bg-white shadow-md
        transition-all duration-300 hover:bg-[#ff69b4] hover:shadow-xl
        px-5 py-6
        w-full
        max-w-[170px]    /* best for iPhone SE */
        sm:max-w-[190px]
        md:max-w-[200px]
        lg:max-w-[215px]
        mx-auto
      "
    >
      {/* Icon */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse rounded-xl bg-gray-200" />
        )}

        <Image
          src={item.src}
          alt={item.title}
          fill
          className={`object-contain transition-opacity duration-300 
            group-hover:opacity-0 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoadingComplete={() => setLoaded(true)}
        />

        <Image
          src={item.hoverSrc}
          alt={`${item.title} hover`}
          fill
          className="object-contain opacity-0 transition-opacity duration-300 
            group-hover:opacity-100"
        />
      </div>

      {/* Title */}
      <p
        className="
          font-semibold text-[#24305a] group-hover:text-white
          text-xs
          sm:text-sm
          md:text-base
          leading-tight
          min-h-[32px]
        "
      >
        {item.title}
      </p>

      {/* Description */}
      {item.description && (
        <p
          className="
            mt-1 text-[#24305a]/70 group-hover:text-white/90
            text-[11px] sm:text-sm md:text-[15px]
            leading-snug
            min-h-[34px]
          "
        >
          {item.description}
        </p>
      )}
    </div>
  );
}



