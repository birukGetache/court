import Efile from '../../../public/icons/Efile.svg';
import Image from 'next/image';

const Services = () => (
  <div className='bg-white absolute h-fit top-0 left-0 w-full z-50 -mb-24'> {/* Add negative margin here */}
    <div className="flex flex-wrap justify-center gap-10 p-6 mx-auto -mt-24 bg-white w-fit">
      <div className="text-center relative">
        <Efile width="64px" height="64px" fill="#000000" />
        <h2 className="mt-2 text-cyan-800">E-file</h2>
        <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 h-12 w-px bg-gray-300"></div>
      </div>
      <div className="text-center relative">
        <Image src="/icons/Court.svg" alt="Court" width={64} height={64} />
        <h2 className="mt-2 text-cyan-800">Court Schedule</h2>
        <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 h-12 w-px bg-gray-300"></div>
      </div>
      <div className="text-center relative">
        <Image src="/icons/CaseTracker.svg" alt="Case Tracker" width={64} height={64} />
        <h2 className="mt-2 text-cyan-800">Case Tracker</h2>
        <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 h-12 w-px bg-gray-300"></div>
      </div>
      <div className="text-center relative">
        <Image src="/icons/support.svg" alt="Support" width={64} height={64} />
        <h2 className="mt-2 text-cyan-800">Support</h2>
        <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 h-12 w-px bg-gray-300"></div>
      </div>
      <div className="text-center">
        <Image src="/icons/service.svg" alt="Service" width={64} height={64} />
        <h2 className="mt-2 text-cyan-800">Service</h2>
      </div>
    </div>
  </div>
);

export default Services;