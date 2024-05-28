'use client';
import { NavbarHorizontal } from '@/components/common'
import SearchBar from '@/components/common/SearchBar';
import Link from 'next/link';
import Image from 'next/image';
import placeholder from  '../../../../public/images/placeholder.png'
import React from "react";
import ComingSoonModal from '@/components/common/ComingSoonModal';


export default function Archive() {

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
              <div className='mb-8'>
                <p className='text-4xl font-bold mb-4'>Archive</p>
                  <SearchBar/>
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
              
        
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
