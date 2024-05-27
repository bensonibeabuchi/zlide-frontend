import React from 'react';
import { useGetAllTestimonialsQuery } from '@/redux/features/authApiSlice';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { ImSpinner3 } from "react-icons/im";
import 'swiper/css';
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import SlidePrevButton from './SlidePrevButton';
import SlideNextButton from './SlideNextButton';

export default function Testimonial() {
  const swiper = useSwiper();
  const { data: testimonials, isLoading } = useGetAllTestimonialsQuery();



  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FaStar size={25} key={i} color={i < rating ? '#FFD700' : '#e4e5e9'} />
        ))}
      </div>
    );
  };


  if (isLoading) {
    return <div className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% md:p-16 p-6 items-center justify-center'>
      <div className='text-center flex'>
            <div className='text-white mx-auto items-center justify-center flex p-8 flex-col'>
              <div className='flex'>
                <FaStar size={10} className='text-[#FFD700]'/>
                <FaStar size={10} className='text-[#FFD700]'/>
                <FaStar size={10} className='text-[#FFD700]'/>
                <FaStar size={10} className='text-[#FFD700]'/>
                <FaStar size={10} className='text-[#e4e5e9]'/>
              </div>
              <p className='p-2 px-8 text-sm'>In the fast-paced world of startups, every pitch presentation counts. This AI presentation builder has been instrumental in helping me craft compelling pitches that resonate with investors. </p>
              <p className='text-[#FFD045] font-bold text-sm'>Babatunde Barack</p>
            </div>
          </div>
    </div>;
  }

  // if (isError) {
  //   return <div className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% md:p-16 p-6 items-center justify-center'>
  //   <div className='text-center flex'>
  //         <div className='text-white mx-auto items-center justify-center flex p-8 flex-col'>
  //           <div className='flex'>
  //             <FaStar size={10} className='text-[#FFD700]'/>
  //             <FaStar size={10} className='text-[#FFD700]'/>
  //             <FaStar size={10} className='text-[#FFD700]'/>
  //             <FaStar size={10} className='text-[#FFD700]'/>
  //             <FaStar size={10} className='text-[#e4e5e9]'/>
  //           </div>
  //           <p className='p-2 px-8 text-sm'>Network Error </p>
  //           <p className='text-[#FFD045] font-bold text-sm'>Network Error</p>
  //         </div>
  //       </div>
  // </div>;
  // }

  return (
    <div className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% md:p-16 p-6 items-center justify-center'> 
    <div className='hidden md:block'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={true}
        className='max-w-7xl'
      >
        <div className="top-32 absolute z-50 p-2" >
            <SlidePrevButton/>
        </div>
        <div className="top-32 absolute w-full text-end z-40 p-2" >
            <SlideNextButton />
        </div>
        <SwiperSlide>
          <div className='text-center flex p-4'>
            <div className='text-white mx-auto items-center justify-center flex p-16 flex-col'>
              <div className='flex'>
                <FaStar size={25} className='text-[#FFD700]'/>
                <FaStar size={25} className='text-[#FFD700]'/>
                <FaStar size={25} className='text-[#FFD700]'/>
                <FaStar size={25} className='text-[#FFD700]'/>
                <FaStar size={25} className='text-[#e4e5e9]'/>
              </div>
              <p className='text-xl p-4 px-16'>I&apos;ve always struggled with creating visually stunning presentations that captivate my audience. Thanks to this AI-powered platform, I can now turn my ideas into polished slideshows effortlessly. It&apos;s a game-changer for my marketing presentations!</p>
              <p className='text-[#FFD045] font-bold text-xl'>Zuckerberg Temitope</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='text-center flex p-4'>
            <div className='text-white mx-auto items-center justify-center flex p-16 flex-col'>
              <div className='flex'>
                <FaStar size={25} className='text-[#FFD700]'/>
                <FaStar size={25} className='text-[#FFD700]'/>
                <FaStar size={25} className='text-[#FFD700]'/>
                <FaStar size={25} className='text-[#FFD700]'/>
                <FaStar size={25} className='text-[#e4e5e9]'/>
              </div>
              <p className='text-xl p-4 px-16'>As an educator, I&apos;m constantly looking for ways to engage my students and make learning more interactive. This website has revolutionized the way I create presentations for my lessons. </p>
              <p className='text-[#FFD045] font-bold text-xl'>Rahman Musk</p>
            </div>
          </div>
        </SwiperSlide>
        {testimonials?.map((testimonial, index) => (
          <SwiperSlide key={index} className='text-center flex p-4'>
            <div className='text-white mx-auto items-center justify-center flex p-16 flex-col'>
            {renderStars(testimonial.rating)}
              <p className='text-xl p-4 px-16'>{testimonial.review}</p>
              <p className='text-[#FFD045] font-bold text-xl'>{testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    {/* MOBILE SCREEN  */}
    <div className='md:hidden'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={true}
      >
        <div className="top-24 absolute z-50" >
            <SlidePrevButton/>
        </div>
        <div className="top-24 absolute w-full text-end z-40" >
            <SlideNextButton />
        </div>
        <SwiperSlide>
          <div className='text-center flex'>
            <div className='text-white mx-auto items-center justify-center flex p-8 flex-col'>
              <div className='flex'>
                <FaStar size={10} className='text-[#FFD700]'/>
                <FaStar size={10} className='text-[#FFD700]'/>
                <FaStar size={10} className='text-[#FFD700]'/>
                <FaStar size={10} className='text-[#FFD700]'/>
                <FaStar size={10} className='text-[#e4e5e9]'/>
              </div>
              <p className='p-2 px-8 text-sm'>I&apos;ve always struggled with creating visually stunning presentations that captivate my audience. Thanks to this AI-powered platform, I can now turn my ideas into polished slideshows effortlessly. It&apos;s a game-changer for my marketing presentations!</p>
              <p className='text-[#FFD045] font-bold text-sm'>Zuckerberg Temitope</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='text-center flex'>
            <div className='text-white mx-auto items-center justify-center flex p-8 flex-col'>
              <div className='flex'>
                <FaStar size={25} className='text-[#FFD700]'/>
                <FaStar size={25} className='text-[#FFD700]'/>
                <FaStar size={25} className='text-[#FFD700]'/>
                <FaStar size={25} className='text-[#FFD700]'/>
                <FaStar size={25} className='text-[#e4e5e9]'/>
              </div>
              <p className='p-2 px-8 text-sm'>As an educator, I&apos;m constantly looking for ways to engage my students and make learning more interactive. This website has revolutionized the way I create presentations for my lessons. </p>
              <p className='text-[#FFD045] font-bold text-sm'>Rahman Musk</p>
            </div>
          </div>
        </SwiperSlide>
        {testimonials?.map((testimonial, index) => (
          <SwiperSlide key={index} className='text-center flex'>
            <div className='text-white mx-auto items-center justify-center flex p-8 flex-col'>
            {renderStars(testimonial.rating)}
              <p className='p-2 px-8 text-sm'>{testimonial.review}</p>
              <p className='text-[#FFD045] font-bold text-sm'>{testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}
