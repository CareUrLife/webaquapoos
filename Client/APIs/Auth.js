
class Auth {
    static authenticateUser(token, userInfo) {
        localStorage.setItem('token', token);
        localStorage.setItem('userInfo', userInfo);
    }

    static isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    static deauthenticateUser() {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
    }

    static getToken() {
        return localStorage.getItem('token');
    }
}


export default Auth;
