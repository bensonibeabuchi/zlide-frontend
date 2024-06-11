'use client';
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import { FaRegCopyright, FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaInstagram  } from "react-icons/fa";
import { SubscribeModal, LoadingSpinner} from "@/components/common/"
import { ShareButton } from '@/components/common/';
import { usePathname, } from 'next/navigation';




export default function Footer() {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const blogUrl2 = `https://zlide-ben.vercel.app${pathname}`;

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
    <div className='w-full mx-auto items-center justify-center bottom-0 relative bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% p-20'>
      <div className=''>
        <div className='lg:justify-center lg:flex lg:flex-row items-center gap-40 space-y-4 md:space-y-0'>
          <div className="flex">
              <div className='flex-shrink-0'>
                <a href="/">
                  <Image src="/images/zlide-logo.png" height={150} width={150} alt="Zlide logo" className="cursor-pointer" />
                </a>
              </div>
          </div>
   
          <div className=''>
            <p className='text-xl font-semibold text-white'>Subscribe</p>
            <p className='text-sm mb-4 text-white'>Stay up to date with our newsletter</p>
            <form
            action="https://formspree.io/f/mrgnwear"
            method='POST'
            onSubmit={handleSubmit}
            className='md:space-x-4 gap-4 md:flex grid text-black'>
              
              <input
              type="email" 
              name="email"
              id="email"
              placeholder='Email Address'
              className='rounded px-8 p-4 text-black' />

              <button type="submit" className='bg-[#FFD045] hover:bg-amber-200  hover:scale-105 hover:shadow-md rounded-md p-4 text-[#1f1073]'>
                Subscribe
              </button>

            </form>
            <p className='text-xs font-light py-4 text-gray-100'>By subscribing, you agree to our Privacy Policy and consent to receive updates from us.</p>
          </div>

        </div>
        <div className='text-white border-t p-4 lg:px-24 flex flex-col mt-16 justify-center gap-8 items-center'>
          <div>
            <p className='flex md:flex-row flex-col text-center items-center gap-2 md:text-base text-xs'>
              <FaRegCopyright/> 2024 Zlide. All rights Reserved
            </p>
          </div>
          <div>
            <ul className='flex gap-4 '>
              <ShareButton url={blogUrl2} title={pathname} />
            </ul>

          </div>
        </div>
      </div>
      

        {isLoading && <LoadingSpinner />} 
        {showModal && <SubscribeModal isOpen={showModal} onClose={handleClose} />}


    </div>
  )
}
