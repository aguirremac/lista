import React, {useState} from 'react';
import Input from './Input';
import {IoMdClose } from 'react-icons/io'

const Note = (props) => {

  const [notes, setNotes]= useState ([])


 

  return (
    <div>
      
    <div className='w-full flex justify-center md:justify-start gap-4 md:gap-10 pt-3 md:pt-6 flex-wrap flex-start pb-2 md:pl-10 z-11 absolute'>
     
      {props.notes.map((item, idNumber) => {
        return(
        <div key={idNumber}  className="font-mont w-[170px] md:w-[300px] h-full overflow-auto  shadow-xl rounded-xl">
        <div style={{backgroundColor: item.noteColor !== '' ? item.noteColor : '#fffd8d' }} className=" relative p-4 pt-3 ">
        <IoMdClose  onClick={()=>{ props.onDelete(idNumber)}} size={20} className='absolute top-3 right-3 cursor-pointer hover:text-red-700'/>
          <h1 className="font-bold pb-2 h-full whitespace-pre-wrap text-xs md:text-xl">{item.title}</h1>
          <p className='h-full whitespace-pre-wrap text-[10px] md:text-lg'>{item.content}</p>
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
