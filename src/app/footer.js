import Image from "next/image";

export default function FooterCTA() {
  return (
    <main className="bg-[#EFEFEF]">
      <footer className="relative mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        <section className="relative overflow-hidden rounded-[28px] bg-[#EFEFEF]">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 md:gap-10 px-6 md:px-10 lg:px-14 py-10">
            <div className="md:col-span-7 flex flex-col justify-center">
              <p className="mb-2 font-semibold text-rose-400">• Contact Us Today</p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#2a2230]">
                Join Us to Begin Your
                <br />
                <span className="text-rose-400">Parenthood Journey Today</span>
              </h2>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <Info
                  className="lg:border-r lg:border-black/10 lg:pr-8"
                  icon={
                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.11 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.89.31 1.76.57 2.6a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.6.57A2 2 0 0 1 22 16.92Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                  title="Call Us:"
                  value={<a href="tel:08045309999">080-45309999</a>}
                />

                <Info
                  className="lg:border-r lg:border-black/10 lg:px-8"
                  icon={
                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                      <path
                        d="M4 4h16a2 2 0 0 1 2 2v.2l-10 6-10-6V6a2 2 0 0 1 2-2Zm18 5.2V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.2l10 6 10-6Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                  title="E-mail Us:"
                  value={<a href="mailto:info@ovumfertility.in">info@ovumfertility.in</a>}
                />

                <Info
                  className="lg:border-r lg:border-black/10 lg:px-8"
                  icon={
                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                      <path
                        d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-7 10h14a8 8 0 0 1-14 0Zm7-8a8 8 0 0 1 7.94 7H4.06A8 8 0 0 1 12 4Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                  title="Our Website:"
                  value={
                    <a
                      href="https://www.ovumfertility.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.ovumfertility.in
                    </a>
                  }
                />

                <Info
                  className="lg:pl-8"
                  icon={
                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                      <path
                        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                  title="Visit Us:"
                  value={
                    <>
                      Bhattarahalli
                      <br />
                      Kalyan Nagar
                      <br />
                      Hoskote
                      <br />
                      Hennur
                    </>
                  }
                />
              </div>

              <div className="mt-10">
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

            <div className="md:col-span-5 relative">
              <div className="absolute bottom-0 right-4 left-auto">
                <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem]">
                  <Image
                    src="/child.png"
                    alt="Happy baby"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                {/* ellipse shadow */}
                <div className="mx-auto mt-2 h-6 w-48 rounded-full bg-rose-300/50 blur-md" />
              </div>
            </div>
          </div>
        </section>
      </footer>
    </main>
  );
}

function Info({ icon, title, value, className = "" }) {
  return (
    <div className={`flex items-start gap-4 py-4 ${className}`}>
      <div className="mt-1 text-rose-500 shrink-0">{icon}</div>
      <div className="leading-6">
        <div className="text-base font-semibold text-[#2a2230]">{title}</div>
        <div className="mt-1 text-sm text-[#2a2230]">{value}</div>
      </div>
    </div>
  );
}
