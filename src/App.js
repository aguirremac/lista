import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Input from './components/Input';
import { useState } from 'react';
import Landing from './components/Landing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from './components/Edit';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import { BrowserRouter, Routes } from 'react-router-dom';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [addNote, setAddNote] = useState(false);
  const [start, setStart] = useState(false);
  const [seeMore, setSeeMore] = useState([]);
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [register, setRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    setSeeMore(notes[idNumber]);
    setIsSeeMore(true);
    console.log(isSeeMore);
  };

  const zoomOff = (x) => {
    setIsSeeMore(x);
  };

  const handleSignUp = () => {
    setRegister(!register);
  };

  const handleAuth = (userDetails) => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
  };

  const handleUserDetails= (userDetails) => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
  };

  return (
    <div>
      {!start ? (
        <Landing handleStart={handleStart} />
      ) : (
        <>
          
          
          {!isLoggedIn ? (
            <>
              {' '}
              {!register ? (
                <SignIn handleSignUp={handleSignUp} handleUserDetails={handleUserDetails} />
              ) : (
                <SignUp handleSignUp={handleSignUp} handleUserDetails={handleUserDetails} />
              )}{' '}
            </>
          ) : (
            <>
              <Header handleClick={showInput} addNoteStatus={addNote} />
              {addNote && <Input onAdd={handleAdd} handleClick={showInput} />}
              <Note
                notes={notes}
                onDelete={handleDelete}
                clickSeeMore={clickSeeMore}
              />
              {isSeeMore && <Edit zoomDetails={seeMore} zoomOff={zoomOff} />}
              <Footer />
              <ToastContainer />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
