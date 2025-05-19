import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Based in <strong>Itahari-5, Sunsari, Nepal</strong>, Shivam Marbles and Tiles Suppliers has
            been a trusted name in the industry, offering premium-quality marbles, granites,
            ceramic tiles, wall claddings, and sanitary ware for over a decade.
            <br /><br />
            Our mission is to provide elegant, durable, and affordable materials for your home,
            office, or commercial spaces. Whether you are designing a modern kitchen, a luxurious
            bathroom, or a polished living area, we have a wide variety of textures, patterns,
            and finishes to suit every need.
            <br /><br />
            Visit our showroom to explore the finest selection of tiles and marbles that elevate
            your space with style and substance.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/image-about-us.jpg" // Make sure this image is in your /public folder
            alt="Showroom display of tiles and marbles"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
