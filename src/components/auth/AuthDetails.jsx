import React, { useEffect, useState } from 'react'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../../config/firebase';




const AuthDetails = () => {
    
    const [currentUser, setCurrentUser] = useState({});

    useEffect(()=>{
        
     onAuthStateChanged(auth, (user)=> {
        if (user) {
           setCurrentUser(user.uid)
           console.log(currentUser)
        }else {
            //user is signed out
        }
            
    });

    },[])

    


  return (
    <div>
    </div>
  )
}

export default AuthDetails;
