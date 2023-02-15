
import { updateProfile } from 'firebase/auth';
import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';




const style = {
    container: `relative flex flex-col  justify-center items-center h-screen mx-auto w-full bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 font-mont`,
    form: `bg-slate-500/50 text-sm md:text-md   flex flex-col justify-center items-center w-[300px] h-[200px] md:w-[500px] md:h-[200px] rounded-xl gap-2 p-3 px-10`,
    titleDiv: `absolute bottom-1 right-3 hidden md:flex items-center justify-center  gap-2 mb-5`,
    icon: `h-[13px] md:h-[40px]`,
    lista: `text-xl md:text-2xl text-black/60  font-mont font-bold`,
    loginText: `font-bold text-lg `,
    email: ` w-full rounded-md p-3 outline-none  `,
    password: ` w-full rounded-md p-3`,
    button: `p-2 border border-2 border-black/40 rounded-md text-center mt-4 hover:border-black hover:bg-cyan-500 font-bold w-full cursor-pointer`,
    noAccount: `text-sm `,
    signUpLink: `font-bold hover:text-red-500 cursor-pointer`,
    incorrect: `text-red-800 font-bold text-sm `,
  };
  

const Name = () => {
    const [name, setName] = useState('');
    

    const navigate = useNavigate();



const handleClick = () => {
    updateProfile(auth.currentUser, {
        displayName: name
    })
    navigate("/login")
    
}

useEffect (()=> {

  JSON.parse(localStorage.getItem("user")) && navigate('/dashboard') 

})

    
  return (
    <div>
         <div className={style.container}>
      <div className={style.titleDiv}>
          <img
            className={style.icon}
            src="https://img.icons8.com/fluency/512/sticky-notes.png"
            alt="logo"
          ></img>
          <h1 className={style.lista}>Lista - Note Keeper</h1>
        </div>
      <form  className={style.form}>
        
        <p className={style.loginText}>Hi {name}!</p>
        <input
          onChange={(e) => setName(e.target.value)}
          className={style.email}
          type="email"
          placeholder="What should we call you?"
          value={name}
          required
        ></input>
    
        <button onClick={handleClick} className={style.button}>Let's Start</button>
      </form>
      
    </div>
      
    </div>
  )
}

export default Name;
