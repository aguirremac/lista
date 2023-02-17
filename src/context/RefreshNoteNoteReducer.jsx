import React, { createContext, useReducer } from 'react';


const NoteReducer = (state, action) => {
  switch (action.type) {
    case 'REFRESH_NOTES':
      return {
        ...state,
        refreshNotes: true,
      };
    default:
      return state;
  }
};

export default NoteReducer;