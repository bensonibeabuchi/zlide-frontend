'use client';
import { NavbarHorizontal } from '@/components/common';
import { useRouter } from 'next/navigation';
import React, { useState, useRef } from 'react';
import { LoadingSpinner } from '@/components/common';
import { useGenerateSlideMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
import ErrorModal from '@/components/common/ErrorModal';

export default function Zlide() {
  const router = useRouter();
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [generateSlide, { isLoading }] = useGenerateSlideMutation();

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await generateSlide({ user_input: userInput }).unwrap();
      setResponse(result);
      console.log(result);
      toast.success('Slide Generated');
      router.push(`/slide/draft/${result.id}`);
    } catch (error) {
      console.error(error);
      setShowModal(true);
      // toast.error('Error creating slide');
      setError(true);
    }
  };

  return (
    <>
      <div className='dot-background min-h-screen fixed w-screen flex'>
        <div className='grid grid-flow-col'>
          <div className="">
            <NavbarHorizontal />
          </div>
          <div className='h-screen overflow-auto'>
            <div className='text-center p-4 pr-16 mt-16'>
              <form onSubmit={handleSubmit} className='p-8 space-y-4 bg-white shadow-lg sticky top-40 rounded-lg'>
                <label htmlFor="presentation" className='text-[#1F1053] text-xl font-medium'>
                  What presentation do you want to create?
                </label>
                <textarea
                  id="presentation"
                  name="user_input"
                  placeholder='Prompt'
                  value={userInput}
                  onChange={handleChange}
                  className='p-4 h-32 w-full justify-start text-start rounded-md border-gray-300 border-2'
                />
                <button type="submit" className='bg-[#FFD045] py-4 px-8 w-full rounded-md text-[#1F1053] font-medium'>
                  Start Generating
                </button>
              </form>
            </div>
            <div className='grid grid-cols-4 w-full p-4 pr-16 mt-16 gap-24'>
              {response ? (

                <>
                </>
              ) : (
                <>
                </>
              )}
              
            </div>
          </div>
        </div>
      </div>
      {isLoading && <LoadingSpinner />}
      {showModal && <ErrorModal closeModal={closeModal} />}
    </>
  );
}
