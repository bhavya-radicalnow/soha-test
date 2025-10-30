import Image from "next/image";

export default function ApproachSection() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7 lg:col-span-7">
            <p className="mb-3 font-semibold text-rose-500">• Approach</p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#24305a] sm:text-4xl lg:text-5xl">
              Personalized Fertility
              <br />
              <span className="text-rose-400">Care with a Human Touch</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg">
              Dr. Chaithra delivers evidence-based, personalised fertility treatments that balance
              realistic expectations with cutting-edge medical techniques. She leverages the latest
              technology to tailor care to each patient’s unique needs and actively drives innovation
              in reproductive medicine. With a strong focus on patient education and continuity of
              care, she has guided thousands of national and international patients through their
              fertility journeys with expertise and compassion.
            </p>

            <div className="mt-8">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-400 to-pink-500 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
              >
                Book A Consultation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-5">
            <div className="relative w-full overflow-hidden rounded-[28px]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/care.png"
                  alt="Hands holding a uterus cutout"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 560px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
