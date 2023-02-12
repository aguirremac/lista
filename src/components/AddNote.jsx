import React from 'react';
import {BsPlusSquareDotted} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const style = {
    container: `flex items-center justify-center h-screen w-full cursor-pointer`,
    addNoteDiv: `flex  items-center gap-5 md:text-5xl text-black/20 font-mont font-bold`,
}

const AddNote = () => {

const navigate = useNavigate();

const handleClick = () => {
    navigate('/input')
}

  return (
    <div className={style.container} onClick={handleClick}>
        <div className={style.addNoteDiv}><BsPlusSquareDotted /> <p>Add Note</p></div>
      
    </div>
  )
}

export default AddNote;
