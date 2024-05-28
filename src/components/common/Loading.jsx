import Image from 'next/image';
import { ImSpinner3 } from "react-icons/im";
import cn from 'classnames';


const LoadingSpinner = () => {

  
  return (
    <div role='status' className="absolute top-0 w-full h-screen bg-opacity-30 bg-white flex flex-col items-center justify-center mx-auto backdrop-blur-sm">
      <ImSpinner3 className="w-16 h-16 animate-spin" />
      <span className='text-[#1F1053]' >Loading...</span>
    </div>
  );
};

export default LoadingSpinner;



