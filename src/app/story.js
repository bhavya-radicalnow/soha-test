"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function PatientStories() {
  const stories = [
    {
      name: "Aarti",
      city: "Bangalore",
      avatar: "/user_icon.webp",
      text:
        "I visited Dr. Chaitra for help with PCOD and conception, and thanks to her treatment, I conceived in my very next cycle! She’s incredibly patient, thorough, and supportive—always taking time to understand and reassure. I’m deeply grateful for her care and highly recommend her to anyone seeking compassionate and effective fertility guidance.",
    },
    {
      name: "Babu Chinnarosaiah",
      city: "Bangalore",
      avatar: "/user_icon.webp",
      text:
        "After our first IVF failure, we met Dr. Chaithra, who carefully assessed our case and guided us with the best possible treatment. Thanks to her expertise and care, my wife is now pregnant with twins! Our home is filled with happiness, and we’ll always be grateful to her for making our dream come true.",
    },
    {
      name: "Geetha Santosh",
      city: "Bangalore",
      avatar: "/user_icon.webp",
      text:
        "I swear this is the superb doctor I have ever seen. She is so humble and caring; there are no words to describe her service. Dr. Chaithra is dedicated to her work. Now, we are conceived because of her guidance and good medication, which has helped us a lot.",
    },
  ];

  const [loaded, setLoaded] = useState(false);
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-[#283176] text-white p-6 sm:p-10 lg:p-14">
          {/* dotted pattern overlays */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full opacity-20
                        bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_1px,_transparent_1.5px)] bg-[length:10px_10px]" />
          <div className="pointer-events-none absolute -right-24 top-28 h-[28rem] w-[28rem] rotate-12 opacity-15
                        bg-[radial-gradient(circle,_rgba(255,255,255,0.6)_1px,_transparent_1.5px)] bg-[length:10px_10px]" />

          <p className="mb-3 font-semibold text-[#FF70A3]">Patient Stories</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Heartfelt Stories of <span className="text-[#FF70A3]">Hope</span>
            <br className="hidden sm:block" /> and Success
          </h2>

          {/* Desktop layout */}
          <div className="hidden lg:grid mt-10 grid-cols-3 gap-8">
            {stories.map((s, i) => (
              <TestimonialCard key={i} data={s} highlight={i === 1} loaded={loaded} />
            ))}
          </div>

          {/* Mobile / Tablet Carousel */}
          <div
            className="lg:hidden mt-10 overflow-hidden"
            ref={emblaRef}
          >
            <div className="flex">
              {stories.map((s, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] px-3 sm:px-4"
                >
                  <TestimonialCard data={s} highlight={i === 1} mobile loaded={loaded} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TestimonialCard({ data, highlight = false, mobile = false, loaded }) {
  return (
    <article
      className={[
        "rounded-[22px] ring-1 ring-white/10 transition-all duration-500",
        highlight
          ? "bg-[#FF70A3] text-white"
          : "bg-white/5 backdrop-blur-[2px] text-white/90",
        mobile ? "p-6" : "p-7",
      ].join(" ")}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/40">
            {!loaded ? (
              <Skeleton circle height={40} width={40} />
            ) : (
              <Image
                src={data.avatar}
                alt={data.name}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div>
            {!loaded ? (
              <>
                <Skeleton width={80} height={14} />
                <Skeleton width={50} height={10} />
              </>
            ) : (
              <>
                <div className="text-sm font-semibold">{data.name}</div>
                <div
                  className={`${highlight ? "text-white/90" : "text-white/70"} text-xs`}
                >
                  {data.city}
                </div>
              </>
            )}
          </div>
        </div>

        {loaded ? (
          <svg
            viewBox="0 0 24 24"
            className={`h-8 w-8 ${highlight ? "fill-white/80" : "fill-white/60"}`}
          >
            <path d="M9 7h3L9 13v4H5v-4l3-6zm10 0h3l-3 6v4h-4v-4l3-6z" />
          </svg>
        ) : (
          <Skeleton circle width={30} height={30} />
        )}
      </div>

      {/* Body */}
      <div className="mt-4">
        {!loaded ? (
          <Skeleton count={3} height={12} style={{ marginBottom: "5px" }} />
        ) : (
          <p
            className={`text-sm leading-6 ${
              highlight ? "text-white" : "text-white/85"
            }`}
          >
            “{data.text}”
          </p>
        )}
      </div>
    </article>
  );
}
