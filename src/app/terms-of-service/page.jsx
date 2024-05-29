import { Footer, Navbar } from '@/components/common'
import React from 'react'

export default function Privacy() {
return (
<div className='bg-[#F4F4F4] text-xl'>
  <Navbar />
  <div
    className='bg-gradient-to-br from-[#1f1073] from-10% via-[#0A1F79] via-30% to-[#5D05C8] to-90% text-center items-center md:pt-64 pt-40 pb-32 px-8 md:gap-8 flex flex-col mx-auto md:h-[560px]'>
    <p className='text-white md:text-8xl text-3xl font-bold'>Terms of Service </p>
    <p className='text-white md:text-lg text-sm text-center mt-4 px-8'>Terms of Service copy here</p>

  </div>

  <div className='bg-white rounded-md max-w-7xl p-16 mx-auto text-justify items-center relative -top-20'>
    <p>
    These Terms of Service (&quot;Terms&quot;) govern your use of the website and services provided by Zlide (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our website and services, you agree to comply with these Terms. If you do not agree with these Terms, please do not access or use our website and services</p>

    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
      1. Acceptance of Terms:
      </p>
      <p>
      By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms. These Terms constitute a legally binding agreement between you and [Website Name].
      </p>

    </div>

    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
      2. Use of services:
      </p>
      <p>
      You agree to use our website and services solely for lawful purposes and in accordance with these Terms. You may not use our website and services for any illegal or unauthorized purpose, including but not limited to copyright infringement or violation of intellectual property rights.      </p>

    </div>
  
    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
      3. User Accounts:
      </p>
      <p>
      You may be required to create a user account to access certain features or services on our website. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.     </p>

    </div>

    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
      4. Intellectual Property
      </p>
      <p>
      All content, materials, and features available on our website and services, including but not limited to text, graphics, logos, images, and software, are owned or licensed by us and are protected by copyright, trademark, and other intellectual property laws. You may not modify, reproduce, distribute, or create derivative works based on our content without our prior written consent.     </p>

    </div>
  
    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
      5. Privacy
      </p>
      <p>
      Your privacy is important to us. Please review our Privacy Policy [link to Privacy Policy] to understand how we collect, use, and disclose your personal information when you access or use our website and services.     </p>

    </div>

    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
      6. Termination
      </p>
      <p>
      We reserve the right to suspend or terminate your access to our website and services at any time and for any reason, without prior notice or liability. Upon termination, your rights to access and use our website and services will cease immediately.   </p>

    </div>
  
    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
      7. Limitation of liability
      </p>
      <p>
      To the fullest extent permitted by applicable law, we will not be liable to you or any third party for any direct, indirect, incidental, consequential, or punitive damages arising out of or relating to your use of our website and services, even if we have been advised of the possibility of such damages.  </p>

    </div>

     
    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
      8. Change to terms
      </p>
      <p>
      We reserve the right to update or modify these Terms at any time and for any reason without prior notice. Any changes or modifications will be effective immediately upon posting the revised Terms on our website. Your continued use of our website and services after the posting of the revised Terms constitutes your acceptance of such changes. </p>

    </div>

    <div className='my-10'>
      <p className='mb-6 font-bold text-[#1f1073]'>
      9. Governing Law
      </p>
      <p>
      These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions. </p>

    </div>



  </div>

  <Footer />

</div>
)
}