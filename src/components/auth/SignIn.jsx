import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';


const style = {
  container: `flex flex-col  justify-center items-center h-screen mx-auto w-full bg-gradient-to-r from-cyan-500 to-blue-500 font-mont`,
  form: `bg-slate-300/40  flex flex-col justify-center items-center w-[500px] h-[400px] rounded-xl gap-2 p-3 px-10`,
  titleDiv: `flex items-center justify-center  gap-2 mb-5`,
  icon: `h-[25px] md:h-[80px]`,
  lista: `text-2xl md:text-3xl text-black font-mont font-bold`,
  loginText: `font-bold text-lg `,
  email: ` w-full rounded-md p-3  `,
  password: ` w-full rounded-md p-3`,
  button: `p-2 border border-2 border-black/40 rounded-md text-center mt-4 hover:border-black hover:bg-cyan-600 font-bold w-full cursor-pointer`,
  noAccount: `text-sm `,
  signUpLink: `font-bold hover:text-red-500 cursor-pointer`,
};

const SignIn = ({ handleSignUp, handleUserDetails }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        handleUserDetails(userCredential.user)
        console.log(userCredential.user);
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.titleDiv}>
          <img
            className={style.icon}
            src="https://img.icons8.com/fluency/512/sticky-notes.png"
            alt="logo"
          ></img>
          <h1 className={style.lista}>Lista - Note Keeper</h1>
        </div>
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
        <button className={style.button}>Login</button>
        <p className={style.noAccount}>
          Don't have an account?{' '}
          <span onClick={handleSignUp} className={style.signUpLink}>
            SignUp
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
