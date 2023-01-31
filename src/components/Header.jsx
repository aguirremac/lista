import React, {useState} from "react";
import {BsPlusSquareDotted} from 'react-icons/bs';



const Header = (props) => {
    


return (
 <header className="bg-[#51bcb3] text-white mx-auto p-4 font-semibold font-mont flex justify-between px-10">
    <div className="flex items-center ">
    <img src="https://img.icons8.com/fluency/512/sticky-notes.png" className="h-[50px]"></img>
    <h1 className="tracking-widest  text-5xl pl-2 ">Lista</h1>
    </div>

    <div onClick={props.handleClick} className="flex items-center  gap-5 cursor-pointer hover:scale-105">
    <BsPlusSquareDotted size={40}  className=" "/>
        <p className="text-2xl cursor-pointer ">Add Note</p>
    </div>
    </header>
)

}


export default Header;