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

                {/* TEMPLATES HERE */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-8'>
                    <div>
                      <Link href="">
                          <div className='bg-white rounded-xl grid lg:grid-cols-2 grid-col-1 p-4 my-2 h-[250px]'>
                            <div className='justify-center p-4 flex flex-col text-start'>
                              <p className='text-sm font-semibold py-2'>Introduction</p>
                              <p className='text-xs overflow-hidden text-ellipsis h-24'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sequi a exercitationem voluptatibus, dolore sapiente beatae expedita odit quibusdam accusantium libero! Atque sit perspiciatis mollitia itaque tempore alias libero repellendus!
                              </p>
                            </div>
                            <div>
                             <Image src={placeholder} alt="test" width={1000} height={1000} className='w-full p-4 object-cover h-[226px]' />
                            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                          </div>
                          <p className='font-bold text-base pl-4'>Prsentation Name</p>
                          <p className='text-gray-500 text-xs pl-4'>Created at 03 June 2024</p>
                      </Link>
                    </div>
                    <div>
                      <Link href="">
                          <div className='bg-white rounded-xl grid lg:grid-cols-2 grid-col-1 p-4 my-2 h-[250px]'>
                            <div className='justify-center p-4 flex flex-col text-start'>
                              <p className='text-sm font-semibold py-2'>Introduction</p>
                              <p className='text-xs overflow-hidden text-ellipsis h-24'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sequi a exercitationem voluptatibus, dolore sapiente beatae expedita odit quibusdam accusantium libero! Atque sit perspiciatis mollitia itaque tempore alias libero repellendus!
                              </p>
                            </div>
                            <div>
                              <Image src={placeholder} alt="test" width={1000} height={1000} className='w-full p-4 object-cover h-[226px]' />
                            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                          </div>
                          <p className='font-bold text-base pl-4'>Prsentation Name</p>
                          <p className='text-gray-500 text-xs pl-4'>Created at 03 June 2024</p>
                      </Link>
                    </div>
                    <div>
                      <Link href="">
                          <div className='bg-white rounded-xl grid lg:grid-cols-2 grid-col-1 p-4 my-2 h-[250px]'>
                            <div className='justify-center p-4 flex flex-col text-start'>
                              <p className='text-sm font-semibold py-2'>Introduction</p>
                              <p className='text-xs overflow-hidden text-ellipsis h-24'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sequi a exercitationem voluptatibus, dolore sapiente beatae expedita odit quibusdam accusantium libero! Atque sit perspiciatis mollitia itaque tempore alias libero repellendus!
                              </p>
                            </div>
                            <div>
                              <Image src={placeholder} alt="test" width={1000} height={1000} className='w-full p-4 object-cover h-[226px]' />
                            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                          </div>
                          <p className='font-bold text-base pl-4'>Prsentation Name</p>
                          <p className='text-gray-500 text-xs pl-4'>Created at 03 June 2024</p>
                      </Link>
                    </div>
                    <div>
                      <Link href="">
                          <div className='bg-white rounded-xl grid lg:grid-cols-2 grid-col-1 p-4 my-2 h-[250px]'>
                            <div className='justify-center p-4 flex flex-col text-start'>
                              <p className='text-sm font-semibold py-2'>Introduction</p>
                              <p className='text-xs overflow-hidden text-ellipsis h-24'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sequi a exercitationem voluptatibus, dolore sapiente beatae expedita odit quibusdam accusantium libero! Atque sit perspiciatis mollitia itaque tempore alias libero repellendus!
                              </p>
                            </div>
                            <div>
                              <Image src={placeholder} alt="test" width={1000} height={1000} className='w-full p-4 object-cover h-[226px]' />
                            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                          </div>
                          <p className='font-bold text-base pl-4'>Prsentation Name</p>
                          <p className='text-gray-500 text-xs pl-4'>Created at 03 June 2024</p>
                      </Link>
                    </div>
                    <div>
                      <Link href="">
                          <div className='bg-white rounded-xl grid lg:grid-cols-2 grid-col-1 p-4 my-2 h-[250px]'>
                            <div className='justify-center p-4 flex flex-col text-start'>
                              <p className='text-sm font-semibold py-2'>Introduction</p>
                              <p className='text-xs overflow-hidden text-ellipsis h-24'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sequi a exercitationem voluptatibus, dolore sapiente beatae expedita odit quibusdam accusantium libero! Atque sit perspiciatis mollitia itaque tempore alias libero repellendus!
                              </p>
                            </div>
                            <div>
                              <Image src={placeholder} alt="test" width={1000} height={1000} className='w-full p-4 object-cover h-[226px]' />
                            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                          </div>
                          <p className='font-bold text-base pl-4'>Prsentation Name</p>
                          <p className='text-gray-500 text-xs pl-4'>Created at 03 June 2024</p>
                      </Link>
                    </div>
                    <div>
                      <Link href="">
                          <div className='bg-white rounded-xl grid lg:grid-cols-2 grid-col-1 p-4 my-2 h-[250px]'>
                            <div className='justify-center p-4 flex flex-col text-start'>
                              <p className='text-sm font-semibold py-2'>Introduction</p>
                              <p className='text-xs overflow-hidden text-ellipsis h-24'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sequi a exercitationem voluptatibus, dolore sapiente beatae expedita odit quibusdam accusantium libero! Atque sit perspiciatis mollitia itaque tempore alias libero repellendus!
                              </p>
                            </div>
                            <div>
                             <Image src={placeholder} alt="test" width={1000} height={1000} className='w-full p-4 object-cover h-[226px]' />  
                            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                          </div>
                          <p className='font-bold text-base pl-4'>Prsentation Name</p>
                          <p className='text-gray-500 text-xs pl-4'>Created at 03 June 2024</p>
                      </Link>
                    </div>
                    <div>
                      <Link href="">
                          <div className='bg-white rounded-xl grid lg:grid-cols-2 grid-col-1 p-4 my-2 h-[250px]'>
                            <div className='justify-center p-4 flex flex-col text-start'>
                              <p className='text-sm font-semibold py-2'>Introduction</p>
                              <p className='text-xs overflow-hidden text-ellipsis h-24'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sequi a exercitationem voluptatibus, dolore sapiente beatae expedita odit quibusdam accusantium libero! Atque sit perspiciatis mollitia itaque tempore alias libero repellendus!
                              </p>
                            </div>
                            <div>
                              <Image src={placeholder} alt="test" width={1000} height={1000} className='w-full p-4 object-cover h-[226px]' />  
                            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                          </div>
                          <p className='font-bold text-base pl-4'>Prsentation Name</p>
                          <p className='text-gray-500 text-xs pl-4'>Created at 03 June 2024</p>
                      </Link>
                    </div>
                    <div>
                      <Link href="">
                          <div className='bg-white rounded-xl grid lg:grid-cols-2 grid-col-1 p-4 my-2 h-[250px]'>
                            <div className='justify-center p-4 flex flex-col text-start'>
                              <p className='text-sm font-semibold py-2'>Introduction</p>
                              <p className='text-xs overflow-hidden text-ellipsis h-24'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sequi a exercitationem voluptatibus, dolore sapiente beatae expedita odit quibusdam accusantium libero! Atque sit perspiciatis mollitia itaque tempore alias libero repellendus!
                              </p>
                            </div>
                            <div>
                              <Image src={placeholder} alt="test" width={1000} height={1000} className='w-full p-4 object-cover h-[226px]' />
                            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                          </div>
                          <p className='font-bold text-base pl-4'>Prsentation Name</p>
                          <p className='text-gray-500 text-xs pl-4'>Created at 03 June 2024</p>
                      </Link>
                    </div>
                    <div>
                      <Link href="">
                          <div className='bg-white rounded-xl grid lg:grid-cols-2 grid-col-1 p-4 my-2 h-[250px]'>
                            <div className='justify-center p-4 flex flex-col text-start'>
                              <p className='text-sm font-semibold py-2'>Introduction</p>
                              <p className='text-xs overflow-hidden text-ellipsis h-24'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sequi a exercitationem voluptatibus, dolore sapiente beatae expedita odit quibusdam accusantium libero! Atque sit perspiciatis mollitia itaque tempore alias libero repellendus!
                              </p>
                            </div>
                            <div>
                              <Image src={placeholder} alt="test" width={1000} height={1000} className='w-full p-4 object-cover h-[226px]' />
                            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                          </div>
                          <p className='font-bold text-base pl-4'>Prsentation Name</p>
                          <p className='text-gray-500 text-xs pl-4'>Created at 03 June 2024</p>
                      </Link>
                    </div>
                </div>
              
              {/* TEMPLATES ENDS */}
              
              {/* Pagination controls */}
               <div className='p-4 flex text-center items-center justify-center gap-8 mb-8'>
                    <button onClick={handlePrevPage} disabled={currentPage === 1} className='text-[#FFD045] bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] px-4 py-2 rounded ' >Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages} className='text-[#FFD045] bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] px-4 py-2 rounded' >Next</button>
                </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
