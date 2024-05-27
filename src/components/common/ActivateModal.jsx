import Link from 'next/link';

const ActivateModal = () => {
  return (
    <div className="absolute top-0 h-screen w-screen left-0 bg-black bg-opacity-50 flex items-center justify-center mx-auto backdrop-blur-sm">
      <div className='bg-white rounded-md p-24 text-center w-[584px]'>
        <h2 className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% inline-block text-transparent bg-clip-text font-semibold text-lg'>Activated</h2>
        <p >Account has been activated</p>
        <Link href="/login">
            <button className='w-full bg-amber-300 px-8 py-4 rounded-lg my-4 hover:bg-amber-200'>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default ActivateModal;
