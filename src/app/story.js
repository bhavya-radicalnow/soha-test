// app/components/PatientStories.jsx
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function PatientStories() {
  const stories = [
    {
      name: "Devon Lane",
      city: "Bangalore",
      avatar: "/devon.png",
      text:
        "Dr. Chaithra and her team were with us at every step. After years of struggle, we finally welcomed our baby girl thanks to her expertise and compassion.",
    },
    {
      name: "Carol Danvers",
      city: "Bangalore",
      avatar: "/carol.png",
      text:
        "Dr. Chaithra and her team were with us at every step. After years of struggle, we finally welcomed our baby girl thanks to her expertise and compassion.",
    },
    {
      name: "Karen Starr",
      city: "Bangalore",
      avatar: "/karen.png",
      text:
        "Dr. Chaithra and her team were with us at every step. After years of struggle, we finally welcomed our baby girl thanks to her expertise and compassion.",
    },
  ];

  // slider state for mobile/tablet
  const scroller = useRef(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIdx(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (i) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-[#283176] text-white p-6 sm:p-10 lg:p-14">
          {/* dotted pattern overlays */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full opacity-20
                        bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_1px,_transparent_1.5px)] bg-[length:10px_10px]" />
          <div className="pointer-events-none absolute -right-24 top-28 h-[28rem] w-[28rem] rotate-12 opacity-15
                        bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_1px,_transparent_1.5px)] bg-[length:10px_10px]" />

          <p className="mb-3 font-semibold text-rose-300">• Patient Stories</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Heartfelt Stories of <span className="text-rose-300">Hope</span>
            <br className="hidden sm:block" /> and Success
          </h2>

          {/* Desktop / Large screens: 3-up grid */}
          <div className="mt-10 hidden lg:grid lg:grid-cols-3 lg:gap-8">
            {stories.map((s, i) => (
              <TestimonialCard key={i} data={s} highlight={i === 1} />
            ))}
          </div>

          {/* Mobile/Tablet: full-width slider */}
          <div
            ref={scroller}
            className="mt-8 grid grid-flow-col auto-cols-[100%] gap-6 overflow-x-auto lg:hidden snap-x snap-mandatory pb-2
                     [scrollbar-width:none] [-ms-overflow-style:none]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <style>{`
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`}</style>

            {stories.map((s, i) => (
              <div key={i} className="snap-start">
                <TestimonialCard data={s} highlight={i === 1} mobile />
              </div>
            ))}
          </div>

          {/* Dots (mobile/tablet) */}
          <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
            {stories.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${idx === i ? "bg-white" : "bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function TestimonialCard({ data, highlight = false, mobile = false }) {
  return (
    <article
      className={[
        "rounded-[22px] ring-1 ring-white/10",
        highlight
          ? "bg-rose-400 text-white"
          : "bg-white/5 backdrop-blur-[2px] text-white/90",
        mobile ? "p-6" : "p-7",
      ].join(" ")}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/40">
            <Image src={data.avatar} alt={data.name} fill className="object-cover" />
          </div>
          <div>
            <div className="text-sm font-semibold">{data.name}</div>
            <div className={`${highlight ? "text-white/90" : "text-white/70"} text-xs`}>{data.city}</div>
          </div>
        </div>

        {/* quote icon */}
        <svg
          viewBox="0 0 24 24"
          className={`h-8 w-8 ${highlight ? "fill-white/80" : "fill-white/60"}`}
        >
          <path d="M9 7h3L9 13v4H5v-4l3-6zm10 0h3l-3 6v4h-4v-4l3-6z" />
        </svg>
      </div>

      {/* Body */}
      <p className={`mt-4 text-sm leading-6 ${highlight ? "text-white" : "text-white/85"}`}>
        “{data.text}”
      </p>
    </article>
  );
}
