"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; 

const JudicialStructure = () => {
  const stats = [
    { label: "CASES", value: 124 },
    { label: "RULINGS", value: 126 },
    { label: "AMENDMENTS", value: 78 },
  ];
  
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#083c4c] text-white p-4 md:p-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Background.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center w-full max-w-4xl px-4">
        <div className="p-4 md:p-6 w-full bg-black/30 rounded-lg mx-auto text-white">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4 font-serif break-words">
            JUDICIAL STRUCTURE & AUTHORITY
          </h1>

          {/* Description */}
          <p className="text-lg mb-8 max-w-2xl mx-auto break-words">
            The Ambiqra Supreme Court is the highest judicial authority in the Ambiqra Regional state, responsible for overseeing senior courts and ensuring the administration of justice. Operating under the Ethiopian Federal Constitution and regional laws, it provides legal guidance to independent courts, ensuring uniformity in judicial decisions.
          </p>

          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-4 md:p-6 w-full bg-black/30 rounded-lg mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4 font-serif break-words">OUR MISSION</h2>
            <p className="text-lg font-sans break-words">
              The Ambiqra Supreme Court is committed to continuing justice concerning justice and safeguarding the constitutional right of all citizens. Our mission is to provide fair, transparent, and efficient policies for people.
            </p>
          </div>

          <div className="p-4 md:p-6 w-full bg-black/30 rounded-lg mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4 font-serif break-words">OUR VISION</h2>
            <p className="text-lg font-sans break-words">
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
