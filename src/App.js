import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Input from './components/Input';
import { useState } from 'react';
import Landing from './components/Landing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from './components/Edit';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import {  Route, Link, Routes} from 'react-router-dom';
import AuthListen from './components/Auth/AuthListen';
import Name from './components/Auth/Name';




const App = () => {
  const [notes, setNotes] = useState([]);
  const [addNote, setAddNote] = useState(false);
  const [seeMore, setSeeMore] = useState([]);
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [user, setUser] = useState({});


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
    
  };

  const zoomOff = (x) => {
    setIsSeeMore(x);
  };

  const handleCurrentUser = (currentUser) => {
    setUser(currentUser)
    
  }
  // console.log(user.displayName)

 




  return (
    
    <div>
    

      <Routes>
        <Route path="/" element={<Landing /> } />
        <Route path="/signin" element={<SignIn /> } />
        <Route path="/signup" element={<SignUp /> } /> 
        <Route path="/enterName" element={<Name /> } /> 
        <Route path='/dashboard' element={ <>
         <Header handleClick={showInput} user={user} />
         <AuthListen handleCurrentUser={handleCurrentUser}/>
         {addNote && <Input onAdd={handleAdd} handleClick={showInput} />}
         <Note
                notes={notes}
                onDelete={handleDelete}
                clickSeeMore={clickSeeMore}
              />
              {isSeeMore && <Edit zoomDetails={seeMore} zoomOff={zoomOff} />}
              <Footer />
              <ToastContainer /> 
         </>} />
         <Route path="/input" element={<>
         
         {/* <Header handleClick={showInput} displayName={user.displayName}  /> */}
         
         
         
          </>} />
             
             

      
         
          
      </Routes>
            
    </div>
   
  )
};


export default App;
