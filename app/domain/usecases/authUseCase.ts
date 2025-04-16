import { AuthSignupParam } from "@/app/globalInterface";
import { SignInResInterface, SignUpResInterface } from "../entities/User";
import { AuthRepository } from '../repositories/authRepository'

export const signInUseCase = async (
    authRepo: AuthRepository, // define object authentication yang menyimpan banyak function 
    setStorage: (key: string, value: string) => void,
    signInState: (session: string, refreshSession: string) => void,
    username: string,
    password: string
): Promise<SignInResInterface> => {
    const res = await authRepo.signin(username, password);
    if (res.accessToken || res.refreshToken) {
        signInState(res.accessToken, res.refreshToken);
        setStorage('session', res.accessToken);
        setStorage('refreshSession', res.refreshToken);
    };
    return res;
}

export const signUpUseCase = (
    authRepo: AuthRepository,
    body: AuthSignupParam
): Promise<SignUpResInterface> => {
    return authRepo.signup(body)
}