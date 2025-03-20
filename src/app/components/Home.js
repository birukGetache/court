"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const images = ["/home.png", "/home.png", "/home.png", "/home.png", "/home.png"];

const Home = () => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setCurrentNumber((prev) => (prev < 10 ? prev + 1 : 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setCurrentNumber((prev) => (prev > 1 ? prev - 1 : 10));
  };

  return (
    <div className="bg-white w-full min-h-screen px-4 sm:px-8 overflow-hidden">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 items-center pt-60 w-full">
        {/* Image Section */}
        <div className="col-span-2 bg-gray-100 rounded-lg flex flex-col items-center p-4 shadow-md">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full flex justify-center"
          >
            <Image
              src={images[currentIndex]}
              alt="Showcased Image"
              width={500}
              height={600}
              priority
              className="w-auto max-w-full h-auto rounded-lg"
            />
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 bg-gray-100 rounded-lg shadow-md p-4 w-full">
            {/* Arrows */}
            <button
              onClick={handlePrev}
              className="p-3 bg-gray-200 w-14 h-14 text-black hover:bg-gray-300 transition rounded-full"
            >
              ←
            </button>

            {/* Progress Bar */}
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-700">01</span>
              <div className="grid grid-cols-10 bg-gray-200 w-40 rounded-full h-2">
                {Array.from({ length: currentNumber }, (_, i) => (
                  <div key={i} className="bg-yellow-400 h-2 rounded"></div>
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-700">10</span>
            </div>

            <button
              onClick={handleNext}
              className="p-3 w-14 h-14 bg-[#083c4c] hover:bg-gray-300 text-white transition rounded-full"
            >
              →
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-yellow-100 text-yellow-700 bg-opacity-50 backdrop-blur-md shadow-lg p-6 rounded-lg w-full lg:w-80">
          <h3 className="text-lg font-bold">KEY UPDATES: E-PORTAL SERVICES</h3>
          <p className="text-sm leading-relaxed mt-2">
            We are pleased to announce significant enhancements to our E-Portal Services, designed
            to improve user experience, efficiency, and accessibility. These updates introduce a
            more intuitive interface, faster processing times, and enhanced security features to
            ensure seamless access to judicial services.
          </p>
          <button className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
            E-PORTAL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
