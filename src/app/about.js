import Image from "next/image";

export default function AboutSection() {
  return (
    <main className="bg-white">
      <section className="relative mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6 relative flex justify-center md:justify-start">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[500px]">
              <div className="relative overflow-hidden rounded-[28px] bg-[#EDEDED]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/couple.png"
                    alt="Family"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="absolute left-[-22px] top-1/4 -translate-y-1/2 sm:left-[-30px]">
                <Image
                  src="/exp-badge.png"
                  alt="14+ years of experience"
                  width={150}
                  height={150}
                  className="w-[120px] sm:w-[120px] h-auto"
                  priority
                />
              </div>

              <div className="absolute bottom-[0px] right-[-22px] sm:bottom-[0px] sm:right-[-30px]">
                <div className="bg-white pt-5 pl-5 pr-0 pb-0 shadow-lg rounded-tl-[26px] rounded-tr-none rounded-br-none rounded-bl-none">
                  <div className="relative h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] overflow-hidden rounded-tl-[22px] rounded-tr-none rounded-br-none rounded-bl-none">
                    <Image
                      src="/chaitra.png"
                      alt="Dr. Chaithra"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="md:col-span-6">
            <p className="mb-2 font-semibold text-rose-500">• About</p>
            <h2 className="text-3xl font-extrabold leading-tight text-[#24305a] sm:text-4xl lg:text-5xl">
              Turning Dreams of Family
              <br className="hidden sm:block" /> into Reality
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg">
              Dr. Chaithra S. K. is an infertility specialist at Ovum Fertility, Bangalore, with over 14 years of experience in reproductive medicine. Trained in reproductive medicine and endoscopy at Ruby Hall Clinic, and holding a diploma in advanced reproductive medicine from Kiel University, she blends clinical expertise with a compassionate and personalised approach to patient care.
            </p>
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
        </div>
      </section>
    </main>
  );
}
