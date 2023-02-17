import Header from './components/Header';
import Note from './components/Note';
import { useContext } from 'react';
import Landing from './components/Landing';
import { ToastContainer } from 'react-toastify';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import {  Route, Routes, Navigate} from 'react-router-dom';
// import AuthListen from './components/auth/AuthListen';
import Name from './components/auth/Name';
import { AuthContext } from './context/AuthContext';






const App = () => {
  
 

 

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
        
         <Header  />
         {/* <AuthListen /> */}
         
              
              <ToastContainer /> 
         </> </RequireAuth>} />
        

          
      </Routes>
            
    </div>
   
  )
};


export default App;
