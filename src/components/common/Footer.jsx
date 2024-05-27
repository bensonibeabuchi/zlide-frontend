import React from 'react'
import Image from 'next/image'
import { FaRegCopyright, FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaInstagram  } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='w-full mx-auto items-center justify-center bottom-0 relative bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% text-white p-20'>
      <div className='hidden md:block'>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 px-24 mb-4'>
          <div>
            <Image src="/images/zlide-logo.png" alt="Zlide logo" width={125} height={290} />
          </div>
          <div>
            <p className='text-xl font-semibold'>Contact</p>
            <ul className='text-sm space-y-8 my-4'>
              <li>42 Montgomery Road Yaba,</li>
              <li>Lagos Nigeria</li>
              <li>info@zlide.com</li>
              <li>(+234) 703 6188 527</li>
              <li>Send an email</li>
            </ul>
          </div>
          <div>
          <p className='text-xl font-semibold'>Company</p>
            <ul className='text-sm space-y-8 my-4'>
              <li>About Us</li>
              <li>Services</li>
              <li>contact Us</li>
              <li>FAQ</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
          <p className='text-xl font-semibold'>Legal</p>
            <ul className='text-sm space-y-8 my-4'>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Legal</li>
            </ul>
          </div>
          <div className='w-96'>
            <p className='text-xl font-semibold'>Subscribe</p>
            <p className='text-sm mb-4'>Stay up to date with our newsletter</p>
            <form action="" className='space-x-4 flex'>
              <input type="email" name="" id="" placeholder='Email Address' className='rounded px-8' />
              <button type="submit" className='bg-[#FFD045] rounded-md p-4 text-[#1f1073]'>Subscribe</button>
            </form>
            <p className='text-xs font-light py-4 text-gray-100'>By subscribing, you agree to our Privacy Policy and consent to receive updates from us.</p>
          </div>

        </div>
        <div className='border-t p-4 flex mt-16 justify-between items-center'>
          <div>
            <p className='flex items-center gap-2'>
              <FaRegCopyright/> 2024 Zlide. All rights Reserved
            </p>
          </div>
          <div>
            <ul className='flex gap-4'>
              <li><FaFacebook size={25}/> </li>
              <li><FaInstagram size={25}/> </li>
              <li><FaLinkedin size={25}/> </li>
              <li><FaTwitter size={25}/> </li>
              <li><FaYoutube size={25}/> </li>
            </ul>

          </div>
        </div>
      </div>
      {/* Mobile screen */}
      <div className='md:hidden'>
      <div className='grid mb-4 space-y-12'>
          <div>
            <Image src="/images/zlide-logo.png" alt="Zlide logo" width={125} height={290} />
          </div>
          <div className='flex space-x-8'>
            <div>
              <p className='text-xl font-semibold'>Contact</p>
              <ul className='text-sm space-y-4 my-2'>
                <li>42 Montgomery Road Yaba,</li>
                <li>Lagos Nigeria</li>
                <li>info@zlide.com</li>
                <li>(+234) 703 6188 527</li>
                <li>Send an email</li>
              </ul>
            </div>
            <div>
            <p className='text-xl font-semibold'>Company</p>
              <ul className='text-sm space-y-4 my-2'>
                <li>About Us</li>
                <li>Services</li>
                <li>contact Us</li>
                <li>FAQ</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div>
            <p className='text-xl font-semibold'>Legal</p>
            <ul className='text-sm space-y-4 my-2'>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Legal</li>
            </ul>
          </div>
          <div>
            <p className='text-xl font-semibold'>Subscribe</p>
            <p className='text-sm mb-4'>Stay up to date with our newsletter</p>
            <form action="" className='space-y-4 flex flex-col'>
              <input type="email" name="" id="" placeholder='Email Address' className='rounded px-8 py-4' />
              <button type="submit" className='bg-[#FFD045] rounded-md p-4 text-[#1f1073]'>Subscribe</button>
            </form>
            <p className='text-xs font-light py-4 text-gray-100'>By subscribing, you agree to our Privacy Policy and consent to receive updates from us.</p>
          </div>

        </div>
        <div className='border-t p-8 space-y-8 flex flex-col mt-16 justify-center items-center text-center'>
        <div>
            <ul className='flex gap-4'>
              <li><FaFacebook size={25}/> </li>
              <li><FaInstagram size={25}/> </li>
              <li><FaLinkedin size={25}/> </li>
              <li><FaTwitter size={25}/> </li>
              <li><FaYoutube size={25}/> </li>
            </ul>
          </div>
          <div className='justify-center flex flex-col'>
            <p className='flex items-center gap-1 justify-center'>
              <FaRegCopyright size={20}/> 2024 Zlide.
            </p>
            <p className='text-center'>All rights Reserved</p>
          </div>
       
        </div>

      </div>


    </div>
  )
}
