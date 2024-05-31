'use client';
import { Footer, Navbar } from '@/components/common';
import React, { useState } from 'react';
import { ContactModal, LoadingSpinner } from '@/components/common';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);

    try {
      const response = await fetch(event.target.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setShowModal(true);
      } else {
        const errorData = await response.json();
        setErrorMessage(`Form submission failed: ${errorData.message || 'Unknown error'}`);
        console.error('Form submission failed:', errorData);
      }
    } catch (error) {
      setErrorMessage(`Error submitting form: ${error.message}`);
      console.error('Error submitting form', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% text-center items-center md:pt-64 pt-40 pb-32 px-8 md:gap-8 flex flex-col mx-auto md:h-[560px]'>
        <p className='text-white md:text-8xl text-3xl font-bold'>Contact Us</p>
        <p className='text-white md:text-lg text-sm text-center mt-4 px-8'>Got questions? We are more than happy to assist you 😉</p>
      </div>

      <div className='max-w-7xl mx-auto space-y-4 items-center justify-center p-16 my-8 mb-16'>
        <h2 className='text-[#1f1073] text-4xl text-center font-semibold'>Can&apos;t find what you are looking for?</h2>
        <p className='text-center text-lg max-w-3xl mx-auto'>
          If your question isn&apos;t answered above or in the rules then you can contact us using the form below. We will reply to all queries as soon as we can.
        </p>
        <form onSubmit={handleSubmit} action="https://formspree.io/f/xnqeknln" method='POST' className='flex flex-col'>
          <label htmlFor="name" className='p-2'>Name:</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder='Name' 
            required
            className='w-full bg-gray-200 p-4 rounded-md mb-8 mt-2' 
          />

          <label htmlFor="email" className='p-2'>Email:</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Enter email' 
            required 
            className='w-full bg-gray-200 p-4 rounded-md mb-8 mt-2' 
          />

          <label htmlFor="textarea" className='p-2'>Your Question:</label>
          <textarea 
            name="message" 
            id="message" 
            placeholder='Message' 
            required 
            className='w-full h-56 bg-gray-200 rounded-md p-4' 
          />

          <div>
            <button type="submit" className='w-full bg-amber-300 px-8 py-3 rounded-lg mt-8 hover:bg-amber-200'>
              Send message
            </button>
          </div>
        </form>

        {isLoading && <LoadingSpinner />} 
        {showModal && <ContactModal isOpen={showModal} onClose={handleClose} />}
        {/* {errorMessage && <div className='text-red-500 mt-4'>{errorMessage}</div>} */}
      </div>

      <Footer />
    </>
  );
}
