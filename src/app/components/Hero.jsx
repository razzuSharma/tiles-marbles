import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Image fills parent */}
      <Image
        src="/hero-section.jpg"
        alt="Elegant interior with premium tiles"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Elevate Your Spaces
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Premium Tiles and Marbles for Elegant Interiors
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/collections" passHref>
              <button
                className="
        bg-gradient-to-r from-cyan-600 to-green-500
        text-white
        px-8 py-3
        font-semibold
        rounded-full
        shadow-md
        hover:shadow-lg
        hover:scale-105
        transition
        duration-300
        ease-in-out
        focus:outline-none
        focus:ring-4
        focus:ring-cyan-300
        min-w-[160px]
      "
              >
                Explore Collections
              </button>
            </Link>
            {/* <Link href="/collections" passHref>
    <button
      className="
        bg-gradient-to-r from-green-600 to-cyan-500
        text-white
        px-8 py-3
        font-semibold
        rounded-full
        shadow-md
        hover:shadow-lg
        hover:scale-105
        transition
        duration-300
        ease-in-out
        focus:outline-none
        focus:ring-4
        focus:ring-cyan-300
        min-w-[160px]
      "
    >
      Visit Us
    </button>
  </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
