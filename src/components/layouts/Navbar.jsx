import React, { useRef } from 'react'
import { closeButton, hamburger, logo } from '../../assets/img';
import Language from '../Language';



export const Navbar = () => {

 // navbarToggle functionality
 const navRef = useRef();
 const showNavbar = () => {
  navRef.current.classList.toggle(
   "responsive_nav"
  );
 };

 return (
  <div className='px-0 fixed z-30'>
   <p className='text-sm h-[34px] text-center py-1 md:text-lg bg-[#130524] backdrop-blur-[13.5px] text-white tracking-[1.4px] md:tracking-[1.8px] w-screen pl-10'>IF THIS IS AN EMERGENCY - <strong>CALL 911</strong></p>
   <div className=' items-center px-4 pt-6 md:bg-[#2B0756] bg-none md:pt-0'>
    <div className='flex items-center justify-between px-4 xl:px-36'>
     <div className='languageSec'>
      <Language />
     </div>

     <a href='/' className='cursor-pointer w-[160px] md:w-[386px] md:h-[66px]'>
      <img src={logo} alt="" />
     </a>


     <div className="header p-0" >
      <nav ref={navRef} className="flex flex-col left-0 fixed -top-full h-full w-full items-center justify-center duration-[1s] gap-12 bg-no-repeat bg-right bg-cover md:bg-center">

       <div className="absolute top-5 md:top-14 px-4 md:px-4 lg:px-36 flex items-center justify-between w-full">
        <div className='text-white'>
         <Language />
        </div>

        {/* logo */}
        <a href='/' className='cursor-pointer w-[160px] h-[30px] md:w-[386px] md:h-[66px]'>
         <img src={logo} alt="" />
        </a>

        <button className="nav-btn nav-close-btn cursor-pointer " onClick={showNavbar} >
         <img src={closeButton} alt="" className='w-[30px] md:w-[44px]' />
        </button>

       </div>

       <ul className='text-center absolute md:relative top-24 mb-16'>
        <li className='py-5'>
         <a className="text-[#FFEB00] tracking-[1.92px] nav-link text-[32px] font-Rajdhani font-medium" href="#details" onClick={showNavbar}>The Details</a>
        </li>
        <li className='py-5'>
         <a className="text-[#FFEB00] tracking-[1.92px] nav-link text-[32px] font-Rajdhani font-medium" href="#checklist" onClick={showNavbar}>The Checklist</a>
        </li>
        <li className='py-5'>
         <a className="text-[#FFEB00] tracking-[1.92px] nav-link text-[32px] font-Rajdhani font-medium" href="#unpack" onClick={showNavbar}>Unpack Your Checklist</a>
        </li>
       </ul>
       <button className="mt-12 border border-[#E5AEEE] border-solid rounded-[10px] py-3.5 px-0 font-Rajdhani font-bold text-[20px] text-[#FFC1E5] btn-shadow absolute bottom-10 md:bottom-0 md:relative w-[310px] mx-auto">START THE RESCUE PROCESS</button>


      </nav>
      <button
       className="nav-btn text-gray-500 cursor-pointer"
       onClick={showNavbar}>
       <img src={hamburger} alt="" className='' />
      </button>
     </div>
    </div>

   </div>
  </div>
 );
};

export default Navbar;