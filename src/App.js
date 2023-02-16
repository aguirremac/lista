import Header from './components/Header';
import Note from './components/Note';
import Input from './components/Input';
import { useContext, useState } from 'react';
import Landing from './components/Landing';
import { ToastContainer } from 'react-toastify';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import {  Route, Routes, Navigate} from 'react-router-dom';
// import AuthListen from './components/auth/AuthListen';
import Name from './components/auth/Name';
import { AuthContext } from './context/AuthContext';






const App = () => {
  
  const [addNote, setAddNote] = useState(false);
  

  const showInput = () => {
    setAddNote(!addNote);
  };

 

  //adding RequireAuth to not access everything

  const {loggedUser} = useContext(AuthContext);

  const RequireAuth = ({children}) => {
    return loggedUser ? children : <Navigate to="/login" />
  }

  // console.log(loggedUser);
 




  return (
    
    <div>
    

      <Routes>
        <Route path="/" element={<Landing /> } />
        <Route path="/login" element={<SignIn /> } />
        <Route path="/register" element={<SignUp /> } /> 
        <Route path="/enterName" element={<Name /> } /> 
        
        <Route path='/dashboard' element={ <RequireAuth> <>
        
         <Header handleClick={showInput}  />
         {/* <AuthListen /> */}
         <Note />
         {addNote && <Input  handleClick={showInput} />}
              
              <ToastContainer /> 
         </> </RequireAuth>} />
        

          
      </Routes>
            
    </div>
   
  )
};


export default App;
