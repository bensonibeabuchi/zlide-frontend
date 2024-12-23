'use client';
import { NavbarHorizontal } from '@/components/common';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { LoadingSpinner } from '@/components/common';
import ErrorModal from '@/components/common/ErrorModal';

export default function Zlide() {
  const router = useRouter();
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading spinner
    setError(false); // Reset error state

    try {
      // Get the JWT token from localStorage
      const accessToken = localStorage.getItem('access');
      if (!accessToken) {
        throw new Error('Authentication token is missing. Please log in.');
      }

      // Prepare the request headers
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `JWT ${accessToken}`,
      };

      // Make the API request
      // const response = await fetch('http://localhost:8000/api/presentation/generate-slides/', {
      const response = await fetch('https://zlide-backend-production.up.railway.app/api/presentation/generate-slides/', {
        method: 'POST',
        headers,
        body: JSON.stringify({ user_input: userInput }),
      });

      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }

      const result = await response.json();

      // Set the response and redirect to the draft page
      setResponse(result);
      router.push(`/slide/draft/${result.id}`);
    } catch (error) {
      console.error('Error generating slide:', error);
      setError(true);
      setShowModal(true); // Show the error modal
    } finally {
      setIsLoading(false); // Hide loading spinner
    }
  };

  return (
    <>
      <div className='dot-background min-h-screen fixed w-screen flex'>
        <div className='grid grid-flow-col'>
          <div>
            <NavbarHorizontal />
          </div>
          <div className='h-screen overflow-auto'>
            <div className='text-center md:p-4 md:pr-16 pr-2 mt-16 md:right-0 absolute md:w-[700px]'>
              <form onSubmit={handleSubmit} className='p-8 space-y-4 bg-white shadow-lg sticky top-40 rounded-lg'>
                <label htmlFor="presentation" className='text-[#1F1053] md:text-xl font-medium'>
                  What presentation do you want to create?
                </label>
                <input
                  id="presentation"
                  name="user_input"
                  placeholder='Prompt'
                  value={userInput}
                  onChange={handleChange}
                  className='p-6 w-full justify-start text-start rounded-md border-gray-300 border-2'
                />
                <button type="submit" className='bg-[#FFD045] py-4 md:px-8 w-full rounded-md text-[#1F1053] font-medium'>
                  Start Generating
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <LoadingSpinner />}
      {showModal && <ErrorModal closeModal={closeModal} />}
    </>
  );
}
