import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const style = {
  container: ` relative flex flex-col  justify-center items-center h-screen mx-auto w-full bg-gradient-to-r from-yellow-200 to-yellow-500 font-mont`,
  form: `bg-slate-600/30 text-sm md:text-md  flex flex-col justify-center items-center w-[300px] h-[400px] md:w-[500px] md:h-[400px] rounded-xl gap-2 p-3 px-10`,
  titleDiv: `absolute bottom-1 right-3 hidden md:flex items-center justify-center  gap-2 mb-5`,
  icon: `h-[25px] md:h-[40px]`,
  lista: `text-xl md:text-2xl text-black/60  font-mont font-bold`,
  signUpText: `font-bold text-lg `,
  email: ` w-full rounded-md md:p-3 p-2 outline-none  `,
  password: ` w-full rounded-md md:p-3 p-2 outline-none`,
  passCont: `flex  w-full items-center bg-white rounded-md pr-2`,
  button: `p-2 w-full mt-2 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`,
  dontMatch: `text-[10px] md:text-sm text-red-900 font-bold`,
  match: `text-[10px] md:text-sm text-green-700 font-bold`,
  signInLink: `font-bold hover:text-green-800 cursor-pointer`,
  account: `text-sm`,
  already: `text-sm text-red-900 font-bold`,
  short: `font-bold md:text-xs text-[8px] text-red-900`,
};

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/enterName');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem('user')) && navigate('/dashboard');
  });

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
        <p className={style.signUpText}>Create New Account</p>

        <input
          onChange={(e) => setEmail(e.target.value)}
          className={style.email}
          type="email"
          placeholder="Email"
          value={email}
          required
        ></input>
        {error.indexOf('email-already-in-use') !== -1 && (
          <p className={style.already}>Email already used.</p>
        )}
        <div className={style.passCont}>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className={style.password}
            type={showPassword ? 'text' : "password"}
            placeholder="Password"
            value={password}
            required
          ></input>
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-600  text-sm md:text-xl cursor-pointer"
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>
        {password.length > 0 && password.length < 6 && (
          <p className={style.short}>
            Password is too short (at least 6 characters)
          </p>
        )}
        
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={style.password}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            required
          ></input>
         
       
        {confirmPassword && (
          <p
            className={
              password !== confirmPassword ? style.dontMatch : style.match
            }
          >
            {password !== confirmPassword
              ? 'Password does not match'
              : 'Password matched'}
          </p>
        )}
        <button
          type="submit"
          className={style.button}
          disabled={password !== confirmPassword}
        >
          Register
        </button>
        <p className={style.account}>
          Already Registered?{' '}
          <span className={style.signInLink}>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
