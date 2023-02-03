import React, { useState } from 'react';
import Input from './Input';
import { RiDeleteBin6Line } from 'react-icons/ri';


const Note = (props) => {
  // const [notes, setNotes]= useState ([])

  return (
    <div>
      <div className="w-full flex justify-evenly xl:justify-start gap-y-3 xl:gap-4 pt-3 md:pt-6 flex-wrap flex-start pb-2 md:px-5 xl:px-5 z-11 absolute">
        {props.notes.map((item, idNumber) => {
          return (
            <div
              key={idNumber}
              className="font-mont w-[170px] h-[180px] md:h-[250px] md:w-[300px]  overflow-hidden  shadow-xl rounded-xl cursor-pointer hover:scale-105 duration-200"
            >
              <div
                style={{
                  backgroundColor:
                    item.noteColor !== '' ? item.noteColor : '#fffd8d',
                }}
                className=" relative px-2 md:px-5 pt-3 h-full"
              >
                <RiDeleteBin6Line
                  onClick={() => {
                    props.onDelete(idNumber); 
                  }}
                  className="absolute top-3 right-3 text-[15px] md:text-[20px] text-gray-600 cursor-pointer hover:text-red-700 hover:scale-125"
                />
             
                <h1 className="font-bold whitespace-pre-wrap text-xs md:text-xl pb-2 ">
                  {item.title}
                </h1>
                
                <div className='md:h-[170px] h-[110px] overflow-hidden'>
                <p className="h-full whitespace-pre-wrap text-[10px] md:text-[15px] font-medium leading-relaxed">
                  {item.content}
                </p>
                </div>
                <p className=" text-[8px] text-gray-600 md:text-[12px] pt-3 md:pt-2 text-right">
                  {item.dateTime}
                </p>
                <p onClick={()=> {props.clickSeeMore(idNumber)}
                } className='absolute bottom-2 font-semibold text-[10px] md:text-sm text-black hover:text-red-700 hover:font-bold'>See more..</p>
              </div>
            </div>
          );
        }).reverse()}
      </div>
    </div>
  );
};

export default Note;
