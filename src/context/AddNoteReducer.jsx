const AddNoteReducer = (state, action) => {
    switch (action.type) {
        case "DELETE_NOTE": {
            return { 
                updateNote: action.payload //assingning to App.js user variable
            }
        }
        case "ADD_NOTE" : {
            return {
                updateNote: action.payload,
            }
        }
        default:
            return state;
    } 
    
};

export default AuthReducer;