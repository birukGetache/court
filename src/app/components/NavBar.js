"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0  py-14  w-screen flex justify-between items-center z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black bg-opacity-80" : "bg-transparent"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:flex px-50 py-14">
        <ul className="flex gap-10 text-[#cbbc86]">
          <li>Home</li>
          <li>Portal</li>
          <li className="text-nowrap">Case Document</li>
          <li className="text-nowrap">About The Court</li>
        </ul>
      </div>

      {/* Logo */}
      <div className="absolute  sm:px-50 sm:py-14 left-1/2 transform -translate-x-1/2">
        <Image
          src="/ahmaraSupremeCourt.png"
          width={150}
          height={150}
          priority
          alt="Ahmara Supreme Court"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex px-50 py-16">
        <ul className="flex gap-10 text-[#cbbc86]">
          <li className="text-nowrap">Court Service</li>
          <li>News</li>
          <li>Contacts</li>
          <li className="text-nowrap">Eng / Ahm</li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center text-[#cbbc86] px-4">
        {isMenuOpen ? (
          <X size={28} onClick={() => setIsMenuOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu size={28} onClick={() => setIsMenuOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black bg-opacity-90 text-[#cbbc86] p-6 flex flex-col items-center space-y-4 lg:hidden">
          <ul className="flex flex-col  gap-4 text-center">
            <li onClick={() => setIsMenuOpen(false)}>Home</li>
            <li onClick={() => setIsMenuOpen(false)}>Portal</li>
            <li onClick={() => setIsMenuOpen(false)}>Case Document</li>
            <li onClick={() => setIsMenuOpen(false)}>About The Court</li>
            <li onClick={() => setIsMenuOpen(false)}>Court Service</li>
            <li onClick={() => setIsMenuOpen(false)}>News</li>
            <li onClick={() => setIsMenuOpen(false)}>Contacts</li>
            <li onClick={() => setIsMenuOpen(false)}>Eng / Ahm</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
