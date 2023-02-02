import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import Header from './Header';
import { IoMdClose } from 'react-icons/io';


const Input = (props) => {
  
  const [input, setInput] = useState({ title: '', content: '', noteColor:'#fffd8d', dateTime: ""});
  const [bgColor, setBgColor] = useState('#fffd8d');
  
  

  

  const handleChange = (e) => {
    e.preventDefault()
    const { value, name } = e.target;
    const date = new Date().toLocaleString();

    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value, dateTime: date
      };
    });
  };

  
  const changeColor = (newColor) => {

    setBgColor(newColor);

    setInput((prevValue) => {
        return {
          ...prevValue,
          noteColor: newColor
        };
      });
    
  };


  const onSubmit = () => {
    props.onAdd(input);
    setInput({ title: '', content: '', noteColor: input.noteColor, dateTime:''});
  };




  return (
    <div>
        
      <div className="font-mont z-10 drop-shadow-2xl w-full h-screen absolute">
        {/* backdrop */}
        <div className="w-full h-screen bg-black/80">
        </div>
        
        <div
          style={{ backgroundColor: bgColor }}
          className="w-[200px] h-[250px] md:w-[400px] md:h-[500px] px-4 py-2  absolute flex flex-col rounded-xl right-5 top-5"
        >
            <IoMdClose size={25} onClick={props.handleClick} className="absolute right-3 cursor-pointer hover:text-red-600"/>
          <input
            onChange={handleChange}
            name="title"
            value={input.title}
            type="text"
            placeholder="Title"
            className="w-full h-[25px] md:h-[50px] bg-transparent font-bold outline-none placeholder-black/50 text-xs md:text-xl"
          />
          <textarea
            onChange={handleChange}
            name="content"
            value={input.content}
            type="text"
            placeholder="Take a note.."
            className="w-full h-[175px] md:h-[300px] bg-transparent outline-none whitespace-pre-wrap placeholder-black/50 text-[12px] md:text-lg"
          />
          <ColorPicker onClick={handleChange} selectColor = {changeColor} name='noteColor' />
          <button
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
