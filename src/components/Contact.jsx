import React, { useContext, useEffect, useState } from 'react';
import { CgCloseR } from 'react-icons/cg';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';




const style = {
  container: `fixed top-0 left-0 flex flex-col  justify-center items-center h-screen mx-auto w-full bg-black/80 font-mont z-50`,
  form: `bg-slate-200 text-sm md:text-md flex flex-col justify-center items-center w-[300px] h-[400px]  md:w-[500px] md:h-[400px] rounded-xl gap-2 p-3 px-10`,
  titleDiv: `absolute bottom-1 right-3 hidden md:flex items-center justify-center  gap-2 mb-2 md:mb-5`,
  icon: `h-[25px] md:h-[40px]`,
  lista: `text-xl md:text-2xl text-black/60  font-mont font-bold`,
  loginText: `font-bold text-sm md:text-lg `,
  email: ` w-full rounded-md p-2 md:p-3 outline-none  `,
  message: ` w-full rounded-md  p-2 md:p-3 outline-none min-h-[150px] `,
  button: `p-2 mt-2 w-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 `,
  noAccount: `text-xs `,
  signUpLink: `font-bold hover:text-red-500 cursor-pointer`,
  incorrect: `text-red-800 font-bold text-sm `,
  already: `text-sm text-red-900 font-bold`,
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState({name:'', email:'', content:''});

  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
  setMessage((prev)=>{
   return {...prev, name: name, email:email, content: content }
  });
  navigate('/dashboard')
  setName('')
  setEmail('')
  setContent('')
  }



  return (
    <div className={style.container}>
      <Link to="/dashboard"><CgCloseR  className="text-3xl text-white absolute right-3 top-3 hover:bg-yellow-600 cursor-pointer rounded-md" /></Link>
      
      
      <form onSubmit={handleSubmit} className={style.form}>
        
        <p className={style.loginText}>Email Us:</p>
        <input
          onChange={(e) => setName(e.target.value)}
          className={style.email}
          type="name"
          placeholder="Full Name"
          value={name}
          required
        ></input>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className={style.email}
          type="email"
          placeholder="Email"
          value={email}
          required
        ></input>

        {error.indexOf('user-not-found') !== -1 && <p className={style.already}>Email not yet registered.</p> }
        <textarea
          onChange={(e) => setContent(e.target.value)}
          className={style.message}
          type="password"
          placeholder="Message"
          value={content}
          required
        ></textarea>
        {error.indexOf('wrong-password') !== -1 && <p className={style.incorrect}>Incorrect Email or Password!</p>}
        <button disabled={content ==='' && true} type="submit" className={style.button }>Send</button>
      </form>
      
    </div>
  );
};

export default Contact;
