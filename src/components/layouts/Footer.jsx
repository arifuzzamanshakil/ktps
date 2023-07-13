import React from 'react';
import data from '../../data';

const Footer = () => {
 return (
  <div>
   {
    data.map((getData, i) => (
     <div>
      <div className="power pt-28 pb-7">
       <p className='w-[335px] md:w-auto mx-auto text-base text-center text-white font-Inter font-medium drop-shadow-9xl pt-8'> {getData.footer.power.en} </p>
      </div>
      <div className="footerBg py-2 ">
       <h2 className="w-[335px] mx-auto md:w-auto gap-2 flex flex-col justify-center lg:flex-row text-sm md:text-lg font-bold text-center text-white tracking-[1.4px] md:tracking-[1.8px]">{getData.footer.footer.en} <a href="#" className="underline text-[#FFC1E5] ">{getData.footer.footerLink.en}</a></h2>
      </div>
     </div>
    ))
   }
  </div>
 );
};

export default Footer;