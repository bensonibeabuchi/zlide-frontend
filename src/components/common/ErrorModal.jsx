import Link from 'next/link';
import { HiXMark } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";



const ErrorModal = ({ closeModal }) => {
  return (
    <div className="absolute top-0 h-screen w-screen left-0 bg-black bg-opacity-50 flex items-center justify-center mx-auto backdrop-blur-sm">
      <div className='bg-white rounded-md p-24 text-center w-[584px] relative'>
        <h2 className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% inline-block text-transparent bg-clip-text font-semibold text-lg'>We are sorry!</h2>
        <p>Please login to create presentation</p>
        <Link href="/login">
            <button className='w-full bg-amber-300 px-8 py-4 rounded-lg my-4 hover:bg-amber-200'>Login</button>
        </Link>
        <button
          onClick={closeModal}
          className='absolute top-4 right-4 text-white p-4 rounded-full  bg-red-500 hover:bg-red-400 cursor-pointer hover:scale-105 hover:shadow-lg transition-all'
        >
          <FaTimes/>
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
