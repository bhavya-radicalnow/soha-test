"use client";

import { useState } from "react";
import Image from "next/image";

export default function ExpertAdviceVideos() {
  const videos = [
    {
      thumb: "/video-thumbnail.png",
      src: "https://www.youtube.com/watch?v=ZIXSo1bnSM4",
      title: "Watch Dr. Chaithra explain advanced 3D ultrasonography, Dopplers; recurrent pregnancy loss in this video."
    },
    {
      thumb: "/video-thumbnail.png",
      src: "https://www.youtube.com/watch?v=ZIXSo1bnSM4",
      title: "Watch Dr. Chaithra explain advanced 3D ultrasonography, Dopplers; recurrent pregnancy loss in this video."
    },
    {
      thumb: "/video-thumbnail.png",
      src: "https://www.youtube.com/watch?v=ZIXSo1bnSM4",
      title: "Watch Dr. Chaithra explain advanced 3D ultrasonography, Dopplers; recurrent pregnancy loss in this video."
    },
    {
      thumb: "/video-thumbnail.png",
      src: "https://www.youtube.com/watch?v=ZIXSo1bnSM4",
      title: "Watch Dr. Chaithra explain advanced 3D ultrasonography, Dopplers; recurrent pregnancy loss in this video."
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        <div className="rounded-[28px] bg-[#283176] text-white p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6">
              <VideoCard
                thumb={videos[0].thumb}
                title={videos[0].title}
                onPlay={() => setActiveVideo(videos[0].src)}
                large
              />
            </div>
            <div className="md:col-span-6">
              <p className="mb-2 text-rose-300 font-semibold">• Expert Advice Videos</p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Better Fertility
                <br />
                Outcomes Together
              </h2>

              <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg max-w-xl">
                Dr. Chaithra provides evidence-based, personalised fertility care that balances realistic expectations with
                advanced medical techniques. Education, continuity, and compassion guide each patient’s journey.
              </p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {videos.slice(1).map((v, i) => (
              <VideoCard
                key={i}
                thumb={v.thumb}
                title={v.title}
                onPlay={() => setActiveVideo(v.src)}
              />
            ))}
          </div>
        </div>
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50"
            onClick={() => setActiveVideo(null)}
          >
            <div className="relative w-[90%] max-w-3xl rounded-2xl overflow-hidden bg-black">
              <video src={activeVideo} controls autoPlay className="w-full h-full" />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function VideoCard({ thumb, title, onPlay, large = false }) {
  return (
    <div className="cursor-pointer group" onClick={onPlay}>
      <div className={`relative overflow-hidden rounded-[22px] ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <Image src={thumb} alt="" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition">
          <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center">
            <svg width="24" height="24" fill="#283176" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm text-white/90 leading-snug">{title}</p>
    </div>
  );
}
