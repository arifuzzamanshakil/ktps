import React from 'react';
import data from '../../data';

const Checkbox = () => {
 return (
  <div>
   {
    data.map((getData, index) => (
     <div className='flex gap-12 flex-wrap mx-auto '>
      <div className="flex border border-[#E5AEEE] rounded-xl items-start lg:items-center sm:px-8 px-5 py-4 md:w-full xl:w-[560px] lg:w-[485px] gap-3 md:gap-5 lg:justify-center align-middle">
       <label className="checkbox mt-1 lg:mt-0">
        <input type="checkbox" />
        <span className="checkmark"></span>
       </label>
       <p className=' font-Inter font-semibold md:text-xl text-base text-white drop-shadow-9xl'>
        {getData.checklist.checkbox1.en}
       </p>
      </div>

      <div className="flex border border-[#E5AEEE] rounded-xl items-start lg:items-center sm:px-8 px-5 py-4 md:w-full xl:w-[560px] lg:w-[485px] gap-3 md:gap-5 lg:justify-center align-middle">
       <label className="checkbox mt-1 lg:mt-0">
        <input type="checkbox" />
        <span className="checkmark"></span>
       </label>
       <p className=' font-Inter font-semibold md:text-xl text-base text-white drop-shadow-9xl'>
        {getData.checklist.checkbox2.en}
       </p>
      </div>

      <div className="flex border border-[#E5AEEE] rounded-xl items-start lg:items-center sm:px-8 px-5 py-4 md:w-full xl:w-[560px] lg:w-[485px] gap-3 md:gap-5  lg:justify-center align-middle">
       <label className="checkbox mt-1 md:mt-0">
        <input type="checkbox" />
        <span className="checkmark"></span>
       </label>
       <p className=' font-Inter font-semibold md:text-xl text-base text-white drop-shadow-9xl'>
        {getData.checklist.checkbox3.en}
       </p>
      </div>

      <div className="flex border border-[#E5AEEE] rounded-xl items-start lg:items-center sm:px-8 px-5 py-4 md:w-full xl:w-[560px] lg:w-[485px] gap-3 md:gap-5 lg:justify-center align-middle">
       <label className="checkbox mt-1 md:mt-0">
        <input type="checkbox" />
        <span className="checkmark"></span>
       </label>
       <p className=' font-Inter font-semibold md:text-xl text-base text-white drop-shadow-9xl'>
        {getData.checklist.checkbox4.en}
       </p>
      </div>

      <div className="flex border border-[#E5AEEE] rounded-xl items-start lg:items-center sm:px-8 px-5 py-4 w-full gap-3 md:gap-5 lg:justify-center align-middle">
       <label className="checkbox mt-1 lg:mt-0">
        <input type="checkbox" />
        <span className="checkmark"></span>
       </label>
       <p className=' font-Inter font-semibold md:text-xl text-base text-white drop-shadow-9xl'>
        {getData.checklist.checkbox5.en}
       </p>
      </div>
     </div>

    ))
   }

  </div>
 );
};

export default Checkbox;