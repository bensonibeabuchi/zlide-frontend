'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IoIosClose, IoMdEyeOff, IoMdEye } from 'react-icons/io';
import PasswordSuccessModal from '@/components/common/PasswordSuccessModal';
import LoadingSpinner from '@/components/common/Loading';
import { useResetPasswordConfirmMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
import { useParams } from 'next/navigation';
import { setAuth } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';


export default function PasswordReset() {

  const { uid, token} = useParams();

  const [resetPasswordConfirm, { isLoading }] = useResetPasswordConfirmMutation();

  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  });

  const { new_password, re_new_password} = formData;

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [isEyeOn, setisEyeOn] = useState(false);
  const [isReEyeOn, setisReEyeOn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const toggleError = () => { setError(null);}

  const toggleEyeOn = () => { setisEyeOn(!isEyeOn);};
  const toggleReEyeOn = () => { setisReEyeOn(!isReEyeOn);};

  const toggleShowPassword = () => { setShowPassword(!showPassword);};
  const toggleShowRePassword = () => { setShowRePassword(!showRePassword); };

  const onChange = (event) => {
   const { name, value } = event.target;
   setFormData({ ...formData, [name]: value})
  };

  const onSubmit = (event) => {
    event.preventDefault();

    resetPasswordConfirm({ uid, token, new_password, re_new_password})
      .unwrap()
      .then(() => {
        dispatch(setAuth());
        toast.success('Password reset successful')
        setError(null);
        setShowModal(true);
      })
      .catch((error) => {
        console.error(error.data)
        toast.error('Password reset failed')
        setError(error.data.non_field_errors)
    });
  };

  return (
    <>
      <div className='flex flex-col h-screen mx-auto justify-center items-center'>
        <div className='bg-[#F8F8F6] w-[650px] rounded-lg p-12 '>
          <h1 className='font-semibold text-4xl bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] inline-block text-transparent bg-clip-text'>Reset your password</h1> 
          
          <form className='p-4 mt-4' method='POST' onSubmit={onSubmit}>
            
          <div className='flex relative flex-col py-2'>
              <label htmlFor="new_password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

              <button type='button' onClick={toggleEyeOn}> {isEyeOn ? <IoMdEye className='absolute left-[480px] top-[50px] hover:cursor-pointer' size={18} onClick={toggleShowPassword} /> : <IoMdEyeOff className='absolute left-[480px] top-[50px] hover:cursor-pointer' size={18} onClick={toggleShowPassword} />} </button>

              <input 
              type={showPassword ? 'text' : 'password'} 
              name="new_password" 
              id="new_password" 
              placeholder='Enter Password' 
              value={formData.new_password} 
              onChange={onChange} 
              className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              required/>

              <small className='text-xs text-red-500 mb-4 '>Password must contain a capital letter, number and a special character</small>
          </div>

          <div className='flex relative flex-col py-2'>
              <label htmlFor="re_password" className="block text-sm font-medium leading-6 text-gray-900"> Confirm Password</label>

              <button type='button' onClick={toggleReEyeOn}> {isReEyeOn ? <IoMdEye className='absolute left-[480px] top-[50px] hover:cursor-pointer' size={18} onClick={toggleShowRePassword} /> : <IoMdEyeOff className='absolute left-[480px] top-[50px] hover:cursor-pointer' size={18} onClick={toggleShowRePassword} />} </button>

              <input 
              type={showRePassword ? 'text' : 'password'} 
              name="re_new_password" 
              id="re_password" 
              placeholder='Confirm Password' 
              value={formData.re_new_password} 
              onChange={onChange} 
              className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              required/>

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
      {showModal && <PasswordSuccessModal />} 

    </>
  )
}
