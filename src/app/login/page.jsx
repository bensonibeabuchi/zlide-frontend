'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { IoMdEyeOff, IoMdEye, IoIosClose } from 'react-icons/io';
import LoginSuccess from '../../components/common/LoginSuccess';
import LoadingSpinner from '../../components/common/Loading';
import { useLoginMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { setAuth } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { continueWithGoogle } from '@/utils';
import logo from '../../../public/images/zlide-logohead-black.png'
import axios from 'axios';
import axiosInstance from '@/components/utils/axiosInstance';

export default function SignUp() {

    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isEyeOn, setisEyeOn] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const toggleEyeOn = () => { setisEyeOn(!isEyeOn);};

    const toggleShowPassword = () => { setShowPassword(!showPassword);};

    const toggleError = () => { setError(null);}

    const [formData, setFormData] = useState({
      email: '',
      password: '',
      });

    const { email, password,} = formData

    const onChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value})
      };

    const onSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true);

      try {
        // const response = await axiosInstance.post('http://localhost:8000/api/login/', {
        const response = await axiosInstance.post('https://zlide-backend-production.up.railway.app/api/login/', {
          email,
          password,
        });
        
        const access = response.data.access;
        const refresh = response.data.refresh;

        localStorage.setItem('access', access); // Store in local storage if needed
        localStorage.setItem('refresh', refresh);

        setShowModal(true);
        toast.success('Login successful!');
        router.push('/slide/dashboard');  // Redirect to the dashboard or any other page

      } catch (error) {
        console.error('ERROR HERE:', error);
        setError('Login failed. Please check your credentials and try again.');
        toast.error('Login failed. Please check your credentials and try again.');
      } finally {
        setIsLoading(false);
      }
      
      };

return (
<>
  <Link href="/">
  <Image src={logo} width={50} height={70} alt='logo' className=' relative left-2/4 justify-center mt-8' />
  </Link>
  <div className='flex flex-col h-screen mx-auto justify-center items-center'>
    <div className='bg-[#F8F8F6] md:w-[650px] rounded-lg p-12 '>
      <h1
        className='font-semibold text-4xl bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] inline-block text-transparent bg-clip-text '>
        Login</h1>

      <form className='p-4 mt-4' method='POST' onSubmit={onSubmit}>

        <div className='flex flex-col py-2'>

          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <input type="email" name="email" id="email" placeholder='Enter Work email' value={formData.email}
            onChange={onChange} required
            className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

        </div>

        <div className='flex relative flex-col py-2'>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

          <button type='button' onClick={toggleEyeOn}> {isEyeOn ?
            <IoMdEye className='absolute md:left-[480px] left-[180px] top-[50px] hover:cursor-pointer' size={18}
              onClick={toggleShowPassword} /> :
            <IoMdEyeOff className='absolute md:left-[480px] left-[180px] top-[50px] hover:cursor-pointer' size={18}
              onClick={toggleShowPassword} />} </button>

          <input type={showPassword ? 'text' : 'password' } name="password" id="password" placeholder='Enter Password'
            value={formData.password} onChange={onChange}
            className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required />
          <small className='font-bold text-indigo-700 text-end mt-1'><a href="/password-reset">Forgot
              Password</a></small>
        </div>

        <div>
          <button type="submit" className='w-full bg-amber-300 px-8 py-3 rounded-lg my-4 hover:bg-amber-200'>
            Login
          </button>
        </div>
      </form>

      {error && <div
        className="relative text-center justify-center w-11/12 mx-auto mb-12 text-white p-4 mt-4 rounded-md  bg-red-500">
        <button onClick={toggleError}>
          < IoIosClose size={24} className=' bg-black text-white rounded-full absolute -top-3 left-[490px] mr-8' />
          </button> {error} </div>}

      <div className='text-center'>
        <p>Dont have an account? <span className='font-bold text-indigo-700'><a href="/register">Register</a></span></p>
      </div>
      <div>
        <p className='text-center my-4'>OR</p>
      </div>
      <div className='flex flex-row w-full justify-center text-center items-center gap-1'>
        <p className='font-light'>Login with </p>
        <button onClick={continueWithGoogle}>
          <Image src="/images/google.png" alt="google logo" width={80} height={90} className='' />
        </button>
      </div>
    </div>
  </div>
  {isLoading &&
  <LoadingSpinner />}
  {showModal &&
  <LoginSuccess/>}

</>
)
}