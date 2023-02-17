import {createContext, useEffect, useReducer} from 'react';
import NoteReducer from "./RefreshNoteNoteReducer";



const INITIAL_STATE =   {
    refreshNotes: false;

};

export const RefreshNoteContext = createContext(INITIAL_STATE);

export const RefreshNoteProvider = ({children}) => {
        const [state, dispatch] = useReducer (NoteReducer, INITIAL_STATE);


    useEffect(() => {
    "user", state.loggedUser;
}, [state.loggedUser]);


    return (
        <RefreshNoteContext.Provider value={{refreshNotes: state.refreshNotes, dispatch}}>
        {children}
        </RefreshNoteContext.Provider>
    )
}