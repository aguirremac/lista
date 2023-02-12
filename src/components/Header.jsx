import React, {useState} from "react";
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { BsPlusSquareDotted } from "react-icons/bs";





const Header = ({handleClick, user}) => {

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
    <img src="https://img.icons8.com/fluency/512/sticky-notes.png" className="h-[40px] md:h-[60px]" alt="Lista Logo"></img>
    <div className="flex flex-col justify-center items-start "><h1 className="tracking-widest text-md md:text-[30px] leading-none">Lista</h1>
    <p className="text-[8px] md:text-[14px] leading-none">Note Keeper</p>
    </div>
    </div> </Link>
    <div onClick={handleClick} className='flex  items-center md:gap-5 text-2xl md:text-2xl text-white font-mont font-bold hover:scale-105 cursor-pointer'><BsPlusSquareDotted /> <p className="hidden md:block ">Add Note</p></div>
    
    <div className="flex flex-col justify-center items-end">
        <p className="text-yellow-200 text-[10px] md:text-lg">{user.displayName.toUpperCase()}</p>
    <div onClick={handleLogOut} className="text-[10px] md:text-sm flex items-center justify-center gap-2 cursor-pointer hover:scale-105 hover:text-red-600 ">
    <p>Log out</p>
    <IoMdLogOut />
    </div>
    </div>
    </header>
)

}


export default Header;