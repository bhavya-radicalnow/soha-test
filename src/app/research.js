"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function PublicationsSection() {
  const [loaded, setLoaded] = useState(false);
  const scroller = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000); 
    return () => clearTimeout(timer);
  }, []);

  const scrollByAmount = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth, 600);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const pubs = [
    { image: "/advances.webp", title: "Advances in Reproductive Medicine", source: "— Journal of Fertility, 2022" },
    { image: "/role.webp", title: "Role of Regenerative Medicine in Infertility", source: "— Medical Times, 2023" },
    { image: "/ivf-patinet.webp", title: "Simplifying IVF for First-time Patients", source: "— Ovum Health Blog, 2021" },
    { image: "/advances-2.webp", title: "Advances in Reproductive Medicine", source: "— Journal of Fertility, 2022" },
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        <p className="mb-3 font-semibold text-[#FF70A3]">• Articles & Publications</p>

        <h2 className="text-3xl font-extrabold leading-tight text-[#24305a] sm:text-4xl lg:text-5xl">
          Research & Writings by <br />
          <span className="text-[#FF70A3]">Dr. Chaithra S K</span>
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
              <ArticleCard
                key={i}
                image={item.image}
                title={item.title}
                source={item.source}
                loaded={loaded}
              />
            ))}
          </div>

          {/* mobile scroll buttons */}
          <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
            <button
              onClick={() => scrollByAmount("left")}
              className="h-10 w-10 rounded-full bg-[rgba(255,112,163,0.8)] text-white shadow hover:brightness-105 active:scale-95 transition grid place-items-center"
            >
              ←
            </button>
            <button
              onClick={() => scrollByAmount("right")}
              className="h-10 w-10 rounded-full bg-[rgba(255,112,163,0.8)] text-white shadow hover:brightness-105 active:scale-95 transition grid place-items-center"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ArticleCard({ image, title, source, loaded }) {
  return (
    <div className="group block min-w-[78%] xs:min-w-[70%] sm:min-w-[55%] md:min-w-[48%] lg:min-w-0">
      <div className="relative overflow-hidden rounded-[20px]">
        <div className="relative aspect-[16/11] w-full">
          {!loaded ? (
            <Skeleton height="100%" borderRadius={20} />
          ) : (
            <Image src={image} alt={title} fill className="object-cover" />
          )}
        </div>
      </div>

      {/* Text skeletons */}
      <div className="mt-4">
        {!loaded ? (
          <>
            <Skeleton height={20} width="90%" />
            <Skeleton height={16} width="60%" className="mt-2" />
          </>
        ) : (
          <>
            <h3 className="text-base font-semibold leading-snug text-gray-900 group-hover:underline">
              {title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{source}</p>
          </>
        )}
      </div>
    </div>
  );
}
