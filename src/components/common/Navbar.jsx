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
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import axios from 'axios';
import cookies from 'next-cookies';





export default function Navbar() {
  // const { data: user, isLoading, isError } = useRetrieveUserQuery();
  const [scrolling, setScrolling] = useState(false);
  // const dispatch = useAppDispatch();
  // const { isAuthenticated } = useAppSelector(state => state.auth);
  // const [logout] = useLogoutMutation();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to retrieve user details
  const fetchUserDetails = async () => {
    try {
        const access = localStorage.getItem('access'); // Assuming you have stored the token in local storage
        const refresh = localStorage.getItem('refresh'); // Assuming you have stored the token in local storage
        // const response = await axios.get('http://localhost:8000/api/users/me/', {
        const response = await axios.get('https://zlide-backend-production.up.railway.app/api/users/me/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('access')}`
        },
        });

        setUser(response.data);
        setIsAuthenticated(true);
        console.log('User Data:', response.data); // Log the user data
        
        } catch (error) {
            console.error('Failed to fetch user details', error);
            if (error.response) {
                console.error('Error RESPONSE Data:', error.response.data);
            }
        }
        };

        useEffect(() => {
            fetchUserDetails();
        }, []); 

    const handleLogout = () => {
        localStorage.removeItem('access'); // Remove the token from local storage on logout
        localStorage.removeItem('refresh'); // Remove the token from local storage on logout
        setUser(null); // Clear user data
        router.push('/'); // Redirect to login page
    };

  // const handleLogout = () => {
  //   logout()
  //   .unwrap()
  //   .then(() => {dispatch(setLogout());
  //   })
  //   .finally( () => {
  //     router.push('/')
  // })
  // }

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
      <button className='text-white bg-red-500 hover:bg-red-300 py-2 px-4 rounded lg:w-32 w-16'>
        <p onClick={handleLogout}>Logout</p>
      </button>
    </div>
  )
  const guestLinks = (
    <div className='md:space-x-4 flex md:px-8 w-full'>
      <button className="py-4 lg:px-8 px-2 bg-white rounded lg:w-32 w-16"><a href="/login">Login</a></button>
      <button className="py-4 lg:px-8 px-2 bg-[#FFD045] rounded lg:w-32 w-16"><a href="/register">Signup</a></button>
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
    <nav ref={navRef} className= {`${scrolling ? 'sticky z-50 top-0 lg:p-4 w-full bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90%' : 'lg:p-4 p-2 w-full bg-transparent absolute top-0'}`}>
        <div className='hidden md:block'>
          <div className='flex items-center justify-center p-4 overflow-hidden lg:px-32 md:px-8 px-4 mx-auto max-w-[1920px]'>
            <div className="flex-shrink-0 items-center lg:p-8 p-4  overflow-hidden">
              <div className='flex-shrink-0'>
                <a href="/">
                  <Image src="/images/zlide-logo.png" height={200} width={100} alt="Zlide logo" className="cursor-pointer" />
                </a>
              </div>
            </div>
            <div className='flex justify-center items-center lg:text-xl text-base text-white lg:w-full w-1/4'>
              <Link href="/blog" className='hover:bg-[#FFD045] hover:text-[#1f1073] hover:scale-105 lg:p-4 lg:w-32 text-center rounded-md'>
                <p>Blog</p>            
              </Link>


              <button onClick={toggleDropdown} className="flex hover:bg-[#FFD045] hover:text-[#1f1073] hover:scale-105 p-4 cursor-pointer lg:gap-4 text-center justify-center items-center w-40 rounded-md">
                      Support {isDropdownOpen ? <IoIosArrowUp className="lg:h-8 lg:w-8 text-white transition-all cursor-pointer" /> : <IoIosArrowDown className="lg:h-8 lg:w-8 text-white cursor-pointer" />}
              </button>
              {/* Black background during dropdown menu */}
              {isDropdownOpen && (
                <div className="fixed inset-0 bg-black opacity-20 " onClick={toggleDropdown}></div>
              )}
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute top-28 ml-40 p-8 py-8 bg-white border-gray-200 shadow-lg rounded-lg">
                  <a href="/faq" className="block px-4 py-4 text-[#1f1073] hover:bg-[#ffd14585] hover:scale-105 font-medium  hover:transition-all">
                    <p className="">FAQ</p>
                  </a>
                  <a href="/terms-of-service" className="block px-4 py-4 text-[#1f1073] hover:bg-[#ffd14585] hover:scale-105 font-medium hover:transition-all">
                    <p className="">Terms & Conditions</p>
                  </a>
              
                  <a href="/privacy" className="block px-4 py-4 text-[#1f1073] hover:bg-[#ffd14585] hover:scale-105 font-medium hover:transition-all">
                    <p className="">Privacy Policy</p>
                  </a>

                  <a href="/about" className="block px-4 py-4 text-[#1f1073] hover:bg-[#ffd14585] hover:scale-105 font-medium hover:transition-all">
                    <p className="">About Us</p>
                  </a>

                  <a href="/contact" className="block px-4 py-4 text-[#1f1073] hover:bg-[#ffd14585] hover:scale-105 font-medium hover:transition-all">
                    <p className="">Contact Us</p>
                  </a>

                </div>
              )}


              <Link href="/pricing" className='hover:bg-[#FFD045] hover:text-[#1f1073] hover:scale-105 lg:p-4 lg:w-32 text-center rounded-md'>
              <p>Pricing</p>
              </Link>
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
              
                      <Link href="/blog" className="block px-4 py-4 text-[#1f1073] hover:bg-[#ffd14585] hover:scale-105 hover:transition-all hover:cursor-pointer w-full text-end border-b border-b-[#0A1F79] font-semibold">Blog</Link>
                      
                      {/* <button href="" className="block px-4 py-4 text-[#0A1F79] hover:bg-indigo-200 hover:transition-all hover:cursor-pointer w-full text-end border-b border-b-[#0A1F79] font-semibold">Support</button> */}
                     
                     
                     
                      <button onClick={toggleDropdown} className="flex px-4 py-4  text-[#1f1073] hover:bg-[#ffd14585] hover:scale-105 hover:transition-all hover:cursor-pointer w-full text-end border-b border-b-[#0A1F79] items-center justify-end gap-2 font-semibold">
                      Support {isDropdownOpen ? <IoIosArrowUp className="h-5 w-5 text-[#0A1F79] transition-all cursor-pointer" /> : <IoIosArrowDown className="h-5 w-5 text-[#0A1F79] cursor-pointer" />} 
                      </button>
                      {/* Black background during dropdown menu */}
                      {isDropdownOpen && (
                        <div className="fixed inset-0 bg-black opacity-20" onClick={toggleDropdown}></div>
                      )}
                      {/* Dropdown menu */}
                      {isDropdownOpen && (
                        <div className="absolute mt-32 w-3/4 ml-14 p-8 bg-white border-gray-200 shadow-lg rounded-lg">
                          <a href="/faq" className="block px-4 py-4 text-[#1f1073] hover:bg-[#ffd14585] hover:scale-105 font-medium hover:transition-all ">
                            <p className="">FAQ</p>
                          </a>
                          <a href="/terms-of-service" className="block px-4 py-4 text-[#1f1073] hover:bg-[#ffd14585] hover:scale-105 font-medium hover:transition-all">
                            <p className="">Terms & Conditions</p>
                          </a>
                      
                          <a href="/privacy" className="block px-4 py-4 text-[#1f1073] hover:bg-[#ffd14585] hover:scale-105 font-medium hover:transition-all">
                            <p className="">Privacy Policy</p>
                          </a>

                          <a href="/about" className="block px-4 py-4 text-[#1f1073] hover:bg-[#ffd14585] hover:scale-105 font-medium hover:transition-all">
                            <p className="">About Us</p>
                          </a>

                          <a href="/contact" className="block px-4 py-4 text-[#1f1073] hover:bg-[#ffd14585] hover:scale-105 font-medium hover:transition-all">
                            <p className="">Contact Us</p>
                          </a>

                        </div>
                      )}



                      
                      
                      
                      
                      
                      
                      
                      <Link href="/pricing" className="block px-4 py-4 text-[#1f1073] hover:bg-[#ffd14585] hover:scale-105 hover:transition-all hover:cursor-pointer w-full text-end border-b border-b-[#0A1F79] font-semibold">Pricing</Link>
                      <p className='ml-28 p-2'>
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
