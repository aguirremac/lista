const AddNoteReducer = (state, action) => {
    switch (action.type) {
        case "ADDNOTE": {
            return { 
                loggedUser: action.payload //assingning to App.js user variable
            }
        }
        case "CLOSENOTE" : {
            return {
                loggedUser: null,
            }
        }
        default:
            return state;
    } 
    
};

export default AuthReducer;