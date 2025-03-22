import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'


const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-25'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-5'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
         
          <p className=' text-gray-500'>123 Anywhere St.,<br /> Any City, State, Country 45678</p>
          <p className=' text-gray-500'>Tel: 0611111111 <br /> Email: admin@somemail.com</p>
          <p className=' text-gray-500'>FOLLOW AND TALK WITH US ON SOCIAL MEDIA<br />(Click the Social Media icon below to contact us)</p>
 
        </div>
      </div>

    
    </div>
  )
}

export default Contact
