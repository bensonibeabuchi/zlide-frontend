import { Footer, Navbar } from '@/components/common'
import Image from 'next/image'
import React from 'react'
import benson from '../../../public/images/benson.jpeg'
import temitope from '../../../public/images/temitope.jpg'
import rahman from '../../../public/images/abdulrahman.jpg'


export default function About() {
return (
<div className='bg-[#F4F4F4] text-xl'>
  <Navbar />
  <div
    className='bg-gradient-to-b from-[#1f1073] from-5% via-[#0A1F79] via-35%  to-[#F4F4F4] to-90% text-center items-center md:pt-64 pt-40 pb-32 px-8 md:gap-8 flex flex-col mx-auto'>
    <p className='text-white md:text-8xl text-3xl font-bold'>The future of presentations </p>
    <p
      className='text-black text-justify bg-white rounded-lg md:text-2xl leading-[80px] tracking-widest text-sm mt-8 max-w-5xl p-16 mx-auto font-medium items-center'>
      We are a team of creative minds, technologists, and design enthusiasts dedicated to revolutionising the way
      presentations are created. With a diverse range of expertise in AI, design, and software development, we&apos;re
      committed to delivering innovative solutions that empower our users to unleash their creativity.
    </p>

  </div>

  <div className='rounded-md max-w-7xl mx-auto text-justify items-center mb-40'>

    {/* PROFIL IMAGES */}
    <div className='grid grid-cols-2 gap-4 h-[800px]'>

      <div className='relative'>
        <div className='absolute inset-0'>
          <Image src={benson} width={1000} height={1000} alt='sample' className='w-full h-full object-cover' />
        </div>
        <div
          className='absolute inset-0 bg-gradient-to-b from-transparent from-5% via-transparent via70% to-[#0A1F79] to-90% h-full bg-opacity-90 opacity-0 hover:opacity-100 transition-all duration-300'>
          <div className='absolute bottom-0 p-16 space-y-2'>
            <p className='text-2xl font-bold text-white bottom-0'>Benson Ibeabuchi</p>
            <p className='text-[#FFD045] font-medium text-base'>Fullstack Developer</p>
          </div>
        </div>
      </div>

      <div className='grid grid-rows-2 gap-4 h-[800px]'>
        <div className='relative'>
          <div className='absolute inset-0'>
            <Image src={temitope} width={1000} height={1000} alt='sample' className='w-full h-full object-cover' />
          </div>
          <div
            className='absolute inset-0 bg-gradient-to-b from-transparent from-5% via-transparent via70% to-[#0A1F79] to-90% h-full bg-opacity-90 opacity-0 hover:opacity-100 transition-all duration-300'>
            <div className='absolute bottom-0 p-8 space-y-2'>
              <p className='text-2xl font-bold text-white bottom-0'>Temitope Sanyaolu </p>
              <p className='text-[#FFD045] font-medium text-base'>Lead Product Designer</p>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute inset-0'>
            <Image src={rahman} width={1000} height={1000} alt='sample' className='w-full h-full object-cover' />
          </div>
          <div
            className='absolute inset-0 bg-gradient-to-b from-transparent from-5% via-transparent via70% to-[#0A1F79] to-90% h-full bg-opacity-90 opacity-0 hover:opacity-100 transition-all duration-300'>
            <div className='absolute bottom-0 p-8 space-y-2'>
              <p className='text-2xl font-bold text-white bottom-0'>Abdurrahman Salahudeen</p>
              <p className='text-[#FFD045] font-medium text-base'>Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* WHAT WE OFFER */}

    <div className='items-center flex flex-col justify-center mx-auto my-40 max-w-7xl'>
      <p
        className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% inline-block text-transparent bg-clip-text text-4xl font-bold'>
        What we offer </p>
      <p className='text-justify m-4 md:text-2xl leading-[80px] tracking-widest text-sm'>
        With Zlide, you can transform text prompts into polished presentations in minutes. Our AI-powered platform
        analyzes your text prompts and generates beautifully designed slides that capture the essence of your message.
        Whether you&apos;re a marketer, educator, entrepreneur, or student, our platform provides the tools you need to
        create presentations that impress and inspire.
      </p>

    </div>

    {/* PROFIL IMAGES */}
    {/* <div className='grid grid-cols-2 gap-4 h-[800px]'>

      <div className='relative'>
        <div className='absolute inset-0'>
          <Image src={titi} width={1000} height={1000} alt='sample' className='w-full h-full object-cover' />
        </div>
        <div
          className='absolute inset-0 bg-gradient-to-b from-transparent from-5% via-transparent via70% to-[#0A1F79] to-90% h-full bg-opacity-90 opacity-0 hover:opacity-100 transition-all duration-300'>
          <div className='absolute bottom-0 p-16 space-y-2'>
            <p className='text-2xl font-bold text-white bottom-0'>Titilayo Iyapo</p>
            <p className='text-[#FFD045] font-medium text-base'>Frontend developer</p>
          </div>
        </div>
      </div>

      <div className='grid grid-rows-2 gap-4 h-[800px]'>
        <div className='relative'>
          <div className='absolute inset-0'>
            <Image src={sample3} width={1000} height={1000} alt='sample' className='w-full h-full object-cover' />
          </div>
          <div
            className='absolute inset-0 bg-gradient-to-b from-transparent from-5% via-transparent via70% to-[#0A1F79] to-90% h-full bg-opacity-90 opacity-0 hover:opacity-100 transition-all duration-300'>
            <div className='absolute bottom-0 p-8 space-y-2'>
              <p className='text-2xl font-bold text-white bottom-0'>Babatunde Kreator </p>
              <p className='text-[#FFD045] font-medium text-base'>Lead Product Designer</p>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute inset-0'>
            <Image src={portrait} width={1000} height={1000} alt='sample' className='w-full h-full object-cover' />
          </div>
          <div
            className='absolute inset-0 bg-gradient-to-b from-transparent from-5% via-transparent via70% to-[#0A1F79] to-90% h-full bg-opacity-90 opacity-0 hover:opacity-100 transition-all duration-300'>
            <div className='absolute bottom-0 p-8 space-y-2'>
              <p className='text-2xl font-bold text-white bottom-0'>Benson Ibeabuchi</p>
              <p className='text-[#FFD045] font-medium text-base'>Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

  </div>

  <Footer />

</div>
)
}