import Link from 'next/link';

const SuccessModal = ({ email }) => {
  return (
    <div className="absolute top-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center mx-auto backdrop-blur-sm">
      <div className='bg-white rounded-md p-24 text-center w-[584px]'>
        <h2 className='font-bold text-xl bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] inline-block text-transparent bg-clip-text'>Email Sent</h2>
        <p>We have sent an OTP to {email} to activate your account</p>
        <Link href={`/activate?email=${encodeURIComponent(email)}`}>
          <button className="w-full bg-amber-300 px-8 py-4 rounded-lg my-4 hover:bg-amber-200">
            Okay
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessModal;
