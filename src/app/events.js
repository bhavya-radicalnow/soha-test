import Image from "next/image";

export default function EventsConferences() {
  const events = [
    {
      img: "/event-2022.png",
      caption:
        "Speaker at International Conference on Reproductive Health, 2022",
    },
    {
      img: "/event-2023.png",
      caption:
        "Guest Lecturer at National Gynaecology Symposium, 2023",
    },
    {
      img: "/event-2021.png",
      caption:
        "Panellist on Women’s Health Summit, 2021",
    },
    {
      img: "/event(2)-2022.png",
      caption:
        "Speaker at International Conference on Reproductive Health, 2022",
    },
  ];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:px-8">
        <p className="mb-2 font-semibold text-rose-400">• Events & Conferences</p>

        <h2 className="text-3xl font-extrabold leading-tight text-[#24305a] sm:text-4xl lg:text-5xl">
          Attended by Dr. Chaithra S K
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e, i) => (
            <article key={i}>
              <div className="relative w-full overflow-hidden rounded-[20px]">
                <div className="relative aspect-[16/11] w-full">
                  <Image
                    src={e.img}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={i < 2}
                  />
                </div>
              </div>

              <p className="mt-3 text-sm sm:text-base leading-snug text-gray-900">
                {e.caption}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
