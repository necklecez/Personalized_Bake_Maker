import React from 'react'
import { FaFacebookF, FaInstagram, FaXTwitter, FaLine, FaPhone } from "react-icons/fa6";
//import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid gap-10 my-0 mt-20 text-sm'>


        <div> 
        <p className="text-xl font-medium mb-5 text-center ">CONTACT US</p>
          <div className="flex justify-center mb-5 gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-blue-600 text-2xl hover:text-blue-800" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 text-2xl hover:text-pink-700" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-black text-2xl hover:text-gray-700" />
              </a>
              <a href="https://line.me" target="_blank" rel="noopener noreferrer">
                <FaLine className="text-green-500 text-2xl hover:text-green-700" />
              </a>
              <a href="tel:+0696936359"> {/*กดแล้วโทรได้เลย*/}
              <FaPhone className="text-gray-700 text-2xl hover:text-gray-800" />
              </a>

            </div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Personalized Bake Maker. All Right Reserved.</p>
          
          </div>

        </div>

    </div>
  )
}

export default Footer
