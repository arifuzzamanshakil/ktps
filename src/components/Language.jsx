import React from 'react'
import { useState } from 'react';

const Language = () => {
  const [lang, setLanguage] = useState("en");



  return (
    <div className="text-xl md:text-2xl lang font-normal text-[#FFC1E5] w-[100px] overflow-hidden shadow-none border-none">
      <select className='langDrop w-[150px] bg-transparent p-3 h-auto border-none shadow-none focus:outline-none'>
        <option> English </option>
        <option> Español </option>

      </select>
    </div>
  );
};

export default Language;