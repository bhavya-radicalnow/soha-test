"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import ReactPlayer from "react-player";

function GallerySlider({ title, images, setActiveVideo }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-16 last:mb-0">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
        <div className="w-full md:max-w-4xl">
          <h2 className="text-[#1e1b4b] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center md:text-left leading-snug">
            {title}
          </h2>
        </div>
      </div>

      <div className="relative group">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-[#fb7185] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={24} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 py-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img) => (
            <div
              key={img.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] lg:min-w-[400px] flex-shrink-0 bg-white rounded-2xl overflow-hidden"
            >
              <div
                className="relative aspect-video w-full rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => img.type === 'video' && setActiveVideo(img.videoUrl)}
              >
                <Image
                  src={img.src}
                  alt={img.title || "Gallery Image"}
                  fill
                  className="object-cover"
                />
                {img.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform">
                      <Play className="fill-white text-white translate-x-0.5" size={20} />
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Picture() {
  const [activeVideo, setActiveVideo] = useState(null);

  const section1Images = [
    {
      id: 4,
      src: "/chennai 1.webp",
      title: "Role of Hysteroscopy in IVF",
      type: "image",
    },
    {
      id: 1,
      src: "/Chennai 2025 (2).webp",
      title: "Role of Hysteroscopy in IVF",
      type: "image",
    },
    {
      id: 2,
      src: "/Chennai 2025 3.webp",
      title: "Role of Hysteroscopy in IVF",
      type: "image",
    },
    {
      id: 3,
      src: "/Chennai 2025 4.webp",
      title: "Role of Hysteroscopy in IVF",
      type: "image",
    },
    {
      id: 5,
      src: "/Chennai 2025 5.webp",
      title: "What are the steps of IVF",
      type: "image",
      
    },
    {
      id: 6,
      src: "/Chennai 2025 6.webp",
      title: "What are the steps of IVF",
      type: "image",

    },
    {
      id: 7,
      src: "/Chennai 2025 7.webp",
      title: "What are the steps of IVF",
      type: "image",

    },
  ];

  const section2Images = [
   
    {
      id: 1,
      src: "/mysore-1.webp",
      title: "Fertility Awareness Session",
      type: "image",
    },
    {
      id: 1,
      src: "/mysore-2.webp",
      title: "Fertility Awareness Session",
      type: "image",
    },
    {
      id: 1,
      src: "/mysore-3.webp",
      title: "Fertility Awareness Session",
      type: "image",
    },

  ];

  const section3Images = [
    {
      id: 1,
      src: "/invest-1.webp",
      title: "Medical Camp 2025",
      type: "image",
    },
    {
      id: 2,
      src: "/invest-2.webp",
      title: "Medical Camp 2025",
      type: "image",
    },
    {
      id: 3,
      src: "/invest-3.webp",
      title: "Medical Camp 2025",
      type: "image",
    },
  ];

  const section4Images = [
    {
      id: 1,
      src: "/patna-1.webp",
      title: "Annual Conference",
      type: "image",
    },
     {
      id: 2,
      src: "/patna-2.webp",
      title: "Annual Conference",
      type: "image",
    },
     {
      id: 3,
      src: "/patna-3.webp",
      title: "Annual Conference",
      type: "image",
    },
     {
      id: 4,
      src: "/patna-4.webp",
      title: "Annual Conference",
      type: "image",
    }, {
      id: 5,
      src: "/Patna 8 copy.webp",
      title: "Annual Conference",
      type: "image",
    },
   
  ];

  const section5Images = [
    
    {
      id: 1,
      src: "/team.webp",
      title: "Laboratory Inauguration",
      type: "image",
    },
    {
      id: 2,
      src: "/team-2.webp",
      title: "Laboratory Inauguration",
      type: "image",
    },
  ];

  const section6Images = [
    {
      id: 1,
      src: "/bsog.webp",
      title: "Patient Success Stories",
      type: "image",
    },
    {
      id: 2,
      src: "/bsog-1.webp",
      title: "Patient Success Stories",
      type: "image",
    },
    
  ];

  const section7Images = [
    {
      id: 1,
      src: "/kisar.webp",
      title: "International Women's Day",
      type: "image",
    },
    {
      id: 2,
      src: "/kisar-1.webp",
      title: "International Women's Day",
      type: "image",
    },
    
  ];

  const section8Images = [
    {
      id: 1,
      src: "/isar-kart.webp",
      title: "Community Outreach",
      type: "image",
    },
  
  ];

  const section9Images = [
   
    {
      id: 1,
      src: "/paper presentation-1.webp",
      title: "Gallery Section 9",
      type: "image",
    },
    {
      id: 2,
      src: "/paper presentation-2.webp",
      title: "Gallery Section 9",
      type: "image",
    },
     {
      id: 3,
      src: "/paper presentation-3.webp",
      title: "Gallery Section 9",
      type: "image",
    }, {
      id: 4,
      src: "/paper presentation-4.webp",
      title: "Gallery Section 9",
      type: "image",
    }, {
      id: 5,
      src: "/paper presentation-5.webp",
      title: "Gallery Section 9",
      type: "image",
    }, {
      id: 6,
      src: "/paper presentation-6.webp",
      title: "Gallery Section 9",
      type: "image",
    },
  ];

  const section10Images = [
    {
      id: 1,
      src: "/gurgaon.webp",
      title: "Gallery Section 10",
      type: "image",
    },
    {
      id: 2,
      src: "/gurgaon-1.webp",
      title: "Gallery Section 10",
      type: "image",
    },
  ];

  const section11Images = [
    {
      id: 1,
      src: "/south-1.webp",
      title: "Gallery Section 11",
      type: "image",
    },
    {
      id: 2,
      src: "/south-2.webp",
      title: "Gallery Section 11",
      type: "image",
    },
    {
      id: 3,
      src: "/south-3.webp",
      title: "Gallery Section 11",
      type: "image",
    },
    {
      id: 4,
      src: "/south-4.webp",
      title: "Gallery Section 11",
      type: "image",
    },{
      id: 5,
      src: "/south-5.webp",
      title: "Gallery Section 11",
      type: "image",
    },{
      id: 6,
      src: "/south-6.webp",
      title: "Gallery Section 11",
      type: "image",
    },
  ];

  const section12Images = [
    {
      id: 1,
      src: "/world ivf.webp",
      title: "Gallery Section 12",
      type: "image",
    },
    
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">


      <GallerySlider
        title="Delivered talk on endometriosis in infertility at National YUVA ISAR conference Chennai 2025"
        images={section1Images}
        setActiveVideo={setActiveVideo}
      />

      <GallerySlider
        title="Delivered talk on PPOS versus oral antagonists in annual KISAR conference, Mysore 2025"
        images={section2Images}
        setActiveVideo={setActiveVideo}
      />

      <GallerySlider
        title="Investiture ceremony of IFS Karnataka chapter  2024 to 2026 As Executive committee member"
        images={section3Images}
        setActiveVideo={setActiveVideo}
      />

      <GallerySlider
        title="ISAR Youth Icon award ceremony Patna 2024"
        images={section4Images}
        setActiveVideo={setActiveVideo}
      />

      <GallerySlider
        title="My Team"
        images={section5Images}
        setActiveVideo={setActiveVideo}
      />

      <GallerySlider
        title="Panel discussion at conference organised by BSOG 2025"
        images={section6Images}
        setActiveVideo={setActiveVideo}
      />

      <GallerySlider
        title="Panel discussion on ovarian rejuvenation organised by KISAR 2025 at Bangalore"
        images={section7Images}
        setActiveVideo={setActiveVideo}
      />

      <GallerySlider
        title="Panel discussion on recent trends on ovarian stimulation organised by ISAR Karnataka Chapter 2025"
        images={section8Images}
        setActiveVideo={setActiveVideo}
      />

      <GallerySlider
        title="Paper presentation on endometrial regeneration at National YUVA ISAR 2024 Patna"
        images={section9Images}
        setActiveVideo={setActiveVideo}
      />

      <GallerySlider
        title="Received IFS Appreciation award 2025 at Annual IFS conference Gurgaon"
        images={section10Images}
        setActiveVideo={setActiveVideo}
      />

      <GallerySlider
        title="South ISAR academic activities Bangalore 2024"
        images={section11Images}
        setActiveVideo={setActiveVideo}
      />

      <GallerySlider
        title="World IVF day celebration at Ovum Fertility Bhattarahalli 2025"
        images={section12Images}
        setActiveVideo={setActiveVideo}
      />

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <ReactPlayer
              url={activeVideo}
              width="100%"
              height="100%"
              controls
              playing
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

