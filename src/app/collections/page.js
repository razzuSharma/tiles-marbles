"use client";
import Image from "next/image";
import React from "react";

const collections = [
  {
    title: "The Location",
    description:
      "Find the perfect place for the tiles and marbles at very reasonable pricing. Make your home decor more elegant by contacting us now.",
    image: "/collections/image-1.jpg",
  },
  {
    title: "Granite Elegance",
    description:
      "Explore premium granite pieces from our curated set — the perfect blend of luxury and durability for a dream decor.",
    image: "/collections/image-2.jpg",
  },
  {
    title: "Textured Wall Tiles",
    description:
      "Modern wall tiles with subtle textures — ideal for feature walls and artistic interiors that truly stand out.",
    image: "/collections/image-3.jpg",
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-yellow-600 mb-16 drop-shadow-sm">
          Our Premium Collections
        </h2>

        {collections.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-8 mb-20`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:w-1/2 w-full text-center md:text-left space-y-4">
              <h3 className="text-3xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
