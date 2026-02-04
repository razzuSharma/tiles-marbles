"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.587 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.587 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.587 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.587 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Premium Quality",
    description: "Handpicked materials from the finest sources",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Best Prices",
    description: "Competitive rates without compromising quality",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Expert Support",
    description: "Professional guidance for your projects",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Wide Selection",
    description: "Extensive range of tiles and marbles",
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-[var(--color-bg-primary)] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <div 
            className={`lg:w-1/2 w-full transition-all duration-1000 ease-[var(--ease-out-expo)] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-xl)]">
                <Image
                  src="/image-about-us.jpg"
                  alt="Showroom display of tiles and marbles"
                  width={600}
                  height={500}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 px-5 py-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[var(--color-accent)]">15+</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">Years of</p>
                      <p className="text-sm text-[var(--color-text-muted)]">Excellence</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--color-accent)]/30 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[var(--color-accent)]/20 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 w-full">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 mb-6 transition-all duration-700 ease-[var(--ease-out-expo)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <svg
                className="w-4 h-4 text-[var(--color-accent)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium text-[var(--color-accent)]">
                About Us
              </span>
            </div>

            {/* Title */}
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight transition-all duration-700 ease-[var(--ease-out-expo)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Crafting Beautiful Spaces
              <span className="block text-[var(--color-accent)]">Since 2010</span>
            </h2>

            {/* Description */}
            <div 
              className={`space-y-4 text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8 transition-all duration-700 ease-[var(--ease-out-expo)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p>
                Based in <strong className="text-[var(--color-text-primary)]">Itahari-5, Sunsari, Nepal</strong>, 
                Shivam Marbles and Tiles Suppliers has been a trusted name in the industry, 
                offering premium-quality marbles, granites, ceramic tiles, wall claddings, 
                and sanitary ware for over a decade.
              </p>
              <p>
                Our mission is to provide elegant, durable, and affordable materials for your home, 
                office, or commercial spaces. Whether you are designing a modern kitchen, a luxurious 
                bathroom, or a polished living area, we have a wide variety of textures, patterns, 
                and finishes to suit every need.
              </p>
            </div>

            {/* Features Grid */}
            <div 
              className={`grid grid-cols-2 gap-4 mb-8 transition-all duration-700 ease-[var(--ease-out-expo)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-bg-secondary)] hover:bg-[var(--color-accent)]/5 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-[var(--ease-out-expo)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <a href="/#categories" className="btn-primary">
                Browse Products
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="https://maps.google.com/?q=Itahari-5,Sunsari,Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Visit Our Showroom
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
