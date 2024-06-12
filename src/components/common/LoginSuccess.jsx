import { IoCheckmarkCircle } from "react-icons/io5";

const LoginSuccess = ({ email }) => {
  return (
    <div className="absolute top-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center mx-auto backdrop-blur-sm">
      <div className='bg-white rounded-md p-24 text-center w-[584px] items-center justify-center flex flex-col gap-4'>
        <h2 className='font-bold text-xl bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] inline-block text-transparent bg-clip-text'>Logged in</h2>
        <IoCheckmarkCircle size={50} className="text-green-300" />
      </div>
    </div>
  );
};

export default LoginSuccess;
