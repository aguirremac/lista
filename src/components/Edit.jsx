import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import {FiEdit2} from 'react-icons/fi'
import {BsCheck2} from 'react-icons/bs'

const Edit = ({selectedNote, handleClose}) => {
  const [editable, setEditable] = useState(false);
 


  return (
    <div className="mx-auto w-full h-screen  flex justify-center items-center relative bg-black/80 overflow-auto cursor-pointer">
      <div
        style={{ backgroundColor: selectedNote.noteColor }}
        className=" w-[300px]  min-h-[250px] md:min-w-[500px] xl:min-w-[700px] md:min-h-[500px] rounded-xl absolute top-10 font-mont px-5 py-4"
      >
        
      {!editable ? <FiEdit2 onClick={()=>setEditable(!editable)} className="absolute top-3 right-10 hover:text-red hover:scale-125 text-md md:text-lg cursor-pointer" />
        : <BsCheck2 onClick={()=>setEditable(!editable)} className="absolute top-3 text-green-900 right-10 hover:text-red hover:scale-125 text-lg md:text-xl cursor-pointer"/>}
        <IoMdClose
          onClick={handleClose}
          className="absolute top-3 right-3 hover:text-red hover:scale-125 text-lg md:text-xl cursor-pointer"
        />
        <div  onClick={()=>setEditable(true)}>
        <h2 contentEditable={editable} style={{border : editable &&  'dashed black 2px'}} className=" rounded-xl px-2 mb-1 mt-4 font-bold text-xl cursor-text outline-none break-all ">{selectedNote.title}</h2>

        <div>
          <p  contentEditable={editable} style={{border : editable &&  'dashed black 2px'}}  className=" rounded-xl p-2 mb-5 min-h-[450px] cursor-text outline-none whitespace-pre-wrap break-all ">{selectedNote.content}</p>
        </div>
        </div>
        <p
          
          className="absolute bottom-3 right-3 text-right text-sm font-semibold pt-2"
        >
          {selectedNote.dateTime}
        </p>
      </div>
    </div>
  );
};

export default Edit;
