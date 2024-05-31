'use client';
{/* text-[#FFD045] bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] */}
import React, { useState, useEffect } from 'react';
import { HiPencilSquare, HiClock, HiArrowRightEndOnRectangle, HiMiniRectangleGroup, HiMiniTrash, HiCog6Tooth, HiChevronLeft, HiChevronRight, HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { logout as setLogout } from '@/redux/features/authSlice';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { FaPowerOff } from "react-icons/fa6";


export default function NavbarHorizontal() {
    const { data: user, isLoading, isError } = useRetrieveUserQuery();
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useAppSelector(state => state.auth);
    const [logout] = useLogoutMutation();
    const router = useRouter();
    const [activeButton, setActiveButton] = useState('dashboard');
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    
     // Initialize state with value from localStorage, or default to true
     const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => {
        if (typeof window !== 'undefined') {
         const savedSidebarState = localStorage.getItem('isSidebarExpanded');
         return savedSidebarState !== null ? savedSidebarState === 'true' : true;
            }
     });

    useEffect(() => {
        if (typeof window !== 'undefined') {
        const savedSidebarState = localStorage.getItem('isSidebarExpanded');
        if (savedSidebarState !== null) {
            setIsSidebarExpanded(savedSidebarState === 'true');
        }
        }
    }, []);

    // Save state to localStorage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
        localStorage.setItem('isSidebarExpanded', isSidebarExpanded);
        }
    }, [isSidebarExpanded]);

    const toggleSidebar = () => {
        setIsSidebarExpanded(prevState => !prevState);
    };

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

    const getFullName = (fName, lName) => {
        const firstName = fName ? fName : '';
        const lastName = lName ? lName : '';
        return `${firstName } ${ lastName}`;
    };

    const initials = getInitials(user?.first_name, user?.last_name);
    const fullName = getFullName(user?.first_name, user?.last_name);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    useEffect(() => {
        localStorage.setItem('activeButton', activeButton);
    }, [activeButton]);


    useEffect(() => {
        // Set the active button based on the pathname
        switch (pathname) {
            case `/slide/draft/${id}`:
                setActiveButton('draft');
                break;
            case '/slide/draft':
                setActiveButton('draft');
                break;
            case '/slide/slide-templates':
                setActiveButton('template');
                break;
            case '/slide/archive':
                setActiveButton('archive');
                break;
            case '/slide/slide-settings':
                setActiveButton('settings');
                break;
            default:
                setActiveButton('dashboard');
        }
    }, [id, pathname]);


    return (
        <div className="h-screen sticky z-30 mr-8">
            <nav className='text-black text-lg'>
                <div className='h-screen justify-between  flex flex-col shadow-lg bg-white overflow-hidden py-16 px-8'>
                <button onClick={toggleSidebar} className='absolute right-0'>
                    {isSidebarExpanded ? <HiChevronLeft size={30} className='text-[#1F1053] items-center justify-center h-screen pb-40 transition-all '/> : <HiChevronRight size={30} className='text-red-500 items-center justify-center h-screen pb-40 transition-all '/> }
                </button>
                   
                    <div className='gap-12 flex flex-col'>
                        <div className='flex space-x-2 overflow-hidden truncate w-full'> 
                            {isAuthenticated ?
                            <>
                            <div className='text-indigo-500 bg-[#FFD045] items-center text-center text-2xl font-semibold p-4 justify-center flex rounded-full'>
                                    <p className='bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] text-transparent bg-clip-text'> {initials} </p>
                                </div>
                                {isSidebarExpanded && (
                                <div className='truncate overflow-hidden'>
                                    <p className='truncate overflow-hidden bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] text-transparent bg-clip-text font-medium '>{fullName}</p>
                                    <p className='truncate overflow-hidden bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] text-transparent bg-clip-text font-light'>{user?.email}</p>
                                </div>
                                )}
                            </>
                            :
                            <>
                            <div className='flex justify-between mx-auto w-full'>
                                <button className="py-4 px-8 bg-[#FFD045] rounded font-semibold"><a href="/login" className='flex gap-4 justify-center'><HiArrowRightEndOnRectangle size={25} />{isSidebarExpanded && <span className='w-40'>Login</span>}
                                {!isSidebarExpanded && (
                                        <span className="absolute whitespace-nowrap my-2 px-2 py-2 pl-8 text-xs rounded-sm  opacity-0 hover:opacity-80 transition-opacity delay-1000 duration-1000 ease-in text-white bg-black">
                                            Login
                                        </span>
                                    )}
                                    </a>
                               
                                    </button>
                            </div>
                        </>}
                        </div>

                        <div>
                            <Link href="/slide/dashboard">
                                <div className={`flex items-center gap-4 my-2 p-5 pl-6 rounded ${activeButton === 'dashboard' ? 'text-[#FFD045] bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8]' : 'hover:bg-indigo-200 hover:text-white hover:transition-all hover:cursor-pointer text-[#0A1F79]'}`}
                                    onClick={() => handleButtonClick('dashboard')}>< HiClock size={25} className=''/> {isSidebarExpanded && <span>Dashboard</span>}
                                    {!isSidebarExpanded && (
                                        <span className="absolute whitespace-nowrap my-2 px-2 py-2 pl-8 text-xs rounded-sm  opacity-0 hover:opacity-80 transition-opacity delay-1000 duration-1000 ease-in text-white bg-black">
                                            Dashboard
                                        </span>
                                    )}
                                </div>
                            </Link>
                            <Link href="/slide/draft">
                                <div className={`flex items-center gap-4 my-2 p-5 pl-6 rounded ${activeButton === 'draft' ? 'text-[#FFD045] bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8]' : 'hover:bg-indigo-200 hover:text-white hover:transition-all hover:cursor-pointer text-[#0A1F79]'}`}
                                    onClick={() => handleButtonClick('draft')}><HiPencilSquare size={25}/>{isSidebarExpanded && <span>Draft</span>}
                                    {!isSidebarExpanded && (
                                        <span className="absolute whitespace-nowrap my-2 px-2 py-2 pl-8 text-xs rounded-sm  opacity-0 hover:opacity-80 transition-opacity delay-1000 duration-1000 ease-in-out text-white bg-black">
                                            Draft
                                        </span>
                                    )}
                                </div>
                            </Link>
                            <Link href="/slide/slide-templates">
                                <div className={`flex items-center gap-4 my-2 p-5 pl-6 rounded ${activeButton === 'template' ? 'text-[#FFD045] bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8]' : 'hover:bg-indigo-200 hover:text-white hover:transition-all hover:cursor-pointer text-[#0A1F79]'}`}
                                    onClick={() => handleButtonClick('template')}><HiMiniRectangleGroup size={25} /> {isSidebarExpanded && <span>Template</span>}
                                    {!isSidebarExpanded && (
                                        <span className="absolute whitespace-nowrap my-2 px-2 py-2 pl-8 text-xs rounded-sm  opacity-0 hover:opacity-80 transition-opacity delay-1000 duration-1000 ease-in-out text-white bg-black">
                                            Template
                                        </span>
                                    )}
                                </div>
                            </Link>
                            <Link href="/slide/archive">
                                <div className={`flex items-center gap-4 my-2 p-5 pl-6 rounded ${activeButton === 'archive' ? 'text-[#FFD045] bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8]' : 'hover:bg-indigo-200 hover:text-white hover:transition-all hover:cursor-pointer text-[#0A1F79]'}`}
                                    onClick={() => handleButtonClick('archive')}><HiMiniTrash size={25} /> {isSidebarExpanded && <span>Archive</span>}
                                    {!isSidebarExpanded && (
                                        <span className="absolute whitespace-nowrap my-2 px-2 py-2 pl-8 text-xs rounded-sm  opacity-0 hover:opacity-80 transition-opacity delay-1000 duration-1000 ease-in-out text-white bg-black">
                                            Archive
                                        </span>
                                    )}
                                </div>
                            </Link>
                            <Link href="/slide/slide-settings">
                                <div className={`flex items-center gap-4 my-2 p-5 pl-6 rounded ${activeButton === 'settings' ? 'text-[#FFD045] bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8]' : 'hover:bg-indigo-200 hover:text-white hover:transition-all hover:cursor-pointer text-[#0A1F79]'}`}
                                    onClick={() => handleButtonClick('settings')}><HiCog6Tooth size={25} />{isSidebarExpanded && <span>Settings</span>}
                                    {!isSidebarExpanded && (
                                        <span className="absolute whitespace-nowrap my-2 px-2 py-2 pl-8 text-xs rounded-sm  opacity-0 hover:opacity-80 transition-opacity delay-1000 duration-1000 ease-in-out text-white bg-black">
                                            Settings
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        { isAuthenticated? 
                        <>
                        <p className='mb-4 bg-gradient-to-r from-[#1F1053] via-[#0A1F79] to-[#5D05C8] text-transparent bg-clip-text'>2 free {isSidebarExpanded && <span> zlides left</span>}</p> 
                         <div className='border-black border-t pt-4 w-3/4'>
                            <button onClick={handleLogout} className='flex items-center gap-4 my-2 p-5 pl-6 rounded text-white bg-red-700 hover:bg-red-400 hover:text-white hover:transition-all hover:cursor-pointer'><FaPowerOff size={25} />{isSidebarExpanded && <span>Logout</span>}
                            </button>
                        </div> 

                        </> : <> 
                        </>}
                      
                    </div>
                    

                </div>
            </nav>
        </div>
    );
}
