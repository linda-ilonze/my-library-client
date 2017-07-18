export const loginSucess = (user) => {
    return ({
        type : 'LOGIN_SUCCESS',
        user: user
    });
}
export const registerSucess = (user) => {
    return ({
        type : 'REGISTER_SUCCESS',
        user: user
    });
}

export const logoutSuccess = (user) => {
    return({
        type: 'LOGOUT_SUCCESS',
        user:user
    })
}