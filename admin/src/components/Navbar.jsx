import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center px-[3%] justify-between'>
        <img src={assets.logo} width="200" height="150" alt="" />
        <button onClick={()=>setToken('')} className='bg-[#1F1F1F] text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar