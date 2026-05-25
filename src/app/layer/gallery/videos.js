// "use client";
// import Image from "next/image";
// import { useRef, useState } from "react";
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";
// import ReactPlayer from "react-player";

// export default function Videos() {
//   const scrollRef = useRef(null);
//   const [activeVideo, setActiveVideo] = useState(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 400;
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const images = [

//     {
//       id: 1,
//       src: "/banglore 1.webp",
//       title: "Fertility Specialist",
//       type: "image"
//     },
//     {
//       id: 2,
//       src: "/bangalore 2.webp",
//       title: "Advanced Fertility Care",
//       type: "image"
//     },
//     {
//       id: 3,
//       src: "/bangalore 3.webp",
//       title: "Advanced Fertility Care",
//       type: "image"
//     },
//     {
//       id: 4,
//       src: "/bangalore 4.webp",
//       title: "Advanced Fertility Care",
//       type: "image"
//     },


//     {
//       id: 5,
//       src: "/bangalore  5.webp",
//       title: "Advanced Fertility Care",
//       type: "image"
//     }, {
//       id: 6,
//       src: "/bangalore 6.webp",
//       title: "Advanced Fertility Care",
//       type: "image"
//     },

//   ];

//   return (
//     <section className="w-full max-w-7xl mx-auto px-6 py-16">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
//         <div className="max-w-2xl">
//           <h2 className="text-[#1e1b4b] text-3xl md:text-4xl font-bold mb-4">
//             South ISAR academic activities Bangalore 2024
//           </h2>

//         </div>
//       </div>

//       <div className="relative group">
//         {/* Scroll Buttons */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
//         >
//           <ChevronLeft size={24} />
//         </button>

//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-[#fb7185] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
//         >
//           <ChevronRight size={24} />
//         </button>

//         {/* Scroll Container */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 py-2"
//           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//         >
//           {images.map((img) => (
//             <div
//               key={img.id}
//               className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] lg:min-w-[400px] flex-shrink-0 bg-white rounded-2xl overflow-hidden"
//             >
//               <div
//                 className="relative aspect-video w-full rounded-2xl overflow-hidden cursor-pointer"
//                 onClick={() => img.type === 'video' && setActiveVideo(img.videoUrl)}
//               >
//                 <Image
//                   src={img.src}
//                   alt={img.title}
//                   fill
//                   className="object-cover"
//                 />
//                 {img.type === 'video' && (
//                   <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
//                     <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform">
//                       <Play className="fill-white text-white translate-x-0.5" size={20} />
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <div className="pt-4">
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {img.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>


//       {/* Video Modal */}
//       {activeVideo && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity backdrop-blur-sm"
//           onClick={() => setActiveVideo(null)}
//         >
//           <div
//             className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <ReactPlayer
//               url={activeVideo}
//               width="100%"
//               height="100%"
//               controls
//               playing
//             />
//             <button
//               onClick={() => setActiveVideo(null)}
//               className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
//             </button>
//           </div>
//         </div>
//       )}





//     </section>



//   );
// }
