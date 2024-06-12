'use client';
import { NavbarHorizontal } from '@/components/common'
import SearchBar from '@/components/common/SearchBar';

import React, { useState, useEffect, useRef } from "react";

import ComingSoonModal from '@/components/common/ComingSoonModal';


export default function Settings() {

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
