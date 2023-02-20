import React from 'react'

const Delete = ({onConfirm, onCancel}) => {




  return (
   <div className='bg-black/80 w-screen h-screen fixed top-0 z-50'>
<div className='flex justify-center items-center w-full h-screen'>
    <div className='bg-slate-400 h-[150px] w-[250px] lg:h-[200px] lg:w-[350px] rounded-xl font-mont flex flex-col justify-evenly items-center'>

    <p className='font-bold text-center '>Delete Note?</p>

	<div className="flex items-center mt-3">
	  <button onClick={()=> onCancel()} className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
		Cancel
	  </button>

	  <button onClick={()=> onConfirm()} className="flex-1 px-4 py-2 ml-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
		Delete
	  </button>
	</div>
    </div>
    </div>
  </div>
  )
}

export default Delete;
