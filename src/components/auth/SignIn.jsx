import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';
import { Link, useNavigate } from 'react-router-dom';



const style = {
  container: `relative flex flex-col  justify-center items-center h-screen mx-auto w-full bg-gradient-to-r from-green-200 via-green-300 to-blue-500 font-mont`,
  form: `bg-slate-100/40 text-sm md:text-md flex flex-col justify-center items-center w-[300px] h-[400px]  md:w-[500px] md:h-[400px] rounded-xl gap-2 p-3 px-10`,
  titleDiv: `absolute bottom-1 right-3 flex items-center justify-center  gap-2 mb-2 md:mb-5`,
  icon: `h-[25px] md:h-[40px]`,
  lista: `text-xl md:text-2xl text-black/60  font-mont font-bold`,
  loginText: `font-bold text-sm md:text-lg `,
  email: ` w-full rounded-md p-2 md:p-3 outline-none  `,
  password: ` w-full rounded-md  p-2 md:p-3 outline-none`,
  button: `p-2 mt-2 w-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`,
  noAccount: `text-sm `,
  signUpLink: `font-bold hover:text-red-500 cursor-pointer`,
  incorrect: `text-red-800 font-bold text-sm `,
};

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error);
        setError(true)
      });
  };

  return (
    <div className={style.container}>
      <div className={style.titleDiv}>
          <img
            className={style.icon}
            src="https://img.icons8.com/fluency/512/sticky-notes.png"
            alt="logo"
          ></img>
          <h1 className={style.lista}>Lista - Note Keeper</h1>
        </div>
      <form onSubmit={handleSubmit} className={style.form}>
        
        <p className={style.loginText}>Login to your account</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className={style.email}
          type="email"
          placeholder="Email"
          value={email}
          required
        ></input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className={style.password}
          type="password"
          placeholder="Password"
          value={password}
          required
        ></input>
        {error && <p className={style.incorrect}>Incorrect Email or Password!</p>}
        <button className={style.button}>Login</button>
        <p className={style.noAccount}>Don't have an account? <span  className={style.signUpLink}>
            <Link to="/signup">SignUp</Link></span> </p>
      </form>
      
    </div>
  );
};

export default SignIn;
