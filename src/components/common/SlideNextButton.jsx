import React from 'react'

import { FaChevronRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
    const swiper = useSwiper();

  return (
    <div>
         <button  className="bg-[#FFD045] rounded-full md:p-4 p-2 shadow-md hover:scale-105" onClick={() => swiper?.slideNext()}>
          <FaChevronRight className="text-[#0A1F79] pointer-events-none md:text-xl"/>
        </button>
    </div>
  )
}
