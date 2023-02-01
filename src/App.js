import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Input from './components/Input';
import { useState } from 'react';
import Landing from './components/Landing';




const App = () => {

const [notes, setNotes]= useState ([])
const [addNote, setAddNote] = useState(false)
const [start, setStart] = useState(false);

const handleAdd = (input) => {
  setNotes(prevNotes => {
    return [
      ...prevNotes, input
    ]
  })}
 


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


  return (
    <div >
      {!start && <Landing onClick ={handleStart}/>}
      {start && <Header handleClick={showInput} addNoteStatus={addNote}/> }
      {addNote && <Input onAdd={handleAdd} handleClick={showInput}/>}
      {start &&  <Note notes={notes} onDelete={handleDelete}/> }
      <Footer /> 
      </div>
      
    
  );
};

export default App;
