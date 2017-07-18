
const defaultState = {
    loginDone :false,
    token : null
};
export default (state= defaultState,action) =>{
    switch (action.type) {
       case 'LOGIN_SUCCESS':
       case 'REGISTER_SUCCESS' :
       return {
           ...state,
            currentUser:action.user,
            errors: action.errors,
            loginDone : true,
            token:action.user.token
        };
        case 'UPDATE_FIELD_AUTH':
            return {...state, [action.key]:action.value};
        default:
           return state;
    }
} 