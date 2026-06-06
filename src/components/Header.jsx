import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex flex-col justify-center items-center h-screen text-center'>
        <h1 className='text-gray-800 font-extrabold text-4xl mb-4'>Shopping Made Easy!</h1>
        <p className='text-gray-800 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Natus laudantium error dolorem voluptatibus, <br />numquam saepe exercitationem eligendi illo libero officiis?</p>
        <button className='bg-gray-800 text-white py-4 px-8 text-sm mt-12 rounded-md'><Link to={'/product-list'}>See Products</Link></button>
    </div>
  )
}

export default Header