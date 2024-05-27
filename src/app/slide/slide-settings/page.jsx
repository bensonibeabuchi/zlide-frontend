'use client';
import { Navbar, NavbarHorizontal } from '@/components/common'
import SearchBar from '@/components/common/SearchBar';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from "react";
import placeholder from  '../../../../public/images/placeholder.png'
import { HiPlus } from "react-icons/hi2";
import { useRetrieveSlideQuery } from '@/redux/features/authApiSlice';
import ComingSoonModal from '@/components/common/ComingSoonModal';


export default function Dashboard() {
  const { data: slides, isLoading, isError } = useRetrieveSlideQuery();
  // console.log(slides);
  // console.log(slides.length, 'LENGTH');


  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = slides?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);
  const slide = slides?.slice(startIndex, endIndex + 1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };



  return (
    <>
      <div className='dot-background min-h-screen fixed w-screen flex'>
        <div className='grid grid-flow-col'>
          <div className="">
              <NavbarHorizontal/>
          </div>
          <ComingSoonModal/>
          <div className='h-screen overflow-auto'>
            <div className='mt-20 mb-16'>
              <div>
                <p className='text-4xl font-bold mb-4'>Templates</p>
                  <SearchBar/>
                <ul className='flex justify-between px-12 my-4 border-t text-sm border-b border-black'>
                  <li className='rounded hover:scale-105 cursor-pointer p-4 text-[#FFD045] bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8]'>All Templates</li>
                  <li className='rounded hover:scale-105 cursor-pointer p-4 hover:bg-indigo-200 hover:text-white hover:transition-all hover:cursor-pointer text-[#0A1F79]'>Fashion</li>
                  <li className='rounded hover:scale-105 cursor-pointer p-4 hover:bg-indigo-200 hover:text-white hover:transition-all hover:cursor-pointer text-[#0A1F79]'>Ecommerce</li>
                  <li className='rounded hover:scale-105 cursor-pointer p-4 hover:bg-indigo-200 hover:text-white hover:transition-all hover:cursor-pointer text-[#0A1F79]'>Business</li>
                  <li className='rounded hover:scale-105 cursor-pointer p-4 hover:bg-indigo-200 hover:text-white hover:transition-all hover:cursor-pointer text-[#0A1F79]'>Health</li>
                  <li className='rounded hover:scale-105 cursor-pointer p-4 hover:bg-indigo-200 hover:text-white hover:transition-all hover:cursor-pointer text-[#0A1F79]'>Logistics</li>
                </ul>
              </div>

              
  
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
