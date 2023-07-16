import React, { useEffect } from 'react'
import { useState } from 'react';
import data from "../datacopy"

const Language = () => {
  const [lang, setLanguage] = useState("eng");
  useEffect(() => {
    localStorage.setItem("lang", lang)
  },[lang]);

  return (
    <div className="text-xl md:text-2xl lang font-normal text-[#FFC1E5] w-[100px] overflow-hidden shadow-none border-none">
      <select onChange={(e)=>setLanguage(e.target.value)} className='langDrop w-[150px] bg-transparent p-3 h-auto border-none shadow-none focus:outline-none'>
        <option value="eng"> English </option>
        <option value="spa"> Español </option>
      </select>
    </div>
  );
};

export default Language;