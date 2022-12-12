import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <div className='mt-5'>
        <hr />
        <div className='px-10 mt-10 pb-2'>
           <div className='flex space-x-5 mb-5'>
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaEnvelope />
        </div>
        <p>
            Copyright &copy; 2022 RoomTV <br />
            Trademark Policy
        </p> 
        </div>
        

    </div>
  )
}

export default Footer