"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Services from "./Servieces";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");  // Stores text before ","
  const [secondPart, setSecondPart] = useState('');
  const [thirdPart, setThirdPart] = useState('');

  const fullText =
    "Together We survive for a society where justice is not just a word, but really for all";

  useEffect(() => {
    let currentIndex = 0;
    let firstPart = "";
    let secondPart = "";
    let thirdPart = '';
    let index = 0;
    let foundComma = false;
    let comma = '';

    const intervalId = setInterval(() => {
      const currentChar = fullText[currentIndex];

      if (currentChar === "," || foundComma) {
        comma = currentChar;
        foundComma = true;
        thirdPart += currentChar;
      } else if (!foundComma && index == 0) {
        if (currentChar == 'w' && fullText[currentIndex + 1] == "h") {
          index = index + 1;
          secondPart += currentChar;
        }
        if (!(currentChar == 'w' && fullText[currentIndex + 1] == "h")) {
          firstPart += currentChar;
        }
      } else if (index == 1) {
        secondPart += currentChar;
      } else if (!foundComma && currentChar == 'w') {
        if (fullText[currentIndex + 1] == "h") {
          secondPart += currentChar;
        }
      }

      // Update states
      setDisplayText(firstPart);
      setSecondPart(secondPart);
      setThirdPart(thirdPart);

      currentIndex += 1;

      // Stop when all characters are typed
      if (currentIndex === fullText.length) {
        clearInterval(intervalId);
      }
    }, 100); // Typing speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className=" md:min-h-fit  min-h-screen w-screen bg-[#083c4c]   lg:grid lg:grid-cols-2  relative">
        {/* Left Section */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-tr md:w-screen from-[#083c4c] via-[#0a3e4e] to-[#838361] z-10"></div>
        <div className="md-min-h-fit md:w-screen min-h-52 bg-[#083c4c] flex flex-col gap-3 justify-center lg:w-[unset]  pl-6 sm:pl-32 pt-52 text-white text-lg z-20">
   

          <p className="text-[#AA8C55] font-serif md:text-xl lg:text-5xl z-20">{displayText}</p>
          <p className="z-20">
            {secondPart.split("").map((char, index) => (
              index < 5 ? (
                <span key={index} className="text-[#AA8C55] font-serif text-4xl inline-block z-20">
                  {char === " " ? "\u00A0" : char} {/* Handling spaces explicitly */}
                </span>
              ) : (
                <span key={index} className="text-white uppercase font-serif text-4xl inline-block z-20">
                  {char === " " ? "\u00A0" : char} {/* Handling spaces explicitly */}
                </span>
              )
            ))}
          </p>
          <p className="text-[#AA8C55] font-serif md:text-xl lg:text-5xl z-20">{thirdPart}</p>
        </div>

        {/* Right Section with Gradients and Image */}
        <div className="bg-[#083c4c] md:h-fit lg:h-screen  relative flex items-center justify-center">
  {/* Gradients */}
  <div className="hidden md:block absolute inset-0 bg-gradient-to-tr  from-[#083c4c] via-[#0a3e4e] to-[#838361] z-10"></div>
  <div className="hidden md:block absolute top-0 left-0 w-1/3 h-full  bg-gradient-to-r from-[#083c4c] to-transparent z-20"></div>

  {/* Image */}
  <div className=''>
    <Image
      src="/court.png"
      width={500}
      height={800}
      priority
      alt="Ahmara Supreme Court"
      className="relative z-30 m-auto w-[250px] sm:w-[300px] lg:w-[500px]" // Responsive width for medium and large screens
    />
  </div>
</div>
      </div>

      {/* Services Component */}
      <div className="relative z-50"> {/* Higher z-index than gradients */}
        <Services />
      </div>
    </div>
  );
};

export default Hero;