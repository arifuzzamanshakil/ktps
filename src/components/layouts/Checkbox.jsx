import React from 'react';
import data from '../../data';

const Checkbox = () => {
 return (
  <div>
   {
    data.map((getData, index) => (
     <div className='flex gap-12 flex-wrap'>
      <div className="flex border border-[#E5AEEE] rounded-xl items-center px-8 py-4  w-[560px] gap-5 justify-center align-middle">
       <label className="checkbox">
        <input type="checkbox" />
        <span className="checkmark"></span>
       </label>
       <p className=' font-Inter font-semibold text-xl text-white drop-shadow-9xl'>
        {getData.checklist.checkbox1.en}
       </p>
      </div>

      <div className="flex border border-[#E5AEEE] rounded-xl items-center px-8 py-4 w-[560px] gap-5 justify-center align-middle">
       <label className="checkbox">
        <input type="checkbox" />
        <span className="checkmark"></span>
       </label>
       <p className=' font-Inter font-semibold text-xl text-white drop-shadow-9xl'>
        {getData.checklist.checkbox2.en}
       </p>
      </div>

      <div className="flex border border-[#E5AEEE] rounded-xl items-center px-8 py-4  w-[560px] gap-5 justify-center align-middle">
       <label className="checkbox">
        <input type="checkbox" />
        <span className="checkmark"></span>
       </label>
       <p className=' font-Inter font-semibold text-xl text-white drop-shadow-9xl'>
        {getData.checklist.checkbox3.en}
       </p>
      </div>

      <div className="flex border border-[#E5AEEE] rounded-xl items-center px-8 py-4  w-[560px] gap-5 justify-center align-middle">
       <label className="checkbox">
        <input type="checkbox" />
        <span className="checkmark"></span>
       </label>
       <p className=' font-Inter font-semibold text-xl text-white drop-shadow-9xl'>
        {getData.checklist.checkbox4.en}
       </p>
      </div>

      <div className="flex border border-[#E5AEEE] rounded-xl items-center px-8 py-4  w-full gap-5  align-middle">
       <label className="checkbox">
        <input type="checkbox" />
        <span className="checkmark"></span>
       </label>
       <p className=' font-Inter font-semibold text-xl text-white drop-shadow-9xl'>
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