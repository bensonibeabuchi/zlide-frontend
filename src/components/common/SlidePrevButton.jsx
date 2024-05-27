import React from 'react'

import { FaChevronLeft } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

export default function SlidePrevButton() {
    const swiper = useSwiper();

  return (
    <div>
         <button  className="bg-[#FFD045] rounded-full md:p-4 p-2 shadow-md hover:scale-105" onClick={() => swiper?.slidePrev()}>
          <FaChevronLeft className="text-[#0A1F79] pointer-events-none md:text-xl"/>
        </button>
    </div>
  )
}
