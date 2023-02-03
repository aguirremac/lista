import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import {FiEdit} from 'react-icons/fi'

const Edit = (props) => {
  const [editable, setEditable] = useState(false);

  return (
    <div className="mx-auto w-full h-screen  flex justify-center items-center relative bg-black/80 overflow-auto cursor-pointer">
      <div
        style={{ backgroundColor: props.zoomDetails.noteColor }}
        className=" w-[300px]  min-h-[250px] md:min-w-[500px] xl:min-w-[700px] md:min-h-[500px] rounded-xl absolute top-20 font-mont px-5 py-4"
      >
        {/* <FiEdit onClick={()=>setEditable(true)} className="absolute top-3 right-10 hover:text-red hover:scale-125 text-md md:text-lg cursor-pointer" /> */}

        <IoMdClose
          onClick={() => props.zoomOff(false)}
          className="absolute top-3 right-3 hover:text-red hover:scale-125 text-lg md:text-xl cursor-pointer"
        />
        <div contentEditable={editable} className="p-2 mt-5  outline-gray-700 rounded-xl ">
        <h2  onClick={()=>setEditable(true)} className="font-bold text-xl cursor-text outline-none break-all ">{props.zoomDetails.title}</h2>

        <div>
          <p  onClick={()=>setEditable(true)} className="pt-3 min-h-[450px] cursor-text outline-none">{props.zoomDetails.content}</p>
        </div>
        </div>
        <p
          
          className="text-right text-sm font-semibold pt-2"
        >
          {props.zoomDetails.dateTime}
        </p>
      </div>
    </div>
  );
};

export default Edit;
