import React, {useContext, useState} from "react";
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { BsPlusSquareDotted } from "react-icons/bs";
import { AuthContext } from "../context/AuthContext";
import Input from "./Input";
import Note from "./Note";






const Header = () => {

     const [addNote, setAddNote] = useState(false);
  

  const handleAddNoteClick = () => {
    setAddNote(!addNote);
  };


    const navigate = useNavigate();

    const {loggedUser} = useContext(AuthContext);

    const handleLogOut = ()=> {
signOut (auth).then(() => {
    localStorage.clear()
    navigate("/login") 


//     const user = userCredential.user;
//     dispatch({type: "LOGIN", payload: user})

//     navigate('/dashboard')
//       })
//       .catch((error) => { 
//         setError(error.message)
//         console.log(error.message);
//       });
//   };




}).catch((error) => {
    console.log(error.message)
})
}

return (
    <div>
 <header className="bg-[#51bcb3] text-white mx-auto p-4 font-semibold font-mont flex justify-between md:px-10">
    <Link to="/dashboard"><div className="flex items-center cursor-pointer ">
    <img src="https://img.icons8.com/fluency/512/sticky-notes.png" className="h-[40px] md:h-[60px]" alt="Lista Logo"></img>
    <div className="flex flex-col justify-center items-start "><h1 className="tracking-widest text-md md:text-[30px] leading-none">Lista</h1>
    <p className="text-[8px] md:text-[14px] leading-none">Note Keeper</p>
    </div>
    </div> </Link>
    <button onClick={handleAddNoteClick} disabled={addNote} style={{opacity: addNote && 0.2}} className='flex  items-center md:gap-5 text-2xl md:text-4xl text-white font-mont font-bold hover:scale-105 cursor-pointer'><BsPlusSquareDotted /> <p className="hidden md:block "></p></button>
    
    <div className="flex flex-col justify-center items-end">

        <p className="text-yellow-200 text-[10px] md:text-lg">{loggedUser.displayName }</p>

    <div onClick={handleLogOut} className="text-[9px] md:text-sm flex items-center justify-center gap-1 cursor-pointer hover:scale-105 hover:text-red-600 ">
    <p>Log out</p>
    <IoMdLogOut />
    </div>
    </div>
    </header>
     {addNote && <Input onAddNoteClick={handleAddNoteClick}  />}
     <Note  />
         
    </div>
)

}


export default Header;