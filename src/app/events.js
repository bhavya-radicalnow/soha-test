"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function EventsConferences() {
  const [loaded, setLoaded] = useState(false);

  // Simulate loading delay (for demo)
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

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
        <p className="mb-2 font-semibold text-[#FF70A3]">• Events & Conferences</p>

        <h2 className="text-2xl font-extrabold leading-tight text-[#24305a] sm:text-4xl lg:text-5xl">
          Attended by Dr. Chaithra S K
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e, i) => (
            <article key={i} className="rounded-[20px]">
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
      </section>
    </main>
  );
}
