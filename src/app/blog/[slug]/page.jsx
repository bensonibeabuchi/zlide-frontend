'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname, } from 'next/navigation';
import { useGetSingleBlogQuery } from '@/redux/features/authApiSlice';
import { ErrorModal, Footer, LoadingSpinner, Navbar, ShareButton } from '@/components/common';
import Link from 'next/link';
import axios from 'axios';
import { FaRegCopyright, FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function DetailSlide() {
const pathname = usePathname();
const slug = pathname.split('/').pop();
// const { data: blog, isLoading, isError } = useGetSingleBlogQuery(slug);
const blogUrl = `http://localhost:3000${pathname}`;
const blogUrl2 = `https://zlide-ben.vercel.app${pathname}`;
const [isModalVisible, setIsModalVisible] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(false);
const [ blog, setBlogs ] = useState([]);


const fetchSingleBlog = async () => {
    setIsLoading(true);
    try {
        // const response = await axios.get(`http://localhost:8000/api/blog/${slug}`);
        const response = await axios.get(`https://zlide-backend-production.up.railway.app/api/blog/${slug}`);
        setBlogs(response.data);
        console.log(response);
    } catch (error) {
        console.error('BLOG RETRIEVAL ERROR:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleBlog();
  }, );


useEffect(() => {
if (error) {
setIsModalVisible(true);
}
}, [error]);

const closeModal = () => {
setIsModalVisible(false);
};

if (isLoading) {
return
<LoadingSpinner />;
}

if (error) {
return isModalVisible &&
<ErrorModal closeModal={closeModal} message="Failed to load blog data." />;
}

// Function to split content into three parts
const splitContent = (content) => {
const length = content.length;
const partLength = Math.floor(length / 3);
const part1 = content.slice(0, partLength);
const part2 = content.slice(partLength, 2 * partLength);
const part3 = content.slice(2 * partLength);
return [part1, part2, part3];
};

const [part1, part2, part3] = splitContent(blog?.content || '');

  // DATE LOGIC
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };



return (
<>
    <Navbar />
    <div>
        <Image src={blog?.image} width={1000} height={1000} alt={blog?.title} className='object-cover h-full w-full ' />
    </div>
    <div className='my-8 mb-16 space-y-2 justify-center items-center flex flex-col max-w-7xl text-center mx-auto'>
        <p className='text-sm text-gray-300 py-2'>  {formatDate(blog.date_posted)}</p>
        <h1
            className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% inline-block text-transparent bg-clip-text font-bold text-4xl'>
            {blog?.title}</h1>
        <p className='font-semibold text-xl'> By {blog?.writer}</p>
        <div className='p-8 max-w-4xl text-justify'>
            <p className='leading-loose mb-16'>
                {part1}
            </p>
            <div>
                <Image src={blog?.image2} width={1000} height={1000} alt={blog?.title}
                    className='object-cover h-full w-full p-8 mb-8 ' />
            </div>
            <p className='leading-loose mb-16'>
                {part2}
            </p>
            <div>
                <Image src={blog?.image3} width={1000} height={1000} alt={blog?.title}
                    className='object-cover h-full w-full p-8 mb-8' />
            </div>
            <p className='leading-loose mb-16'>
                {part3}
            </p>
        </div>
        <div className='w-[270px]'>
            <Link href='/blog'>
            <button
                className='bg-[#FFD045] w-full font-medium p-4 rounded-md text-[#1f1073] my-4 hover:scale-105 hover:shadow-lg hover:text-white'>Read
                more</button>
            </Link>
        </div>
        <div>
            <ShareButton url={blogUrl2} title={blog?.title} />
        </div>
    </div>
    {isLoading &&
    <LoadingSpinner />}
    <Footer />
</>
)
}