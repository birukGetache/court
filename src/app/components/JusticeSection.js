"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Add the import for motion

const JudicialStructure = () => {
  const stats = [
    { label: "CASES", value: 124 },
    { label: "RULINGS", value: 126 },
    { label: "AMENDMENTS", value: 78 },
  ];
  
  return (
    <div className="relative w-full md:h-full lg:h-screen flex md:bg[url('/justice.svg')] lg:bg-[url('/justiceImage.png')]   bg-cover flex-col items-center justify-center bg-[#083c4c] text-white p-8">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Background.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content */}
      <div className="relative md:grid z-10 lg:gap-100 text-center lg:flex  lg:items-center">
        <div className="p-6 w-full max-w-lg bg-black/30 rounded-lg mx-auto text-white">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4 font-serif">
            JUDICIAL STRUCTURE & AUTHORITY
          </h1>

          {/* Description */}
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            The Ambiqra Supreme Court is the highest judicial authority in the Ambiqra Regional state, responsible for overseeing senior courts and ensuring the activities administration of justice. Operating under the Ethiopian Federal Constitution and regional laws, it provides legal guidance to independent courts, ensuring uniformity in judicial decisions.
          </p>

          <div className="flex justify-center gap-12 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                {/* Animated number */}
                <motion.p
                  className="text-4xl font-bold relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: index * 0.3 },
                  }}
                  viewport={{ once: false }}
                >
                  <AnimatedCounter target={stat.value} />
                  +
                </motion.p>

                {/* Line below number */}
                <motion.div
                  className="w-12 h-1 bg-yellow-400 mx-auto mt-2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.4 }}
                ></motion.div>

                {/* Label */}
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission and Vision */}
        <div className=" sm:grid grid-cols-2 md:mt-20 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <div className="p-6 w-full max-w-lg bg-black/30 rounded-lg mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4 font-serif">OUR MISSION</h2>
            <p className="text-lg font-sans">
              The Ambiqra Supreme Court is committed to continuing justice concerning justice and safeguarding the constitutional right of all citizens. Our mission is to provide fair, transparent, and efficient policies for people.
            </p>
          </div>

          <div className="p-6 w-full max-w-lg bg-black/30 rounded-lg mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4 font-serif">OUR VISION</h2>
            <p className="text-lg font-sans">
              The Ambiqra Supreme Court considers a Western transformers who are closely related against that solution; they use all law and human justice for all by which they control transformation and affect reforms, such court ensures a decisive efficiency, accountability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ target }) => {
    const [count, setCount] = useState(0);
    const [inView, setInView] = useState(false);
  
    useEffect(() => {
      if (inView) {
        let start = 0;
        const end = target;
        if (start === end) return;
  
        let incrementTime = 20; // Speed of counting
        let step = Math.ceil(end / 50); // Smooth step count
  
        let timer = setInterval(() => {
          start += step;
          if (start > end) {
            start = end;
            clearInterval(timer);
          }
          setCount(start);
        }, incrementTime);
  
        return () => clearInterval(timer);
      }
    }, [inView, target]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true); // Element is in view
          }
        },
        { threshold: 0.5 } // Adjust threshold as needed
      );
  
      const element = document.getElementById(`counter-${target}`);
      if (element) {
        observer.observe(element);
      }
  
      return () => observer.disconnect();
    }, [target]);
  
    return <span id={`counter-${target}`}>{count}</span>;
  };
  

export default JudicialStructure;
