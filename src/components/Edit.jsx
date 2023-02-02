import React from 'react';
import {IoMdClose} from 'react-icons/io'

const Edit = (props) => {
    
  return (
    <div  className="mx-auto w-full h-screen  flex justify-center items-center relative bg-black/80 overflow-auto">
      <div style={{backgroundColor: props.zoomDetails.noteColor}} className=" w-[300px]  min-h-[250px] md:min-w-[500px] xl:min-w-[700px] md:min-h-[500px] rounded-xl absolute top-20 font-mont px-5 py-4">
        
      <IoMdClose onClick={()=>props.zoomOff(false)} className='absolute top-3 right-3 hover:text-red hover:scale-125 text-lg md:text-xl cursor-pointer' />
        <h2 className="font-bold text-xl ">{props.zoomDetails.title}</h2>

        <div>
          <p className="pt-3 min-h-[450px]">{props.zoomDetails.content}</p>
        </div>
        <p className='text-right text-sm font-semibold pt-2'>{props.zoomDetails.dateTime}</p>
      </div>
    </div>
  );
};

export default Edit;
