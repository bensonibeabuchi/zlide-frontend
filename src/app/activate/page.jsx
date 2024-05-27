'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import google from "../../../public/images/google.png";
import { IoIosClose } from 'react-icons/io';
import { SuccessModal, LoadingSpinner } from '@/components/common';
import { useActivationMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { setAuth } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { continueWithGoogle } from '@/utils';


export default function Activate() {
  const [activation, { isLoading }] = useActivationMutation();
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  
  const toggleError = () => { setError(null);}
  
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
  });

  const { email, otp,} = formData

  useEffect(() => {
    const emailFromQuery = searchParams.get('email');
    if (emailFromQuery) {
      setFormData((prevData) => ({ ...prevData, email: emailFromQuery }));
    }
  }, [searchParams]);


  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value})
  };

  const onSubmit = (event) => {
    event.preventDefault();

    activation({ email, otp, })
      .unwrap()
      .then(() => {
        dispatch(setAuth());
        toast.success(' Account Activated')
        setError(null);
        router.push('/slide/dashboard')
      })
      .catch((error) => {
        console.error(error.data)
        // toast.error(error.data.error)
        setError(error.data.error)
    });
  };

  return (
    <>
      <div className='flex flex-col h-screen mx-auto justify-center items-center'>
        <div className='bg-[#F8F8F6] w-[650px] rounded-lg p-12'>
        <h1 className='font-semibold text-4xl bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] inline-block text-transparent bg-clip-text '>Input your OTP</h1> 
          
          <form className='p-4 mt-4' method='POST' onSubmit={onSubmit}>
            
            <div className='flex-col py-2 hidden'>

              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <input
              type="email"
              name="email"
              id="email"
              placeholder='Enter email address'
              value={email}
              onChange={onChange}
              required
              className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              />

            </div>
            
            <div className='flex relative flex-col py-2'>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">OTP</label>

              {/* <button type='button' onClick={toggleEyeOn}> {isEyeOn ? <IoMdEye className='absolute left-[480px] top-[50px] hover:cursor-pointer' size={18} onClick={toggleShowPassword} /> : <IoMdEyeOff className='absolute left-[480px] top-[50px] hover:cursor-pointer' size={18} onClick={toggleShowPassword} />} </button> */}

              <input 
              type='text'
              name="otp" 
              id="otp" 
              placeholder='OTP' 
              value={formData.otp} 
              onChange={onChange} 
              className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              required/>
              <small className='font-bold text-end mt-1'><a href="/resend-otp">Resend OTP</a></small>
            </div>

            <div>
              <button type="submit"
              className='w-full bg-amber-300 px-8 py-3 rounded-lg my-4 hover:bg-amber-200' disabled={isLoading}>
                Activate
              </button>
            </div>
          </form>
          
          {error && <div className="text-white relative p-4 mt-4 text-center rounded-md justify-center w-11/12 mx-auto mb-12 bg-red-500"> <button onClick={toggleError} >< IoIosClose  size={24} className=' bg-black text-white rounded-full absolute -top-3 left-[490px] mr-8'/></button>  {error}  </div>}


          <div className='text-center'>
            <p>Dont have an account? <span className='font-bold text-[#12524f]'><a href="/register">Register</a></span></p>
          </div>
          <div>
            <p className='text-center my-4'>OR</p>
          </div>
          <div className='flex flex-row w-full justify-center text-center items-center gap-1'>
            <p className='font-light'>Login with </p>
            <button onClick={continueWithGoogle} className='bg-white bg-transparent p-2 rounded'>      
              <Image src={google} alt="google logo" width={80} height={90} />
            </button>
          </div>
        </div>
      </div>
      {isLoading && <LoadingSpinner />} 
      {showModal && <SuccessModal email={formData.email} />} 

    </>
  )
}




