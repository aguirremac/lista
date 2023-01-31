import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Input from './components/Input';
import { useState } from 'react';




const App = () => {

const [notes, setNotes]= useState ([])
const [addNote, setAddNote] = useState(false)

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



  return (
    <div>
      <Header handleClick={showInput}/>
      <div style={{opacity: addNote ? 0.8 : 0}} className="bg-black w-full h-screen">
      {addNote && <Input onAdd={handleAdd} handleClick={showInput}/>}
      <Note notes={notes} onDelete={handleDelete} />
      <Footer />
      </div>
      </div>
    
  );
};

export default App;
