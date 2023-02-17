import AuthReducer from "./AuthReducer";
import {createContext, useEffect, useReducer} from 'react';



const INITIAL_STATE =   {
    loggedUser: JSON.parse(localStorage.getItem("user")) || null,

};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
        const [state, dispatch] = useReducer (AuthReducer, INITIAL_STATE);


    useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.loggedUser));
}, [state.loggedUser]);


    return (
        <AuthContext.Provider value={{loggedUser: state.loggedUser, dispatch}}>
        {children}
        </AuthContext.Provider>
    )
}