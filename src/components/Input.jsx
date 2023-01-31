import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

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
      <div className="font-mont flex justify-center py-3">
        <div
          style={{ backgroundColor: bgColor }}
          className="w-[500px] h-[200px] px-4 py-2 shadow-xl relative flex flex-col rounded-xl "
        >
          <input
            onChange={handleChange}
            name="title"
            value={input.title}
            type="text"
            placeholder="Title"
            className="w-full h-[50px] bg-transparent font-bold outline-none placeholder-black/50"
          />
          <textarea
            onChange={handleChange}
            name="content"
            value={input.content}
            type="text"
            placeholder="Take a note.."
            className="w-full h-[100px] bg-transparent outline-none whitespace-pre-wrap placeholder-black/50"
          />
          <ColorPicker onClick={handleChange} selectColor = {changeColor} name='noteColor' />
          <button
            onClick={onSubmit}
            className="rounded-full text-sm font-bold text-white bg-yellow-500 w-[70px] h-[50px] absolute right-5 -bottom-3 cursor-pointer hover:scale-105"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
