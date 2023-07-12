import React from 'react';
import { check, medicine1, medicine2, milk } from '../assets/img';
import data from "../data";
import Carousel from './layouts/Carousel';


const Details = () => {
  return (
    <div className="h-full bg-cover bg-no-repeat bg-center pt-14 md:pt-24 w-[335px] sm:w-[500px] md:w-full mx-auto">
      {
        data.map((getData, index) => (

          <div>

            <h2 className='lg:text-5xl text-[28px] font-Rajdhani font-semibold tracking-[4.8px] drop-shadow-5xl text-white m-auto text-center pt-24'>{getData.DetailsSec.pageTitle.en}</h2>

            <div className='justify-between flex flex-wrap gap-5 mx-auto items-center py-0 md:py-10 lg:w-[1010px] xl:w-[1150px] md:w-[760px] '>

              <div className="card lg:w-[465px] md:w-[370px] gap-5 flex flex-col">
                <div className="card_head flex flex-col md:flex-row items-center gap-0">
                  <img src={medicine1} alt="" className='w-28 h-28 md:-ml-8 -mb-3 md:mb-0' />
                  <h3 className=' font-Rajdhani md:text-2xl text-xl font-normal text-[#FFC1E5] drop-shadow-6xl text-center' key={data.getData}>{getData.DetailsSec.header1.en.title}</h3>
                </div>
                <p className=' font-Inter font-normal md:text-lg text-base md:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{getData.DetailsSec.header1.en.description}</p>
              </div>



              <div className="card lg:w-[465px] md:w-[370px] gap-5 flex flex-col">
                <div className="card_head flex flex-col md:flex-row items-center gap-0">
                  <img src={medicine2} alt="" className='w-28 h-28 md:-ml-8 -mb-3 md:mb-0' />
                  <h3 className=' font-Rajdhani md:text-2xl text-xl font-normal text-[#FFC1E5] drop-shadow-6xl text-center' key={data.getData}>{getData.DetailsSec.header2.en.title}</h3>
                </div>
                <p className=' font-Inter font-normal md:text-lg text-base md:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{getData.DetailsSec.header2.en.description}</p>
              </div>

              <div className="card lg:w-[465px] md:w-[370px] gap-5 flex flex-col">
                <div className="card_head flex flex-col md:flex-row items-center gap-0">
                  <img src={check} alt="" className='w-28 h-28 md:-ml-8 -mb-3 md:mb-0' />
                  <h3 className=' font-Rajdhani md:text-2xl text-xl font-normal text-[#FFC1E5] drop-shadow-6xl text-center' key={data.getData}>{getData.DetailsSec.header3.en.title}</h3>
                </div>
                <p className=' font-Inter font-normal md:text-lg text-base md:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{getData.DetailsSec.header3.en.description}</p>
              </div>

              <div className="card lg:w-[465px] md:w-[370px] gap-5 flex flex-col">
                <div className="card_head flex flex-col md:flex-row items-center gap-0">
                  <img src={milk} alt="" className='w-28 h-28 md:-ml-8 -mb-3 md:mb-0' />
                  <h3 className=' font-Rajdhani md:text-2xl text-xl font-normal text-[#FFC1E5] drop-shadow-6xl text-center ' key={data.getData}>{getData.DetailsSec.header4.en.title}</h3>
                </div>
                <p className='font-Inter font-normal md:text-lg text-base md:text-left text-center  text-white drop-shadow-7xl leading-7 md:leading-10'>{getData.DetailsSec.header4.en.description}</p>
              </div> 
              <div className="w-full mx-auto">
                <div className="heading">
                  <h2 className='text-5xl font-Rajdhani font-semibold tracking-[4.8px] drop-shadow-5xl text-white m-auto text-center pt-24 mb-10'>{getData.DetailsSec.secTitle.en}</h2>
                </div>
                <Carousel />
              </div>
            </div>
          </div>
        ))
      }

    </div>
  );
};

export default Details;