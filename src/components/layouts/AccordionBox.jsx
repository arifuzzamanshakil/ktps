import React from 'react';
import { medicine4 } from '../../assets/img';
import data from '../../data';

const AccordionBox = () => {
 return (
  <div className='pt-5'>
   {
    data.map((getData, index) => (
     <div className='flex flex-col gap-5'>
      <div className='flex gap-8 justify-between'>
       <div className='flex items-center bg-[#FFFFFF1A] w-[480px] rounded-md h-[70px]'>
        <img src={medicine4} alt="" />
        <p className='text-xl -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{getData.unpack.mediName1.en}</p>
       </div>

       <div className='flex items-center bg-[#FFFFFF1A] w-[480px] rounded-md h-[70px]'>
        <img src={medicine4} alt="" />
        <p className='text-xl -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{getData.unpack.mediName2.en}</p>
       </div>
      </div>

      <div className='flex gap-8 justify-between'>
       <div className='flex items-center bg-[#FFFFFF1A] w-[480px] rounded-md h-[70px]'>
        <img src={medicine4} alt="" />
        <p className='text-xl -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{getData.unpack.mediName3.en}</p>
       </div>

       <div className='flex items-center bg-[#FFFFFF1A] w-[480px] rounded-md h-[70px]'>
        <img src={medicine4} alt="" />
        <p className='text-xl -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{getData.unpack.mediName4.en}</p>
       </div>
      </div>

      <div className='flex gap-8 justify-between'>
       <div className='flex items-center bg-[#FFFFFF1A] w-[480px] rounded-md h-[70px]'>
        <img src={medicine4} alt="" />
        <p className='text-xl -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{getData.unpack.mediName5.en}</p>
       </div>

       <div className='flex items-center bg-[#FFFFFF1A] w-[480px] rounded-md h-[70px]'>
        <img src={medicine4} alt="" />
        <p className='text-xl -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{getData.unpack.mediName6.en}</p>
       </div>
      </div>

      <div className='flex gap-8 justify-between'>
       <div className='flex items-center bg-[#FFFFFF1A] w-[480px] rounded-md h-[100px]'>
        <img src={medicine4} alt="" />
        <p className='text-xl -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{getData.unpack.mediName7.en}</p>
       </div>

       <div className='flex items-center bg-[#FFFFFF1A] w-[480px] rounded-md h-[100px]'>
        <img src={medicine4} alt="" />
        <p className='text-xl -ml-5 text-white font-Inter font-normal drop-shadow-8xl'>{getData.unpack.mediName8.en}</p>
       </div>
      </div>

      <p className='text-lg pt-5 text-white font-Inter font-normal drop-shadow-8xl'>{getData.unpack.mediName9.en}</p>

     </div>

    ))
   }
  </div>
 );
};


export default AccordionBox;