import React, { useState } from 'react';

const Landing = ({handleStart}) => {



  return (
    <div className=''>
      <div className="relative w-full h-screen flex justify-center items-center">
        
        <div className='absolute z-20 flex flex-col items-center justify-center gap-7'>
           <div className='flex items-center justify-center  gap-2' >
            <img  className=" h-[50px] md:h-[150px]" src="https://img.icons8.com/fluency/512/sticky-notes.png" alt="logo"></img>
            <h1 className='text-3xl md:text-7xl text-white font-mont font-bold '>Lista - Note Keeper</h1>
            </div> 
            <button onClick={handleStart} className='border border-white rounded-xl text-xs md:text-4xl p-3 font-mont justify-center hover:bg-yellow-500/60 hover:scale-105 focus:border-yellow-300 focus:border-4 duration-100 text-white'>Get Started</button>

        </div>

        {/* backdrop image */}
        <div className="bg-black/80 w-full h-screen absolute z-10"></div>
        
        <img
          className="w-full h-screen absolute object-cover z-0"
          src="https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         alt="cover"></img>
      </div>
    </div>
  );
};

export default Landing;
