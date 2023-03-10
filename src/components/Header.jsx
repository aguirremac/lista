import React, {useContext, useState} from "react";
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { BsPlusSquareDotted } from "react-icons/bs";
import { AuthContext } from "../context/AuthContext";
import Input from "./Input";
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgCloseR} from 'react-icons/cg'
import Note from "./Note";
import {RxDashboard} from 'react-icons/rx'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import { MdOutlineMailOutline} from 'react-icons/md'




const Header = () => {

     const [addNote, setAddNote] = useState(false);
     const [refresh, setRefresh] = useState(false);
     const [sidebar, setSidebar] = useState(false);
    
     
    
    
  const handleAddNoteClick = () => {
    setAddNote(!addNote);
  };


    const navigate = useNavigate();

    const {loggedUser} = useContext(AuthContext);

    const handleLogOut = ()=> {
signOut (auth).then(() => {
    localStorage.clear()
    navigate("/login") 
}).catch((error) => {
    console.log(error.message)
})
}



return (
    <div>
 <header className="bg-[#51bcb3] text-white mx-auto p-4 font-semibold font-mont flex justify-between md:px-7 z-50 sticky top-0">
    <Link to="/dashboard"><div className="flex items-center cursor-pointer ">
    <img src="https://img.icons8.com/fluency/512/sticky-notes.png" className="h-[40px] md:h-[60px]" alt="Lista Logo"></img>
    <div className="flex flex-col justify-center items-start "><h1 className="tracking-widest text-md md:text-[30px] leading-none">Lista</h1>
    <p className="text-[8px] md:text-[14px] leading-none">Note Keeper</p>
    </div>
    </div> </Link>
    <button onClick={handleAddNoteClick} disabled={addNote} style={{opacity: addNote && 0.2}} className='flex  items-center md:gap-5 text-2xl md:text-4xl text-white font-mont font-bold hover:scale-105 cursor-pointer'><BsPlusSquareDotted /> <p className="hidden md:block "></p></button>
    

    <div  className="flex justify-center items-center text-2xl md:text-4xl gap-5">
        <p className="text-yellow-200 text-[0px] md:text-lg">{loggedUser.displayName.toUpperCase() }</p> 
        <GiHamburgerMenu  onClick={()=>setSidebar(!sidebar)} className="cursor-pointer hover:text-yellow-100 "/> 
    </div>   


    <div className="fixed z-40">
         {sidebar && <div className="bg-black/80 w-full h-screen fixed top-0 right-0 "> </div> }
    
        <div className={!sidebar ? "right-[-100%] w-[250px] md:w-[300px] bg-slate-200 h-screen fixed top-0  text-black duration-300 " : "right-0 w-[250px] md:w-[300px] bg-slate-200 h-screen fixed top-0 right-0 text-black duration-300"} >
        
        <CgCloseR onClick={()=>setSidebar(!sidebar)} className="text-3xl absolute right-3 top-3 hover:bg-yellow-100 rounded-md cursor-pointer" />

        <div className="flex flex-col justify-center items-start pt-7 pl-5">
        <p className="text-blue-600 text-[15px] md:text-lg flex gap-2 items-center">Hi, {loggedUser.displayName}! </p>
        
        </div>
    <ul className="flex flex-col pt-10 pl-5 gap-2 text-[15px] md:text-md">
        <Link className=" hover:text-red-500 flex flex-start gap-2 items-center" to="/dashboard" onClick={()=>setSidebar(!sidebar)}><RxDashboard />Dashboard</Link>
        <Link className=" hover:text-red-500 flex flex-start gap-2 items-center" to="/dashboard"><AiOutlineQuestionCircle />About Lista</Link>
        <Link className=" hover:text-red-500 flex flex-start gap-2 items-center" to="/contact"><MdOutlineMailOutline />Contact Us</Link>
        <p onClick={handleLogOut} className="text-[15px] md:text-md flex items-center justify-start gap-1 cursor-pointer hover:text-red-600"><IoMdLogOut />Logout</p>
        
    </ul>


        </div>
        </div>
    </header>
     {addNote && <Input onAddNoteClick={handleAddNoteClick} newNote={(input)=>setRefresh(input)} />}
     <Note refresh={refresh} />
      
     
         
    </div>
)

}


export default Header;