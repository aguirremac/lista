import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';



const style = {
  container: `flex flex-col  justify-center items-center h-screen mx-auto w-full bg-gradient-to-r from-cyan-800 to-blue-800 font-mont`,
  form: `bg-slate-300/40  flex flex-col justify-center items-center w-[500px] h-[400px] rounded-xl gap-2 p-3 px-10`,
  titleDiv: `flex items-center justify-center  gap-2 mb-5`,
  icon: `h-[25px] md:h-[80px]`,
  lista: `text-2xl md:text-3xl text-black font-mont font-bold`,
  signUpText: `font-bold text-lg `,
  email: ` w-full rounded-md p-3  `,
  password: ` w-full rounded-md p-3`,
  button: `p-2 border border-2 border-black/40 rounded-md text-center mt-4 hover:border-black hover:bg-cyan-800 font-bold w-full`,
  dontMatch: `text-sm text-red-900 font-bold`,
  match: `text-sm text-green-700 font-bold`,
  signInLink: `font-bold hover:text-green-800 cursor-pointer`,
  account: `text-sm`,

}


const SignUp = ({handleSignUp, handleUserDetails }) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // console.log(userCredential);
    handleUserDetails(userCredential.user)
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }).catch(error => {
    console.log(error)
  })


}




  return (
    <div className={style.container}>


            <form onSubmit={handleSubmit} className={style.form}>
            {/* <div className={style.titleDiv} >
            <img  className={style.icon} src="https://img.icons8.com/fluency/512/sticky-notes.png" alt="logo"></img>
            <h1 className={style.lista}>Lista - Note Keeper</h1>
            </div>  */}
            <p className={style.signUpText}>Create New Account</p>
              <input onChange={(e)=>setEmail(e.target.value)} className={style.email} type="email" placeholder='Email' value={email} required></input>
              <input onChange={(e)=>setPassword(e.target.value)} className={style.password} type="password" placeholder='Password' value={password} required></input>
              <input onChange={(e)=>setConfirmPassword(e.target.value)} className={style.password} type="password" placeholder='Confirm Password' value={confirmPassword} required></input>
              {confirmPassword && <p className={password !== confirmPassword ? style.dontMatch: style.match}>{password !== confirmPassword ? 'Password does not match' : 'Password matched'}</p>}
              <button className={style.button} disabled={password !== confirmPassword}>Register</button>
              <p className={style.account}>Already Registered? <span onClick={handleSignUp} className={style.signInLink}>Login</span></p>
            </form>

      
    </div>
  )
}

export default SignUp;
