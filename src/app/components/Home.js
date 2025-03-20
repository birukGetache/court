"use client"
import Image from 'next/image';
import { useState } from 'react';
import { motion } from "framer-motion";

const images = [
  "/home.png",
  "/home.png",
  "/home.png",
  "/home.png",
  "/home.png",
  "/home.png",
  "/home.png",
  "/home.png",
  "/home.png",
];
const Home = () => {
    const [currentNumber, setCurrentNumber] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      handleIncrease()
    };
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1) % images.length);
      handleDecrease()
    };

    const handleIncrease = () => {
      setCurrentNumber((prev) => (prev < 10 ? prev + 1 : 1)); // Loop back to 1 after 10
    };
  
    const handleDecrease = () => {
      setCurrentNumber((prev) => (prev > 1 ? prev - 1 : 10)); // Loop back to 10 after 1
    };
  return (
    <div className='bg-white h-fit w-screen px-8 sm:px-50 box-border overflow-x-hidden'>
    <div className=" md:flex md:flex-col lg:grid lg:grid-cols-3  gap-4 relative bg-white pt-44 items-center m-auto w-fit">
      <div className="col-span-2 bg-gray-100  rounded-lg flex flex-col">
      <motion.div
        key={currentIndex} // This ensures smooth re-rendering when the index changes
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full"
      >
        <Image
          src={images[currentIndex]}
          alt="Description of Image"
          width={800}
          height={600}
          priority
          className="w-full rounded-lg"
        />
        </motion.div>
       
        <div className="flex  items-center justify-center gap-8   bg-gray-100 rounded-lg shadow-lg">
      {/* First Child Div: Arrows and Logo */}
      <div className="flex items-center gap-0 -mt-8 w-full max-w-md">
        {/* Left Arrow */} 
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-200  w-16 h-16 text-black hover:bg-gray-300 transition-colors"
        >
          ←
        </button>

      

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="p-2   w-16 h-16 bg-[#083c4c] hover:bg-gray-300 text-black transition-colors"
        >
          →
        </button>
      </div>

      {/* Second Child Div: Numbers */}
      <div className="flex items-center justify-center w-full max-w-md">
      <div className="text-4xl font-bold text-gray-800">
      <div className="flex items-center w-44 space-x-2">
  <span className="text-lg font-semibold text-gray-700">01</span>
  <div className="grid grid-cols-10 bg-gray-200 w-40 rounded-full h-2">
    {Array.from({ length: currentNumber }, (_, i) => (
      <div key={i} className="bg-yellow-400 h-2 "></div>
    ))}
  </div>
  <span className="text-lg font-semibold text-gray-700">10</span>
</div>

</div>

      </div>
    </div>
      </div>
      <div className=" sm:transform sm:-translate-x-1/2  bg-yellow bg-opacity-50 h-fit  text-yellow-500 bg-white/50 backdrop-blur-md  shadow-lg p-4 rounded-lg">
        <h3 className="text-lg font-bold">KEY UPDATES: E-PORTAL SERVICES</h3>
        <p>we are pleased to accounce significant enhancements to our E-portal Services. designed to improve user experience , effiency and accessibility. these updates introduce a more intutive interface faster processing times. and enhanced security feature to ensure seamless acess to judicial services.</p>
        <button>E_PORTAL</button>
      </div>
    </div>
    </div>
  );
};

export default Home;
