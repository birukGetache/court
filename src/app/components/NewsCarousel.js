"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    id: 1,
    image: "/image.png",
    title: "High-level corruption suspects should begin defending cases",
    description:
      "Legal proceedings against high-profile corruption suspects are set to move forward as the courts begin hearing their defenses.",
    date: "22 Feb, 2025",
  },
  {
    id: 2,
    image: "/image.png",
    title: "Implementation of the 'Smart Court' Project",
    description:
      "The Amhara Supreme Court has partnered with Ethio Telecom to launch the 'Smart Court' project, aiming to digitally transform the region's judicial system.",
    date: "22 Feb, 2025",
  },
  {
    id: 3,
    image: "/image.png",
    title: "Collaboration with the Ethiopian Artificial Intelligence Institute",
    description:
      "The Amhara Supreme Court is collaborating with the Ethiopian AI Institute to modernize the judicial system using AI-driven solutions.",
    date: "22 Feb, 2025",
  },
  {
    id: 4,
    image: "/image.png",
    title: "Collaboration with the Ethiopian Artificial Intelligence Institute",
    description:
      "The Amhara Supreme Court is collaborating with the Ethiopian AI Institute to modernize the judicial system using AI-driven solutions.",
    date: "22 Feb, 2025",
  },
];

export default function NewsCarousel() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div className="w-full p-6 bg-white">
      <div className="grid place-items-end px-4 md:px-40 pb-10">
        <ul className="flex gap-4 md:gap-10 pr-4 md:pr-10">
          <li className="px-3 md:px-5 py-1 h-8 text-center rounded-full bg-amber-200 text-[#ccc] active:bg-[#ccc] active:text-amber-200 cursor-pointer text-sm md:text-base">
            EVENTS
          </li>
          <li className="px-3 md:px-5 py-1 h-8 text-center rounded-full bg-amber-200 text-[#ccc] active:bg-[#ccc] active:text-amber-200 cursor-pointer text-sm md:text-base">
            RULINGS
          </li>
          <li className="px-3 md:px-5 py-1 h-8 text-center rounded-full bg-amber-200 text-[#ccc] active:bg-[#ccc] active:text-amber-200 cursor-pointer text-sm md:text-base">
            BIDS
          </li>
        </ul>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-10 overflow-x-auto scrollbar-hide">
        {currentItems.map((item) => (
          <div key={item.id} className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] bg-white shadow-md rounded-xl overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              <div className="flex flex-col justify-start items-start gap-5 mt-4">
                <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-br from-[#083c4c] to-amber-200 hover:opacity-80 shadow-md">
                  See More
                </button>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="w-4/5 border-t-2 border-gray-400 my-4 mx-auto" />

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4 gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-full border text-amber-300 border-gray-300 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-lg text-amber-300 ${
              currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full border text-amber-300 border-gray-300 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}