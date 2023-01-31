import React, {useState} from 'react';

const ColorPicker = (props) => {
  const [colorChange, setColorChange] = useState(false);
  const colors = ['#fffd8d', '#aed143', '#f49f3f', '#d35595', '#51bcb3'];

  const handleColor = (index) => {
   props.selectColor(colors[index])
  }


  return ( 
  <div>
  <button onClick={() => setColorChange(!colorChange)} className="text-sm text-black/80 font-bold rounded-lg w-[150px] border border-black/40 absolute right-3 top-3 flex justify-center items-center"><span><img className='h-[17px] pr-2' src="https://cdn-icons-png.flaticon.com/512/4508/4508394.png"></img></span>Change Color</button>
          <ul style={{ display: colorChange && 'flex' }} className="hidden bg-black/30 w-[300px] justify-center gap-2 p-2 rounded-lg absolute top-10 right-3">
            {colors.map((item, index) => {
              return (
                <div>
                  <li onClick={()=> handleColor(index)} key={index} className="w-[50px] h-[50px] border-white border border-4 rounded-lg cursor-pointer hover:scale-105" style={{ backgroundColor: item }}></li>
                </div>
              );
            })}

          </ul>
          </div>
  )
  
};

export default ColorPicker;
