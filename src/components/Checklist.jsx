import React from 'react'
import data from '../data';
import Checkbox from './layouts/Checkbox';
import BtnBox from './layouts/BtnBox';

const Checklist = () => {
 return (
  <div className="h-full bg-cover bg-no-repeat bg-center pt-24">
   {
    data.map((getData, index) => (

     <div className="heading">
      <h2 className='text-5xl font-Rajdhani font-semibold tracking-[4.8px] drop-shadow-5xl text-white m-auto text-center pt-24'>{getData.checklist.pageTitle.en}</h2>
      <p className='text-xl text-center text-white font-Inter font-medium drop-shadow-9xl pt-5 '>{getData.checklist.subTitle.en}</p>
     </div>
    ))
   }
   <div className='mx-auto w-[1170px] py-20'>
    <Checkbox />
   </div>

   <div className='mx-auto w-[1170px] py-10'>
    <BtnBox/>
   </div>

  </div>
 );
};

export default Checklist;