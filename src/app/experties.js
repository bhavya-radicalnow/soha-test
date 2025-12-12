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
      title: " Placing the developed embryo back into the uterus",
    },
{
      src: "/laproscopic.webp",
      hoverSrc: "/WHITE-2.webp",
      title: "Minimally invasive hystero-laparoscopic surgeries",
    },

 {
      src: "/implantation.webp",
      hoverSrc: "/implantation-white.webp",
      title: "Recurrent implantation failure; immunological infertility",
    },

 {
      src: "/reprodu.webp",
      hoverSrc: "/reprodu-white.webp",
      title: "Recurrent implantation failure; immunological infertility",
    },

    {
      src: "/highrick.webp",
      hoverSrc: "/WHITE.webp",
      title: "High-risk obstetrics; PESA/TESA andrology procedures",
    },
    
    {
      src: "/poor-ovarian.webp",
      hoverSrc: "/poor-ovarian-white.webp",
      title: "Poor ovarian reserve management",
    },
   
    {
      src: "/donor.webp",
      hoverSrc: "/donor-white.webp",
      title: "Donor & surrogacy programs; PGT/PGD, ERA",
    },
   
    {
      src: "/ultrasonography.webp",
      hoverSrc: "/ultrasonography-white.webp",
      title: "3D ultrasonography, Dopplers; recurrent pregnancy loss",
    },
    {
      src: "/fertitity.webp",
      hoverSrc: "/fertility-white.webp",
      title: "Compassionate care & patient support",
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

          <div className="mt-8 grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-8 xl:gap-x-5 gap-y-6">
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
    <div className="group flex flex-col items-center justify-start rounded-3xl bg-white shadow-md transition-all duration-500 hover:bg-[#ff69b4] hover:shadow-2xl hover:scale-[1.03] px-4 py-6 sm:p-6 md:p-7 lg:p-8">
      <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-15 mb-1">

        {!loaded && (
          <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
        )}

        <Image
          src={item.src}
          alt={item.title}
          fill
          className={`object-contain transition-opacity duration-500 group-hover:opacity-0 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoadingComplete={() => setLoaded(true)}
        />

        <Image
          src={item.hoverSrc}
          alt={`${item.title} hover`}
          fill
          className="object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#24305a] transition-colors duration-500 group-hover:text-white">
        {item.title}
      </p>
    </div>
  );
}
