import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Pricing() {
  return (
    <div>
        <div className='items-center flex flex-col justify-center mx-auto my-40 max-w-7xl'>
            <p className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% inline-block text-transparent bg-clip-text text-4xl font-bold'>Flexible Pricing </p>
            <p className='w-2/6 text-center m-4'>
                Take your presentations to the next level with our AI-powered web application
                </p>
        <div className='gap-2 flex'>
            <button className='p-4 bg-black text-white rounded-md'>Monthly</button>
            <button className='p-4 border border-black rounded-md'>Yearly</button>
        </div>

        <div className='hidden md:block'>
            <div className='flex my-8 gap-8 max-w-6xl'>
                <div className='text-center py-8 flex flex-col border h-[570px] w-[309px] justify-between rounded-md'>
                    <p className='mt-4'>Free Plan</p>
                    <p className='text-6xl font-bold'>&#8358;0/mo</p>
                    <ul className='w-full justify-between flex flex-col gap-4 my-8'>
                        <li>Easy-to-use interface</li>
                        <li>Easy-to-use interface</li>
                        <li>Easy-to-use interface</li>
                    </ul>
                    <p className='text-center justify-center m-16'>
                        <a href="/login" className='bg-[#FFD045] p-4 rounded-md w-full text-[#1f1073]'>Get Started</a>
                    </p>
                </div>
                <div className='text-center py-8 flex flex-col border h-[570px] w-[309px] justify-between rounded-md bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90%  text-white'>
                    <p className='mt-4'>Free Plan</p>
                    <p className='text-6xl font-bold'>&#8358;9/mo</p>
                    <ul className='w-full justify-between  flex flex-col gap-4 my-8'>
                        <li>Easy-to-use interface</li>
                        <li>Easy-to-use interface</li>
                        <li>Easy-to-use interface</li>
                    </ul>
                        <p className='text-center justify-center m-16'>
                        <a href="/login" className='py-4 px-4 rounded-md bg-white text-blue-700'>Get Started</a>
                        </p>
                </div>
                <div className='text-center py-8 flex flex-col border h-[570px] w-[309px] justify-between rounded-md'>
                    <p className='mt-4'>Free Plan</p>
                    <p className='text-6xl font-bold'>&#8358;19/mo</p>
                    <ul className='w-full justify-between flex flex-col gap-4 my-8'>
                        <li>Easy-to-use interface</li>
                        <li>Easy-to-use interface</li>
                        <li>Easy-to-use interface</li>
                    </ul>
                    <p className='text-center justify-center m-16'>
                        <a href="/login" className='bg-[#FFD045] p-4 rounded-md w-full text-[#1f1073]'>Get Started</a>
                    </p>
                </div>
            </div>
        </div>

        {/* MOBILE MENU */}
        <div className='md:hidden'>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                // autoplay={true}
                className='w-[320px] mx-auto items-center justify-center flex mt-4'
                >
                    <div className="top-64 absolute z-50" >
                        <SlidePrevButton/>
                    </div>
                    <div className="top-64 absolute w-full text-end z-40" >
                        <SlideNextButton />
                    </div>
                <SwiperSlide>
                    <div className='text-center py-8 flex flex-col border h-[570px] w-[309px] justify-between rounded-md'>
                        <p className='mt-4'>Free Plan</p>
                        <p className='text-6xl font-bold'>&#8358;0/mo</p>
                        <div className='w-full justify-between flex flex-col gap-4 my-8'>
                        <li>Easy-to-use interface</li>
                        <li>Easy-to-use interface</li>
                        <li>Easy-to-use interface</li>
                        </div>
                        <p className='text-center justify-center m-16'>
                        <a href="/login" className='bg-[#FFD045] p-4 rounded-md w-full text-[#1f1073]'>Get Started</a>
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='text-center py-8 flex flex-col border h-[570px] w-[309px] justify-between rounded-md bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90%  text-white'>
                        <p className='mt-4'>Free Plan</p>
                        <p className='text-6xl font-bold'>&#8358;9/mo</p>
                        <div className='w-full justify-between flex flex-col gap-4 my-8'>
                        <li>Easy-to-use interface</li>
                        <li>Easy-to-use interface</li>
                        <li>Easy-to-use interface</li>
                        </div>
                        <p className='text-center justify-center m-16'>
                        <a href="/login" className='py-4 px-4 rounded-md bg-white text-blue-700'>Get Started</a>
                        </p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                <div className='text-center py-8 flex flex-col border h-[570px] w-[309px] justify-between rounded-md'>
                        <p className='mt-4'>Free Plan</p>
                        <p className='text-6xl font-bold'>&#8358;19/mo</p>
                        <div className='w-full justify-between flex flex-col gap-4 my-8'>
                        <li>Easy-to-use interface</li>
                        <li>Easy-to-use interface</li>
                        <li>Easy-to-use interface</li>
                        </div>
                        <p className='text-center justify-center m-16'>
                        <a href="/login" className='bg-[#FFD045] p-4 rounded-md w-full text-[#1f1073]'>Get Started</a>
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
      
    </div>
    </div>
  )
}
