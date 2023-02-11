import React, {useState} from "react";
import {BsPlusSquareDotted} from 'react-icons/bs';
import {AiOutlineCloseCircle} from 'react-icons/ai';



const Header = (props) => {
    


return (
 <header className="bg-[#51bcb3] text-white mx-auto p-4 font-semibold font-mont flex justify-between md:px-10">
    <div className="flex items-center ">
    <img src="https://img.icons8.com/fluency/512/sticky-notes.png" className="h-[25px] md:h-[50px]" alt="Lista Logo"></img>
    <h1 className="tracking-widest text-md md:text-3xl pl-2 ">Lista - Note Keeper</h1>
    </div>

    <div onClick={props.handleClick} className="flex items-center  gap-2 cursor-pointer hover:scale-105">
    {props.addNoteStatus ? <AiOutlineCloseCircle size={30}  className=" "/> :
    <BsPlusSquareDotted  className="text-md md:text-2xl "/>}
        <p className=" text-sm md:text-2xl cursor-pointer ">{props.addNoteStatus ? 'Close' : 'Add Note'}</p>
    </div>
    </header>
)

}


export default Header;