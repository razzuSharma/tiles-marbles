"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Categories", href: "/#categories" },
    { label: "Collections", href: "/collections" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };

  const isActive = (href) => {
    if (href.startsWith("/#")) {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[var(--ease-out-expo)] ${
        scrolled
          ? "glass py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Shivam Marble and Tiles"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <h1
              className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-[var(--color-text-primary)]" : "text-white"
              }`}
            >
              Shivam Marble & Tiles
            </h1>
            <p
              className={`text-xs transition-colors duration-300 ${
                scrolled ? "text-[var(--color-text-muted)]" : "text-white/80"
              }`}
            >
              Premium Suppliers
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative text-sm font-medium transition-colors duration-300 link-underline ${
                scrolled
                  ? isActive(item.href)
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  : isActive(item.href)
                  ? "text-[var(--color-accent)]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#categories">
            <button className="btn-primary text-sm py-2.5 px-5">
              Get Quote
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 h-0.5 w-6 rounded-full transition-all duration-300 ease-[var(--ease-out-expo)] ${
                scrolled ? "bg-[var(--color-text-primary)]" : "bg-white"
              } ${isOpen ? "top-2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 rounded-full transition-all duration-300 ease-[var(--ease-out-expo)] ${
                scrolled ? "bg-[var(--color-text-primary)]" : "bg-white"
              } ${isOpen ? "opacity-0 -translate-x-4" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 rounded-full transition-all duration-300 ease-[var(--ease-out-expo)] ${
                scrolled ? "bg-[var(--color-text-primary)]" : "bg-white"
              } ${isOpen ? "top-2 -rotate-45" : "top-4"}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl md:hidden transition-transform duration-500 ease-[var(--ease-out-expo)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-10">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleClick}
                className={`block py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                    : "text-[var(--color-text-secondary)] hover:bg-gray-50 hover:text-[var(--color-text-primary)]"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <a
              href="tel:9824068991"
              className="flex items-center gap-3 py-3 px-4 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us: 9824068991
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
