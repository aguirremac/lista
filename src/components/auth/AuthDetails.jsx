import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";



const AuthDetails = ({handleAuth}) => {
    
    const [useDetails, setUserDetails] = useState(null);

    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user)=> {
            if (user){
                setUserDetails(user)
                handleAuth(useDetails)
                console.log(useDetails)
            }else {
                setUserDetails(null)
            }
    })

    },[])


  return (
    <div>
    </div>
  )
}

export default AuthDetails;
