"use client";

import { useRef } from "react";
import Image from "next/image";

export default function PublicationsSection() {
  const scroller = useRef(null);

  const scrollByAmount = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth, 600);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const pubs = [
    { image: "/advances.png", title: "Advances in Reproductive Medicine", source: "— Journal of Fertility, 2022" },
    { image: "/role.png", title: "Role of Regenerative Medicine in Infertility", source: "— Medical Times, 2023" },
    { image: "/ivf-patinet.png", title: "Simplifying IVF for First-time Patients", source: "— Ovum Health Blog, 2021" },
    { image: "/advances-2.png", title: "Advances in Reproductive Medicine", source: "— Journal of Fertility, 2022" },
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        <p className="mb-3 font-semibold text-rose-500">• Articles & Publications</p>

        <h2 className="text-3xl font-extrabold leading-tight text-[#24305a] sm:text-4xl lg:text-5xl">
          Research & Writings by <br />
          <span className="text-rose-400">Dr. Chaithra S K</span>
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700 sm:text-lg">
          Dr Chaithra delivers evidence-based, personalised treatment plans balancing realistic expectations with the latest medical techniques. She emphasises patient education and continuity of care.
        </p>

        <div className="mt-8">
          <div
            ref={scroller}
            className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] lg:grid lg:grid-cols-4 lg:overflow-visible lg:gap-8"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {pubs.map((item, i) => (
              <ArticleCard key={i} image={item.image} title={item.title} source={item.source} />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
            <button onClick={() => scrollByAmount("left")} className="h-10 w-10 rounded-full bg-rose-300 text-white shadow hover:brightness-105 active:scale-95 transition grid place-items-center">
              ←
            </button>
            <button onClick={() => scrollByAmount("right")} className="h-10 w-10 rounded-full bg-rose-300 text-white shadow hover:brightness-105 active:scale-95 transition grid place-items-center">
              →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ArticleCard({ image, title, source }) {
  return (
    <div className="group block min-w-[78%] xs:min-w-[70%] sm:min-w-[55%] md:min-w-[48%] lg:min-w-0">
      <div className="relative overflow-hidden rounded-[20px]">
        <div className="relative aspect-[16/11] w-full">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
      </div>
      <h3 className="mt-4 text-base font-semibold leading-snug text-gray-900 group-hover:underline">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600">{source}</p>
    </div>
  );
}
