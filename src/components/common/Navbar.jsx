'use client';
import React from 'react'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { logout as setLogout } from '@/redux/features/authSlice';
import { useLoginMutation, useLogoutMutation } from '@/redux/features/authApiSlice';
import { useRouter } from 'next/navigation';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { useVerify } from '../../hooks';
import { FaBars } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import Link from 'next/link';



export default function Navbar() {
  const { data: user, isLoading, isError } = useRetrieveUserQuery();
  const [scrolling, setScrolling] = useState(false);
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector(state => state.auth);
  const [logout] = useLogoutMutation();
  const router = useRouter();

  const handleLogout = () => {
    logout()
    .unwrap()
    .then(() => {dispatch(setLogout());
    })
    .finally( () => {
      router.push('/')
  })
  }

  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : '';
    const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : '';
    return `${firstInitial}${lastInitial}`;
  };

  const initials = getInitials(user?.first_name, user?.last_name);
  

  const authLinks = (
    <div className='flex space-x-8 p-2'>
      <div className='text-indigo-500 bg-[#fcdc66] items-center text-center text-2xl font-semibold w-14 h-14  justify-center flex rounded-full'>
        <Link href="/slide/dashboard"> {initials} </Link>
      </div>
      <button className='text-white bg-red-500 hover:bg-red-300 py-2 px-4 rounded w-32'>
        <p onClick={handleLogout}>Logout</p>
      </button>
    </div>
  )
  const guestLinks = (
    <div className='space-x-4 flex justify-end px-8 w-full'>
      <button className="py-4 px-8 bg-white text-black rounded w-32"><a href="/login">LogIn</a></button>
      <button className="py-4 px-8 bg-[#FFD045] rounded w-32"><a href="/register">SignUp</a></button>
  </div>
  )

  const [isClick, setisClick] = useState(false);
  const [isDropdownOpen, setisDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  const toggleDropdown = () => {
    setisDropdownOpen(!isDropdownOpen);
  };

  const navRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true); // Change state to indicate scrolling
      } else {
        setScrolling(false); // Change state back to indicate no scrolling
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setisClick(false);
        setisDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  
  return (
    <nav ref={navRef} className= {`${scrolling ? 'sticky z-50 top-0 p-4 w-full bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90%' : 'p-4 w-full bg-transparent absolute top-0'}`}>
        <div className='hidden md:block'>
          <div className='flex items-center justify-between p-2 px-32 mx-auto max-w-[1920px]'>
            <div className="flex items-center md:p-8">
              <div className='flex-shrink-0 ml-4'>
                <a href="/">
                  <Image src="/images/zlide-logo.png" height={100} width={100} alt="Zlide logo" className="cursor-pointer" />
                </a>
              </div>
            </div>
            <div className='flex gap-24 text-xl text-white'>
              <p>Home</p>
              <p>Support</p>
              <p>Pricing</p>
            </div>
            <div className='flex gap-4 items-center'>
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </div>
        {/* MOBILE MENU  */}
        <div className='md:hidden'>
          <div className='flex items-center justify-between p-10 px-8 text-white'>
            <div>
              <Image src="/images/zlide-logo.png" alt="Zlide logo" width={100} height={100} />
            </div>
            <div>
              <button onClick={toggleNavbar} className='transition-all'>
                {isClick ? <RiCloseLargeFill size={30} className='transition-all'/> : <FaBars size={30} className='transition-all'/> }
              </button>
                {isClick && (
                  <div className="absolute right-2 w-full px-8 text-white py-4">
                    <div className="flex flex-col items-center text-center bg-white rounded-md shadow-md p-4 py-2 w-full">
              
                      <a href="" className="block px-4 py-4 text-[#0A1F79] hover:bg-indigo-200 hover:transition-all hover:cursor-pointer w-full text-end border-b border-b-[#0A1F79] font-semibold">Home</a>
                      <a href="" className="block px-4 py-4 text-[#0A1F79] hover:bg-indigo-200 hover:transition-all hover:cursor-pointer w-full text-end border-b border-b-[#0A1F79] font-semibold">Support</a>
                      <a href="" className="block px-4 py-4 text-[#0A1F79] hover:bg-indigo-200 hover:transition-all hover:cursor-pointer w-full text-end border-b border-b-[#0A1F79] font-semibold">Pricing</a>
                      <p className='ml-40'>
                        {isAuthenticated ? authLinks : guestLinks}
                      </p>
                    </div>
                  </div>
                )}
            </div>

          </div>
        </div>
        
    </nav>
  )
}
