import React from 'react';
import data from '../../data';
import { clock, ensure, insert } from '../../assets/img';

const AccordionsecBox = () => {
 return (
  <div>
   {
    data.map((getData, index) => (
     <div className='pt-5'>
      <p className='text-lg text-white font-Inter font-normal drop-shadow-8xl'>{getData.unpack.naloxPara1.en}</p>

      <div className="flex items-center gap-16 pb-6 -mt-2">

       <div className=''>
        <img src={ensure} alt="" className='mx-auto' />
        <p className='text-lg -mt-8 text-white text-center font-Inter font-normal drop-shadow-8xl'>{getData.unpack.naloxPara2.en}</p>
       </div>
       <div>
        <img src={insert} alt="" className='mx-auto' />
        <p className='text-lg -mt-8 text-white text-center font-Inter font-normal drop-shadow-8xl'>{getData.unpack.naloxPara3.en}</p>
       </div>
       <div>
        <img src={clock} alt="" className='mx-auto' />
        <p className='text-lg -mt-8 text-white text-center font-Inter font-normal drop-shadow-8xl'>{getData.unpack.naloxPara4.en}</p>
       </div>

      </div>

      <p className='text-lg text-white font-Inter font-normal drop-shadow-8xl'>{getData.unpack.naloxPara5.en} <a href="#" className="text-[#97E4FC] underline"> {getData.unpack.naloxPara6.en}</a></p>


     </div>



    ))
   }
  </div>
 );
};

export default AccordionsecBox;