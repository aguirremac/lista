import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Input from './components/Input';
import { useState } from 'react';
import Landing from './components/Landing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {

const [notes, setNotes]= useState ([])
const [addNote, setAddNote] = useState(false)
const [start, setStart] = useState(false);

const handleAdd = (input) => {
  setNotes(prevNotes => {
    return [
      ...prevNotes, input
    ]
  }); notify()
}
 
console.log(notes);

  const handleDelete = (idNumber) => {
    console.log(idNumber)
    setNotes((prevNotes => {
       return prevNotes.filter((item,index) =>{
         return index !== idNumber       })
     }))
   
   }


   const showInput = () => {
    setAddNote(!addNote)
   }


  const  handleStart = () => {
    setStart(true)
  }

  // toastify
 
  const notify = () => {
    toast.success('Note Added!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }





  return (
    <div >
      {!start && <Landing onClick ={handleStart}/>}
      {start && <Header handleClick={showInput} addNoteStatus={addNote}/> }
      {addNote && <Input onAdd={handleAdd} handleClick={showInput}/>}
      {start &&  <Note notes={notes} onDelete={handleDelete}/> }
      <Footer />
      <ToastContainer /> 
      </div>
      
    
  );
};

export default App;
