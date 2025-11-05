"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ExpertAdviceVideos() {
  const videos = [
    {
      thumb: "/video-thumbnail.webp",
      src: "https://www.youtube.com/watch?v=ZIXSo1bnSM4",
      title:
        "Watch Dr. Chaithra explain advanced 3D ultrasonography, Dopplers; recurrent pregnancy loss in this video.",
    },
    {
      thumb: "/video-thumbnail.webp",
      src: "https://www.youtube.com/watch?v=ZIXSo1bnSM4",
      title:
        "Watch Dr. Chaithra explain advanced 3D ultrasonography, Dopplers; recurrent pregnancy loss in this video.",
    },
    {
      thumb: "/video-thumbnail.webp",
      src: "https://www.youtube.com/watch?v=ZIXSo1bnSM4",
      title:
        "Watch Dr. Chaithra explain advanced 3D ultrasonography, Dopplers; recurrent pregnancy loss in this video.",
    },
    {
      thumb: "/video-thumbnail.webp",
      src: "https://www.youtube.com/watch?v=ZIXSo1bnSM4",
      title:
        "Watch Dr. Chaithra explain advanced 3D ultrasonography, Dopplers; recurrent pregnancy loss in this video.",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActiveVideo(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
                loaded={loaded}
              />
            </div>
            <div className="md:col-span-6">
              <p className="mb-2 text-[#FF70A3] font-semibold">Expert Advice Videos</p>

              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tight">
                Empowering Better Fertility Outcomes Together
                <br />
              </h2>

              <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg max-w-xl">
                Dr. Chaithra provides evidence-based, personalised fertility care that balances realistic expectations with the latest advancements in medical technology. She places strong emphasis on patient education and ensures continuity of care throughout each individual’s journey.
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
                loaded={loaded}
              />
            ))}
          </div>
        </div>

        {activeVideo && (
          <Modal onClose={() => setActiveVideo(null)}>
            <Player src={activeVideo} />
          </Modal>
        )}
      </section>
    </main>
  );
}

function VideoCard({ thumb, title, onPlay, large = false, loaded }) {
  return (
    <div className="cursor-pointer group" onClick={onPlay}>
      <div
        className={`relative overflow-hidden rounded-[22px] ${
          large ? "aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        {!loaded ? (
          <Skeleton height="100%" borderRadius={22} />
        ) : (
          <>
            <Image
              src={thumb}
              alt=""
              fill
              className="object-cover transition-opacity duration-700"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition">
              <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center">
                <svg width="24" height="24" fill="#283176" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>

      {!loaded ? (
        <div className="mt-3">
          <Skeleton height={16} width="95%" borderRadius={6} />
          <Skeleton height={16} width="75%" borderRadius={6} className="mt-1" />
        </div>
      ) : (
        <p className="mt-3 text-sm text-white/90 leading-snug">{title}</p>
      )}
    </div>
  );
}

/* ---------- Modal ---------- */
function Modal({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-[92%] max-w-4xl rounded-2xl overflow-hidden bg-black aspect-[16/9]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 rounded-full bg-white/90 px-3 py-1 text-black text-sm"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

/* ---------- Player ---------- */
function Player({ src }) {
  const ytId = getYouTubeId(src);
  const vimeoId = getVimeoId(src);

  if (ytId) {
    const embed = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`;
    return (
      <iframe
        src={embed}
        title="YouTube video player"
        className="w-full h-full"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  if (vimeoId) {
    const embed = `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
    return (
      <iframe
        src={embed}
        title="Vimeo video player"
        className="w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return <video src={src} controls autoPlay className="w-full h-full" playsInline />;
}

function getYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
  } catch {}
  return null;
}

function getVimeoId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("vimeo.com")) return u.pathname.split("/").filter(Boolean).pop();
  } catch {}
  return null;
}
