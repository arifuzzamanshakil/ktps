import React from 'react';
import { dash, dash2, dash3, dash4, dash5, unpack } from '../assets/img';
import data from '../data';
import AccordionBox from './layouts/AccordionBox';
import AccordionSecBox from './layouts/AccordionsecBox';


const Unpack = () => {
 return (
  <div className="lg:pt-24 pt-16 w-[335px] sm:w-[500px] xl:w-[1150px] lg:w-[1020px]  mx-auto ">

   <div>
    <img src={unpack} alt="" className="mx-auto" />
   </div>
   {
    data.map((getData, index) => (

     <div id='nalox' className='flex-col flex xl:gap-16 lg:gap-14 gap-3'>
      <div className="flex gap-8 flex-col items-center lg:flex-row lg:items-baseline">
       <div className=" absolute xl:mt-[100px] lg:mt-[108px] ml-7 hidden lg:block"><img src={dash} alt="" /></div>
       <div>
        <h2 className="border border-[#E5AEEE] rounded-[50%] w-[61px] h-[61px] text-[#FFf] text-[40px] text-center font-Rajdhani font-semibold drop-shadow-10xl mt-8">1</h2>
       </div>
       <div className="lg:w-[1060px] border border-[#E5AEEE] bg-[#B158BF1A] rounded-[14px] p-5 lg:p-10 text-center lg:text-left">
        <h2 className="lg:text-[32px] text-2xl font-Rajdhani font-semibold tracking-[3.2px] drop-shadow-5xl text-white ">{getData.unpack.title.en}</h2>
        <p className='lg:text-lg text-base text-white font-Inter md:font-medium font-normal drop-shadow-9xl pt-5 '>{getData.unpack.des.en}</p>
        <p className='lg:text-lg text-base text-white font-Inter font-normal md:font-medium drop-shadow-9xl pt-4 '>{getData.unpack.des2.en} <a href="#" className="text-[#97E4FC] underline">{getData.unpack.des3.en}</a>{getData.unpack.des4.en}</p>
       </div>

      </div>

      <div id='nonuser' className="flex gap-8 flex-col items-center lg:flex-row lg:items-baseline">
       <div className=" absolute xl:mt-[105px]  lg:mt-[108px] ml-7 hidden lg:block"><img src={dash2} alt="" /></div>
       <div>
        <h2 className="border border-[#E5AEEE] rounded-[50%] w-[61px] h-[61px] text-[#FFf] text-[40px] text-center font-Rajdhani font-semibold drop-shadow-10xl mt-8">2</h2>
       </div>
       <div className="lg:w-[1060px] border border-[#E5AEEE] bg-[#B158BF1A] rounded-[14px] p-5 lg:p-10 text-center lg:text-left">
        <h2 className="lg:text-[32px] text-2xl font-Rajdhani font-semibold tracking-[3.2px] drop-shadow-5xl text-white">{getData.unpack.title2.en}</h2>
        <p className='text-lg  text-white font-Inter font-normal md:font-medium drop-shadow-9xl pt-5 '>{getData.unpack.des5.en}</p>
       </div>
      </div>

      <section id='testStrips' className='h-full' >
       <div className="flex gap-8 flex-col items-center lg:flex-row lg:items-baseline" >
        <div className=" absolute xl:mt-[105px]  lg:mt-[110px] ml-7 hidden lg:block"><img src={dash3} alt="" /></div>
        <div>
         <h2 className="border border-[#E5AEEE] rounded-[50%] w-[61px] h-[61px] text-[#FFf] text-[40px] text-center font-Rajdhani font-semibold drop-shadow-10xl mt-8">3</h2>
        </div>
        <div className="lg:w-[1060px] border border-[#E5AEEE] bg-[#B158BF1A] rounded-[14px] p-5 lg:p-10 text-center lg:text-left">
         <h2 className="lg:text-[32px] text-2xl font-Rajdhani font-semibold tracking-[3.2px] drop-shadow-5xl text-white ">{getData.unpack.title3.en}</h2>
         <p className='text-lg  text-white font-Inter font-normal md:font-medium drop-shadow-9xl pt-5 '>{getData.unpack.des6.en} <a href="#" className="text-[#97E4FC] underline">{getData.unpack.des7.en}</a> {getData.unpack.des8.en}<a href="#" className="text-[#97E4FC] underline">{getData.unpack.des9.en}  </a> {getData.unpack.des10.en} <a href="#" className="text-[#97E4FC] underline">{getData.unpack.des11.en} </a>  {getData.unpack.des12.en}  <a href="#" className="text-[#97E4FC] underline">{getData.unpack.des13.en} </a> </p>

        </div>
       </div>
      </section>

      <div className="flex gap-8 flex-col items-center lg:flex-row lg:items-baseline">
       <div className=" absolute mt-[105px] ml-7 hidden lg:block"><img src={dash4} alt="" /></div>
       <div>
        <h2 className="border border-[#E5AEEE] rounded-[50%] w-[61px] h-[61px] text-[#FFf] text-[40px] text-center font-Rajdhani font-semibold drop-shadow-10xl mt-8">4</h2>
       </div>
       <div className="border border-[#E5AEEE] bg-[#B158BF1A] rounded-[14px] p-5 lg:p-10 text-center lg:text-left">
        <h2 className="lg:text-[32px] text-2xl font-Rajdhani font-semibold tracking-[3.2px] drop-shadow-5xl text-white">{getData.unpack.title4.en}</h2>
        <div id="overdose">
         <AccordionBox />
        </div>

       </div>
      </div>

      <div className="flex gap-8 flex-col items-center lg:flex-row lg:items-baseline">
       <div className=" absolute xl:mt-[105px] lg:mt-[115px] ml-7 hidden lg:block"><img src={dash5} alt="" /></div>
       <div>
        <h2 className="border border-[#E5AEEE] rounded-[50%] w-[61px] h-[61px] text-[#FFf] text-[40px] text-center font-Rajdhani font-semibold drop-shadow-10xl mt-8">5</h2>
       </div>
       <div className="lg:w-[1060px] border border-[#E5AEEE] bg-[#B158BF1A] rounded-[14px] p-5 lg:p-10 text-center lg:text-left">
        <h2 className="lg:text-[32px] text-2xl font-Rajdhani font-semibold tracking-[3.2px] drop-shadow-5xl text-white">{getData.unpack.title5.en}</h2>

        <div >
         <AccordionSecBox />
        </div>

       </div>
      </div>

      <div className="flex gap-8 flex-col items-center lg:flex-row lg:items-baseline">

       <div id='shopping'>
        <h2 className="border border-[#E5AEEE] rounded-[50%] w-[61px] h-[61px] text-[#FFf] text-[40px] text-center font-Rajdhani font-semibold drop-shadow-10xl mt-8">6</h2>
       </div>
       <div className="lg:w-[1060px] border border-[#E5AEEE] bg-[#B158BF1A] rounded-[14px] p-5 lg:p-10 text-center lg:text-left">
        <h2 className="lg:text-[32px] text-2xl font-Rajdhani font-semibold tracking-[3.2px] drop-shadow-5xl text-white">{getData.unpack.title6.en}</h2>
        <p className='text-lg  text-white font-Inter font-normal drop-shadow-9xl pt-5 '>{getData.unpack.des6.en} <a href="#" className="text-[#97E4FC] underline">{getData.unpack.des7.en}</a> {getData.unpack.des14.en}</p>

       </div>
      </div>
     </div>

    ))
   }
  </div>
 );
};


export default Unpack;