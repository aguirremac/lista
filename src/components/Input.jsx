import React, { useState } from 'react'

const Input = (props) => {
    const [input, setInput] = useState({title:"", content:""})

    const [colorChange, setColorChange]= useState(false);
    const colors = ['#fffd8d', '#aed143', '#f49f3f', '#d35595', '#51bcb3'];

 const handleChange = (e) => {
    const {value, name} = e.target;
    
    setInput((prevValue)=> { 
        return{
        ...prevValue, [name]:value
        }
 })}

const onSubmit = () => {
    props.onAdd(input)
    setInput({title:"", content:""})
}

const [bgColor, setBgColor] = useState('#fffd8d');


const selectColor = item => {
    setBgColor(colors[item])
   
}
 


    return ( 
        <div>
            <div className='font-mont flex justify-center py-3'>
                <div style={{backgroundColor: bgColor }} className='w-[500px] h-[200px] px-4 py-2 shadow-xl relative flex flex-col rounded-xl'>
                    <input onChange={handleChange} name="title" value={input.title} type="text" placeholder="Title" className='w-full h-[50px] bg-transparent font-bold outline-none ' />
                    <textarea onChange={handleChange} name="content" value={input.content} type="text" placeholder="Take a note.." className='w-full h-[100px] bg-transparent outline-none whitespace-pre-wrap' />
                    <button onClick={()=>setColorChange(!colorChange)} className='text-sm text-black/80 font-bold rounded-lg w-[120px] border border-black/40 absolute right-3 top-3 '>Change Color</button>
                    <ul style={{display: colorChange && 'flex'}} className='hidden bg-black/30 w-[300px] justify-center gap-2 p-2 rounded-lg absolute top-10 right-3'>
                       
                        {colors.map((item,index) => {
                          return  <div>
                             <li onClick={()=> selectColor(index)} key={index} className='w-[50px] h-[50px] border-white border border-4 rounded-lg cursor-pointer hover:scale-105' style={{backgroundColor: item }}></li> 
                             </div>
                        })} 
                    </ul>
                    <button onClick={onSubmit} className='rounded-full text-sm font-bold text-white bg-yellow-500 w-[70px] h-[50px] absolute right-5 -bottom-3 cursor-pointer hover:scale-105'>Add</button>
                </div>



            </div>



        </div>




     );
}

export default Input;
