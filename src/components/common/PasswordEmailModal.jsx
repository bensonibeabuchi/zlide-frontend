import Link from 'next/link';

const PasswordEmailModal = ({ email }) => {
  return (
    <div className="absolute top-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center mx-auto backdrop-blur-sm">
      <div className='bg-white rounded-md p-24 text-center w-[584px]'>
        <h2 className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% inline-block text-transparent bg-clip-text font-semibold text-lg'>Email Sent</h2>
        <p>We have sent a mail to {email} with a link to reset your password</p>
        <Link href="/login">
            <button className='w-full bg-amber-300 px-8 py-4 rounded-lg my-4 hover:bg-amber-200'>Okay</button>
        </Link>
      </div>
    </div>
  );
};

export default PasswordEmailModal;
