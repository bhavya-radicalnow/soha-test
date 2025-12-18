"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function EventsConferences() {
  const [loaded, setLoaded] = useState(false);
  const scroller = useRef(null);

  // Simulate loading delay (for demo)
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollByAmount = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth, 600);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const events = [
    {
      img: "/event-2022.webp",
      caption:
        "Speaker at International Conference on Reproductive Health, 2022",
    },
    {
      img: "/event-2023.webp",
      caption: "Guest Lecturer at National Gynaecology Symposium, 2023",
    },
    {
      img: "/event-2021.webp",
      caption: "Panellist on Women’s Health Summit, 2021",
    },
    {
      img: "/event(2)-2022.webp",
      caption:
        "Speaker at International Conference on Reproductive Health, 2022",
    },
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        <p className="mb-3 font-semibold text-[#FF70A3]">Events & Conferences</p>
        
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-3xl font-extrabold leading-tight text-[#24305a] sm:text-4xl lg:text-5xl">
            Attended by Dr. Chaithra S K
          </h2>
          
          <div className="shrink-0">
            <Link
              href="/layer/gallery"
              className="inline-flex items-center justify-center rounded-2xl bg-[#8c8c8c] px-8 py-3 text-base font-medium text-white shadow-sm transition hover:bg-gray-600"
            >
              View All
            </Link>
          </div>
        </div>

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
            
            {events.map((e, i) => (
              <article 
                key={i} 
                className="rounded-[20px] min-w-[78%] xs:min-w-[70%] sm:min-w-[55%] md:min-w-[48%] lg:min-w-0"
              >
                <div className="relative w-full overflow-hidden rounded-[20px]">
                  <div className="relative aspect-[16/11] w-full">
                    {!loaded ? (
                      <Skeleton height="100%" borderRadius={20} />
                    ) : (
                      <Image
                        src={e.img}
                        alt={e.caption}
                        fill
                        className="object-cover transition-opacity duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        priority={i < 2}
                      />
                    )}
                  </div>
                </div>

                {/* Caption skeleton */}
                {!loaded ? (
                  <div className="mt-3">
                    <Skeleton height={18} width="90%" borderRadius={6} />
                    <Skeleton height={18} width="60%" borderRadius={6} className="mt-1" />
                  </div>
                ) : (
                  <p className="mt-3 text-sm sm:text-base leading-snug text-gray-900">
                    {e.caption}
                  </p>
                )}
              </article>
            ))}
          </div>

          {/* mobile scroll buttons */}
          <div className="mt-6 flex items-center justify-center gap-4">
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
