import axios from "axios";

const mainURL = "https://walletmyapp.herokuapp.com";

function CreateAccount(body) {
    const promise = axios.post(`${mainURL}/registration`, body);
    return promise;
}

function Login(body) {
    const promise = axios.post(`${mainURL}/login`, body);
    return promise;
}

function Logout(profile) {
    const config = {
        headers: {
            "user": profile.userId
        }
    };
    const promise = axios.delete(`${mainURL}/logout`, config );
    return promise;
}

function GetMovimentationList(profile) {
    const config = {
        headers: {
            "Authorization": profile.token,
            "user": profile.userId
        }
    };
    const promise = axios.get(`${mainURL}/movimentation`, config );
    return promise;
}

function CreateMovimentation(body, profile) {
    const config = {
        headers: {
            "Authorization": profile.token,
            "user": profile.userId
        }
    };
    const promise = axios.post(`${mainURL}/movimentation`, body, config );
    return promise;
}

function DeleteMovimentation(body, profile) {
    const config = {
        headers: {
            "Authorization": profile.token,
            "user": profile.userId,
            "movimentationId": body.movimentationId
        }
    };
    const promise = axios.delete(`${mainURL}/movimentation`, config );
    return promise;
}

export { CreateAccount, Login, Logout, GetMovimentationList, CreateMovimentation, DeleteMovimentation };