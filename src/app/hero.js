import Image from "next/image";

export default function HeroPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          {/* GRID */}
          <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-12 md:items-center md:py-14 lg:gap-6 lg:py-20">
            {/* LEFT — TEXT (overlaps image on md+) */}
            <div className="order-2 md:order-1 md:col-span-6 lg:col-span-6 relative z-20">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Dr. Chaithra S K
              </h1>

              <p className="mt-4 text-xl leading-8 text-gray-800 sm:text-2xl">
                Leading IVF and Reproductive
                <br className="hidden sm:block" />
                Medicine expert in Bangalore
              </p>

              <p className="mt-4 text-sm text-gray-600">MBBS, MS-OBG, FRM, DRM</p>

              <div className="mt-8">
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 rounded-2xl bg-rose-400 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-rose-500"
                >
                  Book A Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* RIGHT — STACK: BG + DOCTOR (pulled left on md+) */}
            <div className="order-1 md:order-2 md:col-span-6 lg:col-span-6 md:-ml-16 lg:-ml-24 xl:-ml-28 justify-self-center md:justify-self-end">
              <div className="relative aspect-[3/4] w-72 sm:w-80 md:w-[28rem] lg:w-[34rem]">
                {/* background behind */}
                <Image
                  src="/bg.png"
                  alt=""
                  fill
                  priority
                  className="z-0 object-contain object-center pointer-events-none select-none"
                  aria-hidden
                  sizes="(max-width: 768px) 20rem, (max-width: 1024px) 28rem, 34rem"
                />
                {/* doctor in front */}
                <Image
                  src="/doctor-img.png"
                  alt="Dr. Chaithra S K"
                  fill
                  priority
                  className="z-10 object-contain"
                  sizes="(max-width: 768px) 20rem, (max-width: 1024px) 28rem, 34rem"
                />
              </div>
            </div>
          </div>

          {/* STATS — FULL WIDTH, OVERLAPS BOTTOM ON DESKTOP */}
          <div className="relative z-30 md:-mt-20 lg:-mt-28 xl:-mt-60">
            <div className="w-full rounded-3xl bg-rose-100/70 px-6 py-8 backdrop-blur-[6px] shadow-sm sm:px-10 sm:py-10">
              {/* The dl is width-fit so items stay on the left without dummy slots */}
              <dl className="w-fit grid grid-cols-2 gap-y-8 gap-x-12 sm:grid-cols-4 lg:gap-x-16">
                <Stat label="IVF/ICSI Procedures" value="1000+" />
                <Stat label="IVF Success Rate" value="65%" />
                <Stat label="Couples Treated" value="6000" />
                <Stat label="Approval Rating on Practo" value="96%" />
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold tracking-tight text-[#FF70A3] lg:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-xs font-medium text-[#202020] sm:text-sm">
        {label}
      </div>
    </div>
  );
}

