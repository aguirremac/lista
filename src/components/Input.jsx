import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import Header from './Header';
import { IoMdClose } from 'react-icons/io';


const Input = (props) => {
  
  const [input, setInput] = useState({ title: '', content: '', noteColor:'#fffd8d'});
  const [bgColor, setBgColor] = useState('#fffd8d');
  
  

  

  const handleChange = (e) => {
    e.preventDefault()
    const { value, name } = e.target;

    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const onSubmit = () => {
    props.onAdd(input);
    setInput({ title: '', content: '', noteColor: input.noteColor});
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

 
 
  console.log(input)

  return (
    <div>
        
      <div className="font-mont justify-center py-3 flex absolute top-[100px] right-10 z-10 drop-shadow-2xl">
        <div
          style={{ backgroundColor: bgColor }}
          className="w-[500px] h-[400px] px-4 py-2  relative flex flex-col rounded-xl "
        >
            <IoMdClose size={25} onClick={props.handleClick} className="absolute right-3 cursor-pointer hover:text-red-600"/>
          <input
            onChange={handleChange}
            name="title"
            value={input.title}
            type="text"
            placeholder="Title"
            className="w-full h-[50px] bg-transparent font-bold outline-none placeholder-black/50 text-xl"
          />
          <textarea
            onChange={handleChange}
            name="content"
            value={input.content}
            type="text"
            placeholder="Take a note.."
            className="w-full h-[300px] bg-transparent outline-none whitespace-pre-wrap placeholder-black/50"
          />
          <ColorPicker onClick={handleChange} selectColor = {changeColor} name='noteColor' />
          <button
            onClick={onSubmit}
            className="rounded-full text-lg font-bold text-white bg-yellow-500 w-[70px] h-[50px] absolute right-5 -bottom-3 cursor-pointer hover:scale-105"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
