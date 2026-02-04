"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const collections = [
  {
    title: "The Location",
    description:
      "Find the perfect place for the tiles and marbles at very reasonable pricing. Make your home decor more elegant by contacting us now. Our showroom in Itahari showcases the finest selection of premium materials.",
    image: "/collections/image-1.jpg",
    tag: "Showroom",
  },
  {
    title: "Granite Elegance",
    description:
      "Explore premium granite pieces from our curated set — the perfect blend of luxury and durability for a dream decor. Each piece is carefully selected to ensure the highest quality and stunning visual appeal.",
    image: "/collections/image-2.jpg",
    tag: "Premium",
  },
  {
    title: "Textured Wall Tiles",
    description:
      "Modern wall tiles with subtle textures — ideal for feature walls and artistic interiors that truly stand out. Create stunning focal points in any room with our exclusive textured tile collection.",
    image: "/collections/image-4.jpg",
    tag: "Trending",
  },
];

const features = [
  {
    title: "Premium Quality",
    description: "Handpicked materials from the finest sources around the world",
  },
  {
    title: "Expert Craftsmanship",
    description: "Precision cutting and finishing for perfect installation",
  },
  {
    title: "Wide Selection",
    description: "Over 500+ unique designs and patterns to choose from",
  },
];

export default function CollectionsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-dark)] via-[var(--color-primary-light)] to-[var(--color-bg-dark)]" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,98,0.15)_0%,transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(201,169,98,0.1)_0%,transparent_50%)]" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 section-container text-center text-white">
          {/* Breadcrumb */}
          <nav 
            className={`flex justify-center gap-2 text-sm text-white/60 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[var(--color-accent)]">Collections</span>
          </nav>

          {/* Title */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our Premium
            <span className="block text-[var(--color-accent)]">Collections</span>
          </h1>

          {/* Description */}
          <p 
            className={`text-lg text-white/70 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Discover our handpicked selection of premium tiles and marbles, 
            showcasing the finest craftsmanship and design for your spaces.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section ref={sectionRef} className="py-24 relative">
        <div className="section-container">
          {/* Collection Items */}
          <div className="space-y-32">
            {collections.map((item, index) => (
              <CollectionItem
                key={index}
                item={item}
                index={index}
                isReversed={index % 2 !== 0}
                isActive={activeIndex === index}
                onHover={() => setActiveIndex(index)}
                onLeave={() => setActiveIndex(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[var(--color-bg-secondary)] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="section-title">The Shivam Difference</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-8 rounded-2xl bg-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[var(--color-accent)]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-bg-dark)]" />
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.15)_0%,transparent_70%)]" />
        </div>

        <div className="section-container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Visit our showroom in Itahari or contact us for a personalized consultation. 
            Let us help you bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9824068991" className="btn-primary">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now: 9824068991
            </a>
            <Link href="/#categories" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50">
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function CollectionItem({ item, index, isReversed, isActive, onHover, onLeave }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-12 lg:gap-20`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Image */}
      <div 
        className={`lg:w-1/2 w-full transition-all duration-1000 ease-[var(--ease-out-expo)] ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : isReversed 
              ? "opacity-0 translate-x-12" 
              : "opacity-0 -translate-x-12"
        }`}
      >
        <div className="relative group">
          {/* Main Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-xl)]">
            <div className="aspect-[4/3] relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] ${
                  isActive ? "scale-110" : "scale-100"
                }`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Overlay */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Tag */}
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium shadow-lg">
                {item.tag}
              </span>
            </div>
          </div>

          {/* Decorative Frame */}
          <div 
            className={`absolute -z-10 w-full h-full rounded-2xl border-2 border-[var(--color-accent)]/30 transition-all duration-700 ease-[var(--ease-out-expo)] ${
              isReversed 
                ? isActive ? "-top-4 -left-4" : "-top-2 -left-2" 
                : isActive ? "-bottom-4 -right-4" : "-bottom-2 -right-2"
            }`}
          />
        </div>
      </div>

      {/* Text */}
      <div 
        className={`lg:w-1/2 w-full transition-all duration-1000 ease-[var(--ease-out-expo)] ${
          isVisible 
            ? "opacity-100 translate-x-0" 
            : isReversed 
              ? "opacity-0 -translate-x-12" 
              : "opacity-0 translate-x-12"
        }`}
        style={{ transitionDelay: "200ms" }}
      >
        {/* Number Badge */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-6xl font-bold text-[var(--color-accent)]/20">
            0{index + 1}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-accent)]/30 to-transparent" />
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
          {item.title}
        </h3>
        
        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
          {item.description}
        </p>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {["Premium Quality Materials", "Expert Installation Support", "Competitive Pricing"].map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-[var(--color-text-muted)]">
              <svg
                className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/#categories"
          className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:text-[var(--color-accent-hover)] transition-colors group"
        >
          Explore This Collection
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
