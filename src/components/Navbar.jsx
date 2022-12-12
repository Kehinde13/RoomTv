import React, { useState } from 'react'
import { FaAlignCenter, FaAngleDown, FaTimes, FaPizzaSlice, FaAngleUp } from 'react-icons/fa'
import pic from '../images/profile.jpg'


function Navbar() {
  
  const [nav, setNav] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  function toggleDrop() {
    setDropdown(!dropdown)
  }

  function toggleNav() {
    setNav(!nav)
  }

  return (
    <nav className='sticky top-0 flex justify-around text-center z-50 bg-inherit shadow-lg dark:bg-slate-900'>
        <div 
         onClick={toggleNav}
         className='my-3 mx-3 md:hidden'>
          <FaAlignCenter />
        </div>
        
        <div className='my-3 flex space-x-2 mx-5'>
          <FaPizzaSlice/>
          <h1>RoomTV</h1>
        </div>
        
        <ul className='my-3 md:flex space-x-20 mr-20 hidden cursor-pointer'>
            <li className='flex space-x-5' onClick={toggleDrop}>
              Categories 
              {
               dropdown ? <FaAngleUp /> : <FaAngleDown />
              } 
              </li>
            <li>Movies</li>
            <li>Series</li>
            <li>Contact</li>
            <li>About</li>
        </ul>

      
         <img src={pic} alt="profile-pic" 
         className='my-1 w-8 rounded-2xl border border-blue-600 self-center' 
         />
         
         { nav && 
         <div className='absolute text-left left-0 pt-5 px-10 
         space-y-3 bg-white h-[600px] w-64 cursor-pointer dark:bg-slate-800'>
             <div 
             onClick={toggleNav}
             className='mb-10'>
              <FaTimes />
             </div>
             <ul className='space-y-5'>
                <li className='flex space-x-5' onClick={toggleDrop}>
                  Categories 
                  {
                   dropdown ? <FaAngleUp /> : <FaAngleDown />
                  }
                  
                </li>
                <li>Movies</li>
                <li>Series</li>
                <li>Contact</li>
                <li>About</li>
             </ul>
         </div>

         }

         { dropdown &&
           <div className='absolute bg-gray-300 top-24 left-10 z-50 w-48 cursor-pointer
           dark:text-black md:left-72 md:top-12 rounded-md'>
              <ul className='space-y-5 p-3'>
                <li>Crime</li>
                <li>Action</li>
                <li>Anime</li>
                <li>Fantasy</li>
                <li>Kids & Family</li>
                <li>Romance</li>
              </ul>
           </div>
          
         }
       
        
    </nav>
  )
}

export default Navbar