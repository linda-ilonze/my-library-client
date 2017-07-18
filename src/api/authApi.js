
import {URL} from './base';

class AuthApi {
    static login(username,password){
        return fetch(URL + '/users/users/login',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
            body: JSON.stringify({ user:{username,password}})
        }
        )
        .then(response=> {
            return response.json();
        })
        .catch(error=>{
            return error;
        });
    }

    static register(email, username,password){
        return fetch(URL + '/users/users',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
            body: JSON.stringify({ user:{email,username,password}})
        }
        )
        .then(response=> {
            return response.json();
        })
        .catch(error=>{
            return error;
        });
    }

}

export default AuthApi;