import Image from "next/image";

export default function CategoryCard({ name, type, price, image }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
      {/* Image */}
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="w-full h-60 sm:h-64 object-cover"
        loading="lazy"
        quality={75}
      />

      {/* Info Section */}
      <div className="bg-gradient-to-t from-black/80 to-transparent px-5 py-4 text-white">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-300">{type}</p>
        <p className="mt-2 text-yellow-300 font-bold text-lg">{price}</p>
      </div>
    </div>
  );
}
