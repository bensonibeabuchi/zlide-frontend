'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { IoMdEyeOff, IoMdEye, IoIosClose } from 'react-icons/io';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import SocialButtons from '@/components/common/SocialButtons';
import {SuccessModal, LoadingSpinner} from '@/components/common';
import logo from '../../../public/images/zlide-logohead-black.png'


export default function Register() {
  const [register, { isLoading }] = useRegisterMutation();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [isEyeOn, setisEyeOn] = useState(false);
  const [isReEyeOn, setisReEyeOn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const toggleEyeOn = () => { setisEyeOn(!isEyeOn);};
  const toggleReEyeOn = () => { setisReEyeOn(!isReEyeOn);};

  const toggleShowPassword = () => { setShowPassword(!showPassword);};
  const toggleShowRePassword = () => { setShowRePassword(!showRePassword); };

  const toggleError = () => { setError(null);}


  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    job_title: '',
    company: '',
    password: '',
    re_password: '',
  });

  const { first_name, last_name, email, password, re_password, job_title, company } = formData

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value})
  };

  const onSubmit = (event) => {
    event.preventDefault();

    register({ first_name, last_name, email, password, re_password, job_title, company })
    .unwrap()
    .then(() => {
      // toast.success(' Please check your email to verify account')
      setShowModal(true);
      setError(null);
      // router.push('/activate')
    })
    .catch((error) => {
      if (error.data) {
        console.error(error)
        const errorData = error.data;
        let errorMessage = '';
        if (errorData.password) {
          errorMessage += errorData.password[0]; 
          // toast.error(errorData.password[0])
          console.log('Registration Error: ',errorData.password[0])
        } else if (errorData.email) {
          errorMessage += errorData.email[0]; 
          // toast.error(errorData.email[0])
          console.log('Registration Error: ', errorData.email[0])
        } else if (errorData.non_field_errors) {
          errorMessage += errorData.non_field_errors[0]; 
          // toast.error(errorData.non_field_errors[0])
          console.log('Registration Error: ', errorData.non_field_errors[0])
        } else {
          errorMessage += 'Unknown error'; 
        }
        setError(errorMessage);
      } else {
        setError('Network Error: Unable to connect to the server.');
      } 
    });
  };



  return (
    <>
            <Image src={logo} width={70} height={100} alt='logo' className=' absolute left-2/4 justify-center mt-8'/>
    <div className='flex flex-col h-screen mx-auto justify-center items-center'>
        <div className='bg-[#F8F8F6] w-[650px] rounded-lg p-12 '>
        
        <h1 className='font-semibold text-4xl bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] inline-block text-transparent bg-clip-text '>Sign Up</h1> 
          
          <form className='p-4 mt-4' method='POST' onSubmit={onSubmit}>
            

            {/* Email INPUT */}

            <div className='flex flex-col py-2'>

              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <input
              type="email"
              name="email"
              id="email"
              placeholder='Enter Work email'
              value={formData.email}
              onChange={onChange}
              required
              className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              />

            </div>


            {/* First Name INPUT */}

            <div className='flex flex-col py-2'>

              <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>

              <input
              type="first_name"
              name="first_name"
              id="first_name"
              placeholder='First Name'
              value={formData.first_name}
              onChange={onChange}
              required
              className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              />
            
            </div>

            
            {/* Last Name INPUT */}

            <div className='flex flex-col py-2'>

              <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
              <input
              type="last_name"
              name="last_name"
              id="last_name"
              placeholder='Last Name'
              value={formData.last_name}
              onChange={onChange}
              required
              className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              />

            </div>

            {/* Password INPUT */}

            <div className='flex relative flex-col py-2'>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

              <button type='button' onClick={toggleEyeOn}> {isEyeOn ? <IoMdEye className='absolute left-[480px] top-[50px] hover:cursor-pointer' size={18} onClick={toggleShowPassword} /> : <IoMdEyeOff className='absolute left-[480px] top-[50px] hover:cursor-pointer' size={18} onClick={toggleShowPassword} />} </button>

              <input 
              type={showPassword ? 'text' : 'password'} 
              name="password" 
              id="password" 
              placeholder='Enter Password' 
              value={formData.password} 
              onChange={onChange} 
              className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              required/>

              <small className='text-xs text-red-500 mb-4 '>Password should contain a capital letter, number and a special character</small>
            </div>


            {/* Confirm Password INPUT */}

            <div className='flex relative flex-col py-2'>
              <label htmlFor="re_password" className="block text-sm font-medium leading-6 text-gray-900"> Confirm Password</label>

              <button type='button' onClick={toggleReEyeOn}> {isReEyeOn ? <IoMdEye className='absolute left-[480px] top-[50px] hover:cursor-pointer' size={18} onClick={toggleShowRePassword} /> : <IoMdEyeOff className='absolute left-[480px] top-[50px] hover:cursor-pointer' size={18} onClick={toggleShowRePassword} />} </button>

              <input 
              type={showRePassword ? 'text' : 'password'} 
              name="re_password" 
              id="re_password" 
              placeholder='Confirm Password' 
              value={formData.re_password} 
              onChange={onChange} 
              className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              required/>

            </div>

            {/* Button */}
            <div>
              <button type="submit"
              className='w-full bg-amber-300 px-8 py-3 rounded-lg my-4 hover:bg-amber-200' disabled={isLoading}>
                {isLoading ? <LoadingSpinner sm/> : 'Sign Up'}
              </button>
            </div>
          </form>
          
          {error && <div className="text-white relative p-4 mt-4 text-center rounded-md justify-center w-11/12 mx-auto mb-12 bg-red-500"> <button onClick={toggleError} >< IoIosClose  size={24} className=' bg-black text-white rounded-full absolute -top-3 left-[490px] mr-8'/></button>  {error}  </div>}


          <div className='text-center'>
            <p>Already have an account? <span className='font-bold text-[#1F1053]'><a href="/login">Login</a></span></p>
          </div>
          <div>
            <p className='text-center my-4'>OR</p>
          </div>
          <div className='flex flex-row w-full justify-center text-center items-center gap-1'>
            {/* <p className='font-light'>Login with </p>
            <button onClick={continueWithGoogle} className='bg-white bg-transparent p-2 rounded'>      
              <Image src={google} alt="google logo" width={80} height={90} />
            </button> */}
            <SocialButtons/>
          </div>
        </div>
      </div>

      {isLoading && <LoadingSpinner />} 

      {showModal && <SuccessModal email={formData.email} />} 

    </>
  )
}
