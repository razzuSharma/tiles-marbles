import Image from "next/image";

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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Elevate Your Spaces</h1>
          <p className="text-xl md:text-2xl mb-6">Premium Tiles and Marbles for Elegant Interiors</p>
          <button className="bg-white text-black px-6 py-3 font-semibold rounded-3xl hover:bg-gray-200 transition">
            Explore Collections
          </button>
        </div>
      </div>
    </section>
  );
}
