'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IoIosClose } from 'react-icons/io';
import PasswordEmailModal from '../../components/common/PasswordEmailModal';
import LoadingSpinner from '../../components/common/Loading';
import { useResetPasswordMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { setAuth } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';


export default function PasswordReset() {

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const [email, setEmail] = useState('');

  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const toggleError = () => { setError(null);}

  const onChange = (event) => {
   setEmail(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    resetPassword(email)
      .unwrap()
      .then(() => {
        dispatch(setAuth());
        toast.success(' Request sent, check your email for reset link')
        setError(null);
        setShowModal(true);
      })
      .catch((error) => {
        console.error(error.data)
        toast.error(error.data.detail)
        setError(error.data.detail)
    });
  };

  return (
    <>
      <div className='flex flex-col h-screen mx-auto justify-center items-center'>
        <div className='bg-[#F8F8F6] w-[650px] rounded-lg p-12 '>
          <h1 className='font-semibold text-4xl bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] inline-block text-transparent bg-clip-text '>Reset your password</h1> 
          
          <form className='p-4 mt-4' method='POST' onSubmit={onSubmit}>
            
            <div className='flex flex-col py-2'>

              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <input
              type="email"
              name="email"
              id="email"
              placeholder='Enter Work email'
              value={email}
              onChange={onChange}
              required
              className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              />

            </div>

            <div>
              <button type="submit"
              className='w-full bg-amber-300 px-8 py-3 rounded-lg my-4 hover:bg-amber-200' disabled={isLoading}>
                {isLoading ? <LoadingSpinner sm/> : 'Reset Password'}
              </button>
            </div>
          </form>
          
          {error && <div className="text-white relative p-4 mt-4 text-center rounded-md justify-center w-11/12 mx-auto mb-12 bg-red-500"> <button onClick={toggleError} >< IoIosClose  size={24} className=' bg-black text-white rounded-full absolute -top-3 left-[490px] mr-8'/></button>  {error}  </div>}


          <div className='text-center'>
            <p>Dont have an account? <span className='font-bold text-indigo-700'><a href="/auth/register">Register</a></span></p>
          </div>
          <div>
            <p className='text-center my-4'>OR</p>
          </div>
          <div className='flex flex-row w-full justify-center text-center items-center gap-1'>
            <p className='font-light'>Login with </p>
            <Image src="/images/google.png" alt="google logo" width={80} height={90} className='' />
          </div>
        </div>
      </div>
      {isLoading && <LoadingSpinner />} 
      {showModal && <PasswordEmailModal email={email} />} 

    </>
  )
}
