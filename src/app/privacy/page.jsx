import { Footer, Navbar } from '@/components/common'
import React from 'react'

export default function Privacy() {
return (
<div className='bg-[#F4F4F4] text-xl'>
  <Navbar />
  <div
    className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% text-center items-center md:pt-64 pt-40 pb-32 px-8 md:gap-8 flex flex-col mx-auto md:h-[560px]'>
    <p className='text-white md:text-8xl text-3xl font-bold'>Privacy policy </p>
    <p className='text-white md:text-lg text-sm text-center mt-4 px-8'>Privacy policy copy here</p>

  </div>

  <div className='bg-white rounded-md max-w-7xl p-16 mx-auto text-justify items-center relative -top-20'>
    <p>
    This <span className='font-bold text-[#1f1073]'> Privacy Policy </span> explains how Zlide (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your personal information when you access or use our website and services.
    </p>

    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
        Information We Collect
      </p>
      <ul className='list-disc space-y-4 ml-12'>
        <li>Personal Information: When you create an account or use our services, we may collect personal information such as your name, email address, and contact information.</li>
        <li>Usage Data: We may collect usage data such as your IP address, browser type, device information, and interactions with our website and services.</li>
        <li>Cookies: We use cookies and similar tracking technologies to enhance your browsing experience, analyze usage patterns, and personalize content and advertisements.</li>
      </ul>

    </div>

    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
        How we use your information
      </p>
      <ul className='list-disc space-y-4 ml-12'>
        <li>Provide Services: We use your personal information to provide, maintain, and improve our website and services, including generating presentations based on your text prompts.</li>
        <li>Communications: We may use your contact information to communicate with you about your account, respond to inquiries, and send promotional materials and updates.</li>
        <li>Analytics: We use usage data and cookies to analyze trends, track user activity, and gather demographic information to improve our website and services.</li>
      </ul>

    </div>

    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
        Data Security
      </p>
      <p className=''>
      We are committed to protecting the security of your personal information. We implement industry-standard security measures to safeguard your data against unauthorized access, disclosure, alteration, or destruction.
      </p>

    </div>

    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
        Data Retention
      </p>
      <p className=''>
      We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.
      </p>

    </div>

    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
        Third-Party Services
      </p>
      <p className=''>
      We may use third-party services, such as analytics providers and advertising networks, that may collect and process your personal information in accordance with their respective privacy policies. We are not responsible for the privacy practices of these third-party services.
      </p>

    </div>


    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
        Your Rights
      </p>
      <p className=''>
      You have the right to access, update, or delete your personal information at any time. You may also opt-out of receiving promotional communications from us by following the instructions provided in the communication.
      </p>

    </div>


    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
      Changes to Privacy Policy      </p>
      <p className=''>
      We reserve the right to update or modify this Privacy Policy at any time and for any reason without prior notice. Any changes or modifications will be effective immediately upon posting the revised Privacy Policy on our website.
      </p>

    </div>

    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
      Contact Us     </p>
      <p className=''>
      If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at zlidementorled@gmail.com
      </p>

    </div>

  </div>

  <Footer />

</div>
)
}