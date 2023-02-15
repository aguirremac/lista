const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            return { 
                loggedUser: action.payload //assingning to App.js user variable
            }
        }
        case "LOGOUT" : {
            return {
                loggedUser: null,
            }
        }
        default:
            return state;
    } 
    
};

export default AuthReducer;