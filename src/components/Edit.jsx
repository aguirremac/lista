import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import {FiEdit2} from 'react-icons/fi'
import {FaCheck} from 'react-icons/fa'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../config/firebase';

const Edit = ({selectedNote, handleClose,saveNote}) => {
  const [editable, setEditable] = useState(false);
  const [newInput, setNewInput] = useState({
    title: selectedNote.title,
    content: selectedNote.content,
    noteColor: selectedNote.noteColor,
    dateTime: selectedNote.dateTime,
    noteId: selectedNote.noteId,
  })
 
const handleChange = (e) => {
  const {name, value} = e.target
  const newDateTime = new Date().toLocaleString();

  setNewInput ((prevValue) => {
    return {...prevValue, [name]: value, dateTime: newDateTime,
    }
  })
}; 



const handleSave = async () => {
 try{
  await updateDoc(doc(db, "notes", selectedNote.noteId), 
    newInput );
    
}catch(err){
  console.log(err)
}; setEditable(!editable)
    saveNote(newInput)
} 



  return (
    <div className="mx-auto w-full h-screen  flex justify-center items-center  bg-black/80 overflow-auto cursor-pointer fixed top-0 ">
      <div
        style={{ backgroundColor: selectedNote.noteColor }}
        className=" min-w-[350px]  min-h-[220px] md:min-w-[500px] xl:min-w-[700px] md:min-h-[500px] rounded-xl absolute top-[85px] md:top-[120px] font-mont px-5 py-4"
      >
        
      {!editable ? <FiEdit2 onClick={()=>setEditable(!editable)} className="absolute top-3 right-10 hover:text-red hover:scale-125 text-md md:text-lg cursor-pointer" />
        : <FaCheck onClick={handleSave} className="absolute top-3 text-green-900 right-10 hover:text-red hover:scale-125 text-lg md:text-xl cursor-pointer"/>}
        <IoMdClose
          onClick={handleClose}
          className="absolute top-3 right-3 hover:text-red hover:scale-125 text-lg md:text-xl cursor-pointer"
        />
        <div  onClick={()=>setEditable(true)} >
        <input  type='text' name='title' onChange={handleChange}  value={newInput.title} style={{border : editable &&  'dashed black 2px'}}  className=" rounded-md px-2 mb-1 mt-4 font-bold w-full text-sm md:text-xl cursor-text outline-none  bg-transparent break-words" ></input>

        <div>
          <textarea type='textarea' name='content' onChange={handleChange} value={newInput.content} style={{border : editable &&  'dashed black 2px'}}  className=" rounded-md p-2 mb-5 min-h-[450px] text-xs md:text-lg w-full cursor-text outline-none bg-transparent  break-auto overflow-auto scrollbar-none " ></textarea>
        </div>
        </div>
        <p
          
          className="absolute bottom-3 right-3 text-right text-sm font-semibold pt-2"
        >
          {newInput.dateTime}
        </p>
      </div>
    </div>
  );
};

export default Edit;
