import React, {useState} from 'react';

const ColorPicker = (props) => {
  const [colorChange, setColorChange] = useState(false);
  const colors = ['#fffd8d', '#aed143', '#f49f3f', '#d35595', '#51bcb3'];

  const handleColor = (index) => {
   props.selectColor(colors[index])
  }


  return ( 
  <div>
  <button onClick={() => setColorChange(!colorChange)} className="text-[10px] md:text-sm text-black/80 font-bold rounded-lg w-[85px] md:w-[150px] border border-black/40 absolute left-1 md:left-3 bottom-1 md:bottom-3 flex justify-center items-center"><span><img className='h-[17px] md:pr-2 pl-1' src="https://cdn-icons-png.flaticon.com/512/4508/4508394.png"></img></span>Change Color</button>
          <ul style={{ display: colorChange && 'flex' }} className="hidden bg-black/30 md:w-[300px] justify-center gap-2 p-2 rounded-lg absolute bottom-10 left-3">
            {colors.map((item, index) => {
              return (
                <div>
                  <li onClick={()=> handleColor(index)} key={index} className="w-[25px] h-[25px] md:w-[50px] md:h-[50px] border-white border border-4 rounded-lg cursor-pointer hover:scale-105" style={{ backgroundColor: item }}></li>
                </div>
              );
            })}

          </ul>
          </div>
  )
  
};

export default ColorPicker;
