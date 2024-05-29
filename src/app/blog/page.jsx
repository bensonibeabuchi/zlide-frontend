'use client';
import React, { useState } from 'react';;
import {Navbar, Footer, LoadingSpinner} from '@/components/common/'
import Image from 'next/image';
import { useGetAllBlogQuery } from '@/redux/features/authApiSlice';
import Link from 'next/link';





export default function Blog() {
  const { data: blogs, isLoading } = useGetAllBlogQuery();
  const BASE_URL = 'http://localhost:8000';
  const BASE_URL2 = 'https://zlide-backend-production.up.railway.app';

  // PAGINATION LOGIC
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = blogs?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);
  const blog = blogs?.slice(startIndex, endIndex + 1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };


  return (
    <>
    <Navbar className="text-black"/>
    <div className='bg-gradient-to-br from-[#FFD045] from-10% via-[#F1E0AD] via-30% to-[#E7C548] to-90% text-center items-center md:pt-64 pt-40 pb-32 px-8 md:gap-8 flex flex-col mx-auto md:h-[1024px]'>
      <p className='text-black md:text-8xl text-4xl font-bold'>See our stories,</p>
      <p className='text-black md:text-8xl text-4xl font-bold'>thoughts and ideas</p>
      <p className='text-black md:text-lg text-sm text-center mt-4 px-8'>Subscribe to learn about our new product and the latest trends in presenting and updates</p>
        <form className='flex flex-col items-center space-y-2 mt-8 bg-gray-100 p-4 rounded-lg md:w-[600px] w-[400px] shadow-2xl'>
            <input
            name="subscribe"
            id="subscribe"
            placeholder='Email address'
            className='w-full rounded-md p-4 border'/>
          <button type="submit" className='bg-[#FFD045] p-4 rounded-md w-full text-[#1f1073] font-semibold'>Subscribe to our mailing list</button>
        </form>
    </div>

    {/* RECENT BLOGS  */}

    <div className='my-24 justify-center items-center flex'>
      <div className='max-w-[1920px] p-8 px-24 w-full'>
        <h2 className='bg-gradient-to-br my-8 from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% inline-block text-transparent bg-clip-text font-semibold text-3xl'>Recent Blog Post</h2>
        
        <div className='lg:grid lg:grid-cols-2 lg:h-[800px] p-2 lg:gap-6 overflow-hidden'>
    
            {blogs?.slice(0, 1).map((blog, index) => (
                <>
                  <div>
                    <div className='lg:h-[495px] lg:w-[607px]'>
                      <Image src={`${BASE_URL2}${blog.image}`} width={1000} height={1000} alt={blog.title} className='object-cover h-full w-full ' />
                    </div>
                    <div className='p-2'>
                      <p className='text-xs text-gray-300 py-2'>{blog.date_posted}</p>
                      <p className='lg:w-[607px] font-semibold text-lg text-ellipsis overflow-hidden truncate'>{blog.title}</p>
                      <p className='lg:w-[607px] h-[74px] text-ellipsis overflow-hidden text-justify'>{blog.content}</p>
                      <Link href={`/blog/${blog.slug}`}>
                        <button className='bg-[#FFD045] font-medium p-4 rounded-md text-[#1f1073] my-4 hover:scale-105 hover:shadow-lg hover:text-white'>Read more</button>
                      </Link>
                    </div>
                  </div>
                </>

                ))}

          <div className='space-y-8'>
            {blogs?.slice(1, 4).map((blog, index) => (
              <div key={index}>
                <div className='lg:w-[639px] grid lg:grid-cols-2'>
                  <div className='lg:w-[292px] h-[226px]'>
                    <Image src={`${BASE_URL2}${blog.image}`} width={1000} height={1000} alt={blog.title} className='object-cover h-full w-full ' />
                  </div>
                  <div className='lg:w-[307px] md:h-[226px]'>
                    <p className='text-xs text-gray-300 py-2'>{blog.date_posted}</p>
                    <p className='font-semibold text-lg md:truncate'>{blog.title}</p>
                    <p className='text-ellipsis h-[94px] overflow-hidden lg:w-[290px] text-justify'> {blog.content}</p>
                    <Link href={`/blog/${blog.slug}`}>
                      <button className='bg-[#FFD045] font-medium p-4 rounded-md text-[#1f1073] my-4 hover:scale-105 hover:shadow-lg hover:text-white'>Read more</button>
                    </Link>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>

    {/* ALL BLOG POST  */}
 
    <div className='my-24 justify-center items-center flex'>
      <div className='max-w-[1920px] md:p-8 p-4 md:px-24 w-full'>
      <h2 className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% inline-block text-transparent bg-clip-text font-semibold md:text-3xl text-xl'>All Blog Post</h2>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 md:p-16 p-4'>

        {blog?.map((blog, index) => (
        <div key={index}>
          <div className='p-4 mb-6 h-[506px]'>
            <div className='w-[368px] h-[226px]'>
              <Image src={`${BASE_URL2}${blog.image}`} width={1000} height={1000} alt={blog.title} className='object-cover h-full w-full ' />
            </div>
            <div className='w-[360px] h-[226px]'>
                <p className='text-xs text-gray-300 py-2'>{blog.date_posted}</p>
                <p className=' font-semibold text-lg text-ellipsis overflow-hidden truncate'>{blog.title}</p>
                <p className=' text-ellipsis h-[94px] w-[360px] overflow-hidden text-justify'>{blog.content}</p>
                <Link href={`/blog/${blog.slug}`}>
                 <button className='bg-[#FFD045] font-medium p-4 rounded-md text-[#1f1073] my-4 hover:scale-105 hover:shadow-lg hover:text-white'>Read more</button>
                </Link>
            </div>
          </div>
        </div>
        ))}     


      </div>
       {/* Pagination controls */}
       <div className='p-4 flex text-center items-center justify-center gap-8 mb-8'>
            <button onClick={handlePrevPage} disabled={currentPage === 1} className='bg-[#FFD045] font-medium p-4 rounded-md text-[#1f1073] my-4 hover:scale-105 hover:shadow-lg hover:text-white' >Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className='bg-[#FFD045] font-medium p-4 rounded-md text-[#1f1073] my-4 hover:scale-105 hover:shadow-lg hover:text-white' >Next</button>
        </div>

 
      </div>


    </div>
    {isLoading && <LoadingSpinner/>}

    <Footer/>
    </>
  )
}
