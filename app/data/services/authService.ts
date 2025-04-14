import { SignInInterface, SignUpInterface } from "@/app/domain/entities/User";

const URL = 'http://192.168.0.106:3000';

export const signInUser = async (body: SignInInterface): Promise<T> => {
    const response = await fetch(`${URL}/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    });
    return response;
};

export const signUpUser = async (body: SignUpInterface): Promise<T> => {
    const response = await fetch(`${URL}/auth/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    });
    return response;
};


const authService = {
    signInUser,
    signUpUser
}

export default authService;