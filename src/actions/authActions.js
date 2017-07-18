import AuthApi from '../api/authApi';
import {loginSucess,registerSucess} from './../actionCreators/authActionCreators';

const saveAuth = (user) => {
      window.localStorage.setItem('jwt', user.token);
}

const removeAuth = () => {    
    window.localStorage.setItem('jwt', '');
}

export const login = (username,password) => {
    return (dispatch) => {
        return AuthApi.login(username,password)
        .then(response =>{
            saveAuth(response.user);
            dispatch(loginSucess(response));
        });
    }
};

export const register = (email, username, password) =>{
    return (dispatch) => {

        return AuthApi.register(email,username,password)
        .then(response => {
            saveAuth(response.user);
            dispatch(registerSucess(response));
        });

    }
}