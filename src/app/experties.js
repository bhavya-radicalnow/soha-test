import Image from "next/image";

export default function FieldOfExpertise() {
  const images = [
    "/highrisk.png",
    "/laproscopic.png",
    "/ovarian.png",
    "/donor.png",
    "/poor-ovarian.png",
    "/implantation.png",
    "/ultrasonography.png",
    "/hands.png",
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        <div
          className="rounded-[28px] p-6 sm:p-8 lg:p-10"
          style={{
            background:
              "linear-gradient(100.24deg, rgba(252, 241, 236, 0.8) 20.09%, rgba(228, 243, 253, 0.6) 48.04%, rgba(252, 243, 239, 0.5) 80.99%)",
          }}
        >
          <h3 className="text-3xl font-extrabold text-[#24305a] sm:text-4xl">
            Field of Expertise
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {images.map((src, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white shadow-sm p-4 sm:p-5 flex items-center justify-center transition hover:shadow-md"
              >
                <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 28vw, (max-width: 1200px) 16vw, 140px"
                    priority={i < 4}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
