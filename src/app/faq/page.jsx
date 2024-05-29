'use client';
import { Footer, Navbar } from '@/components/common'
import { useState } from 'react';
import React from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { FiMinusCircle } from "react-icons/fi";




export default function Faq() {
    const faqs = [
        {
            question: 'How does the AI-powered text prompt feature work?',
            answer: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
        },
        {
            question: 'What is the purpose of this website?',
            answer: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
        },
        {
            question: 'Can I customize the design of my presentations?',
            answer: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
        },
        {
            question: 'Do you offer pre-designed templates for presentations?',
            answer: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
        },
        {
            question: 'Is collaboration possible on this platform?',
            answer: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
        },
        {
            question: 'Can I integrate this platform with other tools or applications?',
            answer: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
        },
        {
            question: 'How secure is my data on this platform?',
            answer: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
        },
        {
            question: 'Do you offer customer support?',
            answer: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
        },
        {
            question: 'Is there a free trial available?',
            answer: 'This website is designed to help users easily create professional presentations using AI-powered text prompts and design assistance tools.'
        },
        {
            question: 'What happens to my presentations after the trial period ends?',
            answer: 'Your presentations are securely stored on our platform, even after the trial period ends. If you choose not to subscribe, you\'ll still have access to your presentations, but you won\'t be able to create new ones or access premium features.'
        },
    ]
    
      const [openIndex, setOpenIndex] = useState(null);
    
      const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

      
  return (
    <>
    <Navbar/>
    <div className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% text-center items-center md:pt-64 pt-40 pb-32 px-8 md:gap-8 flex flex-col mx-auto md:h-[560px]'>
      <p className='text-white md:text-8xl text-3xl font-bold'>Frequently Asked Questions </p>
      <p className='text-white md:text-lg text-sm text-center mt-4 px-8'>Got questions? We are more than happy to assist you 😉</p>
    </div>

    <div className='max-w-7xl mx-auto items-center justify-center p-16 my-8 mb-16'>

    {faqs.map((faq, index) => (
            <div key={index}>
              <div className="flex items-center px-4 justify-between">
                <p className="md:text-xl text-base font-medium">{faq.question}</p>
                <button onClick={() => toggleDropdown(index)} className="flex cursor-pointer px-6 py-4 text-center items-center ">
                  {openIndex === index ? <FiMinusCircle className="h-8 w-8 text-[#1f1073]" /> : <IoMdAddCircle className="h-8 w-8 text-[#1f1073]" />}
                </button>
              </div>
              {openIndex === index && (
                <div className="border-l border-[#1f1073] ml-8 p-5">
                  <p className="md:text-base text-sm p-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}

    </div>

    <div className='max-w-7xl mx-auto space-y-4 items-center justify-center p-16 my-8 mb-16'>
        <h2 className='text-[#1f1073] text-4xl text-center font-semibold'>Can&apos;t find what you are looking for?</h2>
        <p className='text-center text-lg max-w-3xl mx-auto'>
        If your question isn&apos;t answered above or in the rules then you can contact us using the form below. We will reply to all queries as soon as we can.
        </p>
        <form action="" className='flex flex-col'>
            <label htmlFor="name" className='p-2'>Name:</label>
            <input type="text" name="name" id="name" className='w-full bg-gray-200 p-4 rounded-md mb-8 mt-2' />

            <label htmlFor="email" className='p-2'>Email:</label>
            <input type="email" name="email" id="email" className='w-full bg-gray-200 p-4 rounded-md mb-8 mt-2' />

            <label htmlFor="textarea" className='p-2'>Your Question:</label>
            <textarea name="textarea" id="textarea" className='w-full h-56 bg-gray-200 rounded-md'/>
        </form>
    </div>

    <Footer />

    </>
  )
}
