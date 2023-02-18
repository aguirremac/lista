import React, { useContext, useState } from 'react';
import ColorPicker from './ColorPicker';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { IoMdClose } from 'react-icons/io';
import { AuthContext } from '../context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Input = ({onAddNoteClick, newNote}) => {
  const [input, setInput] = useState({
    title: '',
    content: '',
    noteColor: '#fffd8d',
    dateTime: '',
  });
  const [bgColor, setBgColor] = useState('#fffd8d');

 

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    const date = new Date().toLocaleString();

    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
        dateTime: date,
      };
    });
  };

  const changeColor = (newColor) => {
    setBgColor(newColor);

    setInput((prevValue) => {
      return {
        ...prevValue,
        noteColor: newColor,
      };
    });
  };

  // toastify

  const notify = () => {
    toast.success('Note Added!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const { loggedUser } = useContext(AuthContext);

  const onSubmit = async () => {
    notify();
    newNote(input)
    await addDoc(collection(db, 'notes'), { ...input, userId: loggedUser.uid });

    setInput({
      title: '',
      content: '',
      noteColor: input.noteColor,
      dateTime: '',
    });
  };




  return (
    <div>
      
      <div className="font-mont drop-shadow-2xl w-full h-screen absolute top-0 z-30  ">
        {/* backdrop */}
        <div className="w-full h-screen bg-black/80  overflow-auto "></div>

        <div
          style={{ backgroundColor: bgColor }}
          className="w-[300px] h-[400px] md:w-[500px] md:h-[700px] px-4 py-2  absolute flex flex-col rounded-xl right-5 top-24"
        >
          <IoMdClose
            size={25}
            onClick={onAddNoteClick}
            className="absolute right-3 cursor-pointer hover:text-red-600"
          />
          <input
            onChange={handleChange}
            name="title"
            value={input.title}
            type="text"
            placeholder="Title"
            maxlength="50"
            className="w-full h-[25px] md:h-[50px] bg-transparent font-bold outline-none placeholder-black/50 text-xs md:text-xl"
          />
          <textarea
            onChange={handleChange}
            name="content"
            value={input.content}
            type="text"
            placeholder="Take a note.."
            className="w-full h-[175px] md:h-[600px] bg-transparent outline-none whitespace-pre-wrap placeholder-black/50 text-[12px] md:text-lg"
          />
          <ColorPicker
            onClick={handleChange}
            selectColor={changeColor}
            name="noteColor"
          />
          <button
            disabled={!input.content || !input.title}
            onClick={onSubmit}
            className="rounded-full text-xs md:text-lg font-bold text-white bg-yellow-500 w-[50px] h-[35px] md:w-[70px] md:h-[50px] absolute right-5 -bottom-3 cursor-pointer hover:scale-105"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
