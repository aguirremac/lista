import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Input from './components/Input';
import { useState } from 'react';
import Landing from './components/Landing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from './components/Edit';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [addNote, setAddNote] = useState(false);
  const [start, setStart] = useState(false);
  const [seeMore, setSeeMore] = useState([]);
  const [isSeeMore, setIsSeeMore] = useState(false)
  

  const handleAdd = (input) => {
    setNotes((prevNotes) => {
      return [...prevNotes, input];
    });
    notify();
  };



  const handleDelete = (idNumber) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== idNumber;
      });
    });
  };

  const showInput = () => {
    setAddNote(!addNote);
  };

  const handleStart = () => {
    setStart(true);
  };

  // toastify

  const notify = () => {
    toast.success('Note Added!', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const clickSeeMore = (idNumber) => {
    setSeeMore( notes[idNumber])
    setIsSeeMore(true)
    console.log(isSeeMore)
  };

  const zoomOff = (x) => {
    setIsSeeMore(x)
  }

  return (
    <div>
      
      {!start ? <Landing onClick={handleStart} /> : ( <>

      
      <Header handleClick={showInput} addNoteStatus={addNote} />
      {addNote && <Input onAdd={handleAdd} handleClick={showInput} />}
       <Note
          notes={notes}
          onDelete={handleDelete}
          clickSeeMore={clickSeeMore}
        />
      {isSeeMore  && <Edit zoomDetails = {seeMore} zoomOff={zoomOff} />}
      <Footer />
      <ToastContainer />
      </>)}
    
    </div>
  );
};

export default App;
