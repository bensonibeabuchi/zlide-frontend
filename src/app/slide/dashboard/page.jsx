'use client';
import { Navbar, NavbarHorizontal } from '@/components/common'
import SearchBar from '@/components/common/SearchBar';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from "react";
import placeholder from  '../../../../public/images/placeholder.png'
import { HiPlus } from "react-icons/hi2";
import { useRetrieveSlideQuery } from '@/redux/features/authApiSlice';
import DeleteModal from '@/components/common/DeleteModal';
import { FaTrashCan } from "react-icons/fa6";
import axios from 'axios';
import { ImSpinner3 } from "react-icons/im";


export default function Dashboard() {
  const { data: slides, isLoading } = useRetrieveSlideQuery();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [slideToDelete, setSlideToDelete] = useState(null);
  const [error, setError] = useState(null);


    // DELETE LOGIC
  const handleDeleteClick = (slide) => {
    setSlideToDelete(slide);
    setIsDeleteModalOpen(true);
  };
  
  const handleDeleteConfirm = async () => {
    if (!slideToDelete) return;

    // const url = `https://zlide-backend-production.up.railway.app/api/presentation/zlide/${slideToDelete.id}/`;
    const url = `http://localhost:8000/api/presentation/zlide/${slideToDelete.id}/`;
    try {
      await axios.delete(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setIsDeleteModalOpen(false);
      setSlideToDelete(null);
    } catch (error) {
      console.error(error)
      setError(error);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setSlideToDelete(null);
  };
  

  // DATE LOGIC
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  // PAGINATION LOGIC
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
          <div className='h-screen overflow-auto px-8'>
            <div className='mt-20 space-y-8 mb-4'>
              <p>Hey Zlider,</p>
              <p className='text-xl font-semibold'>Welcome to Zlide Presentation Designer</p>
              <button className='w-[144px] h-[200px] text-center flex-col'>
                <Link href="/slide/draft">
                  <HiPlus size={104} className='text-[#1F1053] bg-white rounded-lg items-center p-4 flex justify-center mx-auto shadow-sm hover:scale-105 hover:bg-[#1F1053] hover:text-white'/>
                </Link>
                
                <p className='text-sm font-semibold mt-4'>New Zlide</p>
                <p className='text-xs font-light mt-2'>Design from scratch</p>
              </button>
              {/* <button className='w-[144px] h-[200px] text-center flex-col'>
                <Link href="/slide/draft">
                  <HiPlus size={104} className='text-white bg-[#1F1053] rounded-lg items-center p-4 flex justify-center mx-auto shadow-sm hover:scale-105 hover:bg-white hover:text-[#1F1053]'/>
                </Link>
                
                <p className='text-sm font-semibold mt-4'>Browse Templates</p>
                <p className='text-xs font-light mt-2'>Design using a template</p>
              </button> */}
            </div>

            {/* Recent Projects */}
            <div >
              <p className='text-xl font-bold mb-4'>Recent presentation</p>
                <SearchBar/>
              {/* <p className="p-4">You&apos;ll see your recent presentations here</p> */}
            </div>
            {/* Displaying slides */}
              { slides ? (
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-8'>
                  {slide.slice(0,6).map((slide, index) => (
                    <div key={index}>
                      <Link href={`/slide/draft/${slide.id}`}>
                          <div className='bg-white rounded-xl grid lg:grid-cols-2 grid-col-1 p-4 my-2 h-[250px]'>
                            <div className='justify-center p-4 flex flex-col text-start'>
                              <p className='text-sm font-semibold py-2'>{slide.presentation_data[0]?.title}</p>
                              <p className='text-xs overflow-hidden text-ellipsis h-24'>{slide.presentation_data[0]?.content}</p>
                            </div>
                            <div>
                              {slide.presentation_data[0]?.image_urls && slide.presentation_data[0].image_urls.map((url, i) => (
                                <Image key={i} src={url} alt={`Slide ${index + 1} Image ${i + 1}`} width={1000} height={1000} className='w-full p-4 object-cover h-[226px]' priority />
                              ))}
                            </div>
                          </div>
                      </Link>
                          <div className='flex justify-between px-8 items-center p-2'>
                            <div>
                              <p className='font-bold text-base'>{slide.presentation_name}</p>
                              <p className='text-gray-500 text-xs'>Created at {formatDate(slide.created_at)}</p>
                            </div>
                            <div className='items-center flex justify-center'>
                              <button
                                type="button"
                                onClick={() => handleDeleteClick(slide)}
                                className='bg-red-500 p-2 rounded-md flex items-center gap-2 text-white'
                                >  <FaTrashCan/>
                              </button>
                            </div>
                          </div>
                    </div>
                  ))}
                </div>
              ) :
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mb-8'>
                <div className='bg-white rounded-xl items-center justify-center text-center flex p-4 my-2 h-[250px]'>
                  <div className='justify-center p-4 flex flex-col items-center text-center bg-gray-100 rounded-md h-full'>
                    <p className='font-semibold'>Create your first slide. We can&apos;t wait to see what you create next.</p>
                  </div>
                </div>
                {/* <div>
                  <div>
                      <div className='bg-white rounded-xl items-center justify-center text-center grid lg:grid-cols-2 grid-col-1 p-4 my-2 h-[250px]'>
                        <div className='justify-center p-4 flex flex-col items-center text-center'>
                          <ImSpinner3 size={50} className='animate-spin '/>
                          <p>Log in to see your slides...</p>
                          </div>
                        <div>
                          <Image src="/images/zlide-logo-black.png" alt="Zlide logo" width={500} height={500} className='w-full p-4 object-contain h-[226px]' />
                        </div>
                      </div>
                  </div>
                      <div className='flex justify-between px-8 items-center p-2'>
                        <div>
                          <p className='font-bold text-base opacity-0'>Untitled</p>
                          <p className='text-gray-500 text-xs opacity-0'>Created at</p>
                        </div>
                        <div className='items-center flex justify-center'>
                          <button
                            type="button"
                            className='bg-red-500 p-2 rounded-md flex items-center gap-2 opacity-0 text-white'
                            >  <FaTrashCan/>
                          </button>
                        </div>
                      </div>
                </div>
                <div>
                  <div>
                      <div className='bg-white rounded-xl items-center justify-center text-center grid lg:grid-cols-2 grid-col-1 p-4 my-2 h-[250px]'>
                        <div className='justify-center p-4 flex flex-col items-center text-center'>
                          <ImSpinner3 size={50} className='animate-spin '/>
                          <p>Log in to see your slides...</p>
                         </div>
                        <div>
                          <Image src="/images/zlide-logo-black.png" alt="Zlide logo" width={500} height={500} className='w-full p-4 object-contain h-[226px]' />
                        </div>
                      </div>
                  </div>
                      <div className='flex justify-between px-8 items-center p-2'>
                        <div>
                          <p className='font-bold text-base opacity-0'>Untitled</p>
                          <p className='text-gray-500 text-xs opacity-0'>Created at</p>
                        </div>
                        <div className='items-center flex justify-center'>
                          <button
                            type="button"
                            className='bg-red-500 p-2 rounded-md flex items-center gap-2 opacity-0 text-white'
                            >  <FaTrashCan/>
                          </button>
                        </div>
                      </div>
                </div>
                <div>
                  <div>
                      <div className='bg-white rounded-xl items-center justify-center text-center grid lg:grid-cols-2 grid-col-1 p-4 my-2 h-[250px]'>
                        <div className='justify-center p-4 flex flex-col items-center text-center'>
                            <ImSpinner3 size={50} className='animate-spin '/>
                            <p>Log in to see your slides...</p>
                        </div>
                        <div>
                          <Image src="/images/zlide-logo-black.png" alt="Zlide logo" width={500} height={500} className='w-full p-4 object-contain h-[226px]' />
                        </div>
                      </div>
                  </div>
                      <div className='flex justify-between px-8 items-center p-2'>
                        <div>
                          <p className='font-bold text-base opacity-0'>Untitled</p>
                          <p className='text-gray-500 text-xs opacity-0'>Created at</p>
                        </div>
                        <div className='items-center flex justify-center'>
                          <button
                            type="button"
                            className='bg-red-500 p-2 rounded-md flex items-center gap-2 opacity-0 text-white'
                            >  <FaTrashCan/>
                          </button>
                        </div>
                      </div>
                </div> */}
              </div>
             }

               {/* Pagination controls */}
               <div className='p-4 flex text-center items-center justify-center gap-8 mb-8'>
                    <button onClick={handlePrevPage} disabled={currentPage === 1} className='text-[#FFD045] bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] px-4 py-2 rounded ' >Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages} className='text-[#FFD045] bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] px-4 py-2 rounded' >Next</button>
                </div>
                <DeleteModal
                  isOpen={isDeleteModalOpen}
                  onClose={handleDeleteCancel}
                  onConfirm={handleDeleteConfirm}
                  slideTitle={slideToDelete?.title}
                  />
          </div>
        </div>
      </div>
    </>
  )
}
