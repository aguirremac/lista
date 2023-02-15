import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const style = {
  container: `relative w-full h-screen flex justify-center items-center`,
  textContainer: `absolute z-20 flex flex-col items-center justify-center gap-7`,
  brandDiv: `flex items-center justify-center  gap-2`,
  icon: `h-[50px] md:h-[150px]`,
  name: `text-3xl md:text-7xl text-white font-mont font-bold`,
  button: `border border-white rounded-xl text-xs md:text-4xl p-3 font-mont justify-center hover:bg-yellow-500/60 hover:scale-105 focus:border-yellow-300 focus:border-4 duration-100 text-white`,
  image: 'w-full h-screen absolute object-cover z-0',
};

const Landing = () => {
  return (
    <div className="">
      <div className={style.container}>
        <div className={style.textContainer}>
          <div className={style.brandDiv}>
            <img
              className={style.icon}
              src="https://img.icons8.com/fluency/512/sticky-notes.png"
              alt="logo"
            ></img>
            <h1 className={style.name}>Lista - Note Keeper</h1>

          </div>
          <button className={style.button}>
            <Link to="/login">Get Started </Link>
          </button>
        </div>

        {/* backdrop image */}
        <div className="bg-black/80 w-full h-screen absolute z-10"></div>

        <img
          className={style.image}
          src="https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cover"
        ></img>
      </div>
    </div>
  );
};

export default Landing;
