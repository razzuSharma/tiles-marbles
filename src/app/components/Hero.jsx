"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-section.jpg"
          alt="Elegant interior with premium tiles"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className={`absolute top-1/4 left-10 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-3xl transition-all duration-1000 ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ transitionDelay: "500ms" }}
          />
          <div 
            className={`absolute bottom-1/4 right-10 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl transition-all duration-1000 ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{ transitionDelay: "700ms" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white pt-20">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span className="text-sm font-medium text-white/90">
            Premium Quality Since 2010
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Elevate Your Spaces
          <span className="block mt-2 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-accent)] bg-clip-text text-transparent">
            With Premium Tiles
          </span>
        </h1>

        {/* Subheading */}
        <p 
          className={`text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Discover exquisite marbles, granites, and ceramic tiles that transform 
          your interiors into works of art. Quality craftsmanship from Nepal.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <Link href="/collections">
            <button className="btn-primary text-base px-8 py-4 min-w-[180px]">
              Explore Collections
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
            </button>
          </Link>
          <Link href="/#categories">
            <button className="btn-secondary text-base px-8 py-4 min-w-[180px] bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50">
              View Categories
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div 
          className={`mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "1000+", label: "Projects Done" },
            { value: "500+", label: "Happy Clients" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1000ms" }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            Scroll Down
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
