'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGenerateSlideMutation } from '@/redux/features/authApiSlice';
import {Navbar, Footer, LoadingSpinner} from '@/components/common/'
import Image from 'next/image';
import Testimonial from '@/components/common/Testimonial';
import { SiTesla } from "react-icons/si";
import Pricing from '@/components/common/Pricing';



export default function Landing() {

  const router = useRouter();
  const [generateSlide, { isLoading }] = useGenerateSlideMutation(); // Adjust this hook according to your API slice
  const [presentationName, setPresentationName] = useState('');

  const handleChange = (event) => {
    setPresentationName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newPresentation = await generateSlide({ name: presentationName }).unwrap();
      if (newPresentation) {
        router.push(`/slide/draft/${newPresentation.id}`);
      }
    } catch (error) {
      console.error('FAILED to create presentation:', error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% text-center items-center md:pt-64 pt-40 pb-32 px-8 md:gap-8 flex flex-col mx-auto md:h-[1024px]'>
      <p className='text-white md:text-8xl text-4xl font-bold'>Effortless Creation</p>
      <p className='text-white md:text-8xl text-4xl font-bold'>Limitless Possibilities</p>
      <p className='text-white md:text-lg text-sm text-center mt-4 px-8'>Create an impressive slide deck in minutes by just typing a sentence. No special design skills needed.</p>
        <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-2 mt-8 bg-gray-100 p-4 rounded-lg md:w-[600px] w-[300px] shadow-2xl'>
            <textarea
            name="presentationName"
            id="presentationName"
            value={presentationName}
            onChange={handleChange}
            placeholder='What presentation do you want to create? For example: An ecommerce fashion brand that specializes in silk dresses.'
            className='w-full h-24 rounded-md p-4 border text-xs md:text-base'/>
          <button type="submit" className='bg-[#FFD045] p-4 text-xs md:text-base rounded-md w-full text-[#1f1073] font-semibold'>Try for free</button>
        </form>
    </div>
    {/* HOW TO USE THE WEBSITE  */}
    <div className='items-center text-center flex flex-col justify-center mx-auto my-40 px-6'>
      <p className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% inline-block text-transparent bg-clip-text md:text-3xl text-xl font-bold'>
        Create Stunning Presentation with Ease
      </p>
      <p className='md:w-2/6 text-center m-4 md:text-base text-sm'>
      Zlide is the revolutionary software that simplifies the process of creating visually compelling PowerPoint presentations. With the power of AI, Zlide converts your textual data into well-structured slides, saving you time and effort.
      </p>
      <div>
        <div className='flex md:flex-row flex-col my-8 gap-8'>

          <div className='text-center justify-center items-center flex flex-col'>
            <Image src="/images/step1.png" alt="Zlide logo" width={397} height={290} className='md:w-96 w-48' />
            <p className='md:text-2xl text-lg font-semibold text-center my-2'>Step 1: Input your <br /> text prompt</p>
            <p>Easily input text prompt into Zlide</p>
          </div>

          <div className='text-center justify-center flex flex-col'>
            <Image src="/images/step2.png" alt="Zlide logo" width={397} height={290} className='md:w-96 w-48' />
            <p className='md:text-2xl text-lg font-semibold text-center my-2'>Step 2: Customise <br /> your design</p>
            <p>Easily input text prompt into Zlide</p>
          </div>

          <div className='text-center justify-center flex flex-col'>
            <Image src="/images/step3.png" alt="Zlide logo" width={397} height={290} className='md:w-96 w-48' />
            <p className='md:text-2xl text-lg font-semibold text-center my-2'>Step 3: Export and <br /> present</p>
            <p>Easily input text prompt into Zlide</p>
          </div>

        </div>
        <p className='text-center justify-center m-16'>
          <a href="/login" className='bg-[#FFD045] p-4 rounded-md w-full text-[#1f1073]'>Get Started</a>
        </p>

      </div>
    </div>

    

    <div className='z-50'>
      <Testimonial/>
    </div>

    {/* PRICING */}
    <div>
      <Pricing/>
    </div>


    {/* LOGOS */}
    <div className='text-center mb-40 my-8 px-8'>
      <p className='md:text-2xl text-lg font-semibold py-8'>Trusted by industry-leading companies worldwide</p>
      <div className='grid grid-cols-5 md:w-[1024px] mx-auto items-center text-center justify-center'>
        <Image src="/images/slack_logo.png" alt="Zlide logo" width={800} height={40} className='md:w-40 p-1' />
        <Image src="/images/hsbc_logo.png" alt="Zlide logo" width={800} height={40} className='md:w-40 p-1' />
        <Image src="/images/tesla_logo.png" alt="Zlide logo" width={800} height={40} className='md:w-40 p-1' />
        <Image src="/images/Univelcity_logo.png" alt="Zlide logo" width={800} height={40} className='md:w-40 p-1' />
        <Image src="/images/Logo.png" alt="Zlide logo" width={80} height={400} className='md:w-40 p-1' />
      </div>
    </div>
    {isLoading && <LoadingSpinner />}
    <Footer/>
    </>
  )
}
