"use client"
import Image from "next/image";
import { useState } from "react";
const Fotter = () =>{
    const [source, setSource] = useState('online');
    return(<footer className="bg-[#083c4c] text-white py-6  w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Portal Court Sonics */}
            <div className="border-r flex justify-center items-center border-gray-700 pr-8">
             <Image
                      src="/ahmaraSupremeCourt.png"
                      width={150}
                      height={150}
                      priority
                      alt="Ahmara Supreme Court"
                      />
            </div>
      
            {/* Column 2: Court Document News */}
            <div className="border-r border-gray-700 pr-8">
  <div className="grid grid-cols-1 col-span-2 justify-between p-8  text-white">
    {/* First Column */}
    <div className="">
      {/* Main Heading */}
      <p className="text-xl font-bold mb-6 text-[#cbbc86] underline decoration-2 decoration-[#cbbc86] underline-offset-4">Main</p>

      {/* Links Container */}
      <div className="flex gap-16">
        {/* First Row of Links */}
        <div>
          <ul className="space-y-4 text-[#cbbc86]">
            <li className="hover:text-[#e0d5a8] transition duration-300">Home</li>
            <li className="hover:text-[#e0d5a8] transition duration-300">Portal</li>
          </ul>
        </div>

        {/* Second Row of Links */}
        <div>
          <ul className="space-y-4 text-[#cbbc86]">
            <li className="text-nowrap hover:text-[#e0d5a8] transition duration-300">Case Document</li>
            <li className="text-nowrap hover:text-[#e0d5a8] transition duration-300">About The Court</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
      
            <div className="border-r border-gray-700 pr-8">
  <div className="grid grid-cols-1 col-span-2 justify-between p-8  text-white">
    {/* First Column */}
    <div className="">
      {/* Main Heading */}
      <p className="text-xl font-bold mb-6 text-[#cbbc86] underline decoration-2 decoration-[#cbbc86] underline-offset-4">Second Main</p>

      {/* Links Container */}
      <div className="flex gap-16">
        {/* First Row of Links */}
        <div>
          <ul className="space-y-4 text-[#cbbc86]">
            <li className="hover:text-[#e0d5a8] transition duration-300">Court Service</li>
            <li className="hover:text-[#e0d5a8] transition duration-300">News</li>
          </ul>
        </div>

        {/* Second Row of Links */}
        <div>
          <ul className="space-y-4 text-[#cbbc86]">
            <li className="text-nowrap hover:text-[#e0d5a8] transition duration-300">Contacs</li>
            <li className="text-nowrap hover:text-[#e0d5a8] transition duration-300">Eng / Ahm</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
      
            {/* Column 3: About & Contact */}
            <div>
            <div className=" flex items-center justify-center ">
      <div className=" shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        {/* Input Field with Bottom Border Only */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter your text here"
            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 bg-transparent"
          />
        </div>

        {/* Paragraph with Border, Transparent Background, and Rounded Corners */}
        <div className="mb-6">
          <p className="border border-gray-300  bg-transparent rounded-full p-4 text-gray-700">
            Get ASX: Apple alias
          </p>
        </div>

        {/* Dropdown for Source Selection */}
        

        {/* Buttons for Play Store and App Store with SVGs */}
        <div className="flex justify-center space-x-4">
          {/* Play Store Button */}
         <p>play store</p>
         <p>app store</p>
        </div>
      </div>
    </div>

            </div>
          </div>
      
          {/* Bottom Text */}
          <div className="text-center mt-8 text-gray-400 border-t border-gray-700 pt-6">
            <p>Developed By Bernos tech with BIT</p>
          </div>
        </div>
      </footer>)
}

export default Fotter;