"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Categories", href: "/#categories" },
    { label: "Collections", href: "/collections" },
  ];

  const handleClick = () => {
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <h1 className="text-2xl font-bold text-gray-800 cursor-default">
            Shivom Marbles and Tiles Suppliers.
          </h1>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-black transition-transform ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition-transform ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative cursor-pointer hover:text-yellow-300 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-white text-gray-700 font-medium space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleClick}
              className="block hover:text-yellow-500 transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
