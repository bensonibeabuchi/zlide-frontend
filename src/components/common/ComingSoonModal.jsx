import Link from 'next/link';
import { ImSpinner3 } from "react-icons/im";

const ComingSoonModal = ({ email }) => {
  return (
    <div className="absolute z-20 top-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center mx-auto backdrop-blur-sm">
      <div className='bg-white rounded-md p-24 text-center w-[584px] flex flex-col items-center justify-center space-y-4'>
        <p className='text-4xl font-semibold'>Coming soon...</p>
        <ImSpinner3 className="w-8 h-8 animate-spin" />

      </div>
    </div>
  );
};

export default ComingSoonModal;
