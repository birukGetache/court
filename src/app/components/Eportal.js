import Image from 'next/image'; // Import the Next.js Image component

export default function EPortal() {
  return (
    <div className="bg-white flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center min-h-screen p-6">
      {/* Image Section */}
      <div className="w-full md:w-auto md:grid flex justify-center">
        <Image
          src="/image.png" // Replace with the actual path to your image
          alt="E-Portal Image"
          width={500} // Set the desired width
          height={300} // Set the desired height
          className="rounded-lg shadow-md w-full  h-auto" // Make the image responsive
        />
      </div>

      {/* Content Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-xl w-full text-center">
        {/* Header Section */}
        <div className="mb-6">
          <p className="text-xl md:text-2xl text-gray-600 mt-2">EFFICIENT AND ACCESSIBLE</p>
          <p className="text-xl md:text-2xl text-gray-600">E-PORTAL FOR JUSTICE</p>
        </div>

        {/* Content Text */}
        <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          <p>
            The Amhara Supreme Court's E-Portal is a fast, transparent, and user-friendly digital platform designed to enhance access to judicial services. This innovative system streamlines case management, facilitates legal document submission, and enables real-time case tracking, ensuring a seamless experience for all users. Through online case filing and tracking, individuals can submit cases and monitor their progress remotely, reducing the need for physical visits.
          </p>
        </div>

        {/* Footer Section with Button */}
        <div>
          <button className="bg-blue-600 text-white px-6 py-2 md:py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-sm md:text-base">
            E-PORTAL
          </button>
        </div>
      </div>
    </div>
  );
}