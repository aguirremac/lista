import React, {useState} from "react";
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { BsPlusSquareDotted } from "react-icons/bs";




const Header = ({handleClick}) => {

    const navigate = useNavigate();

    const handleLogOut = ()=> {
signOut (auth).then(() => {
    navigate("/signin") 

}).catch((error) => {
    console.log(error.message)
})
}

return (
 <header className="bg-[#51bcb3] text-white mx-auto p-4 font-semibold font-mont flex justify-between md:px-10">
    <Link to="/dashboard"><div className="flex items-center cursor-pointer ">
    <img src="https://img.icons8.com/fluency/512/sticky-notes.png" className="h-[25px] md:h-[50px]" alt="Lista Logo"></img>
    <h1 className="tracking-widest text-md md:text-3xl pl-2 ">Lista - Note Keeper</h1>
    </div> </Link>
    <div onClick={handleClick} className='flex  items-center gap-5 md:text-2xl text-white font-mont font-bold hover:scale-105 cursor-pointer'><BsPlusSquareDotted /> <p>Add Note</p></div>
    
    <div onClick={handleLogOut} className="text-md md:text-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-105 hover:text-red-600 ">
    <p>Log out</p>
    <IoMdLogOut />
    </div>
    
    </header>
)

}


export default Header;