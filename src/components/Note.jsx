import React, {useState} from 'react';
import Input from './Input';
import {IoMdClose } from 'react-icons/io'

const Note = (props) => {

  const [notes, setNotes]= useState ([])


 

  return (
    <div>
      
    <div className='w-full flex gap-4 p-4 flex-wrap'>
     
      {props.notes.map((item, idNumber) => {
        return(
        <div key={idNumber}  className="font-mont w-[300px] h-full overflow-auto  shadow-xl rounded-xl">
        <div className=" relative  bg-yellow-100 p-3 p-4 ">
        <IoMdClose  onClick={()=>{ props.onDelete(idNumber)}} size={20} className='absolute right-3 cursor-pointer hover:text-red-700'/>
          <h1 className="font-bold pb-2 h-full">{item.title}</h1>
          <p className='h-full whitespace-pre-wrap'>{item.content}</p>
        </div>
      </div>
        )
      })
    
      }

      </div>
      </div>
  );
};

export default Note;
