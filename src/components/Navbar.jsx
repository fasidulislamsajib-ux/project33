import React from 'react'

function Navbar() {
  return (
   <nav className=''>
    <div className="container mx-auto ">
  <div className=" p-4 flex gap-5 justify-between ">
    <div>
      <img src="./public/images/logo1.svg" />
    </div>
    <div className="flex-1  ">
      <ul classname="  flex items-center justify-center">  
        <li className=' flex gap-6.5 font-bold  '>
          <a href="#">  </a>
          <a href="#">For You </a>
          <a href="#">Discover </a>
          <a href="#">Livestreams </a>
          <a href="#">Hire </a>
          <a href="#">Jobs</a>
        
        </li>
      </ul>
    </div>
    <div className='flex  gap-6 '>

      <button className='px-2   font-medium bg-gray-300 text-blue-700 rounded-2xl cursor-pointer'>Log In</button>
      <button className='px-2 py-1 font-medium  bg-blue-500 text-white rounded-2xl cursor-pointer'>Sign Up</button>
      <div className=' border-amber-200'>

      </div>
      
     <button className=' px-2 py-2.5 cursor-pointer w-30 flex items-center justify-center rounded-2xl  border-amber-100'>
         <img src="./public/images/logo3.png" alt="logo" />
         </button>
     <button className='
     px-2 py-2.5 cursor-pointer w-30 flex items-center justify-center rounded-2xl  border-amber-100
     
     '>
         <img src="./public/images/logo2.png" alt="logo" />
         </button>
     
      
    </div>
  </div>
  </div>
</nav>

  )
}

export default Navbar
