import React, { useEffect, useState } from 'react'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../../config/firebase';




const AuthListen = () => {
    
    const [currentUser, setCurrentUser] = useState({});

    useEffect(()=>{
        
     onAuthStateChanged(auth, (user)=> {
        if (user) {
           setCurrentUser(user)
        }else {
            //user is signed out
        }
            
    });

    },[currentUser]) //this will only run if currenUser changed

    


  return (
    <div>
    </div>
  )
}

export default AuthListen;
