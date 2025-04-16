import { AuthSigninParam, AuthSignupParam, AuthSignUpResponse, AuthSignInResponse } from "@/app/globalInterface";
import { AuthRepository } from '../repositories/authRepository'

export const signInUseCase = async (
    authRepo: AuthRepository, // define object authentication yang menyimpan banyak function 
    setStorage: (key: string, value: string) => void,
    signInState: (session: string, refreshSession: string) => void,
    body: AuthSigninParam
): Promise<AuthSignInResponse> => {
    const res = await authRepo.signin(body);
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
): Promise<AuthSignUpResponse> => {
    return authRepo.signup(body)
}