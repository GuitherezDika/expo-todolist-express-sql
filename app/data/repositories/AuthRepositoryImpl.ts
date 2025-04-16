import { SignInResInterface, SignUpResInterface } from "@/app/domain/entities/User";
import { AuthRepository } from "@/app/domain/repositories/authRepository";
import { signinApi, signupApi } from "../datasources/authApi";
import { AuthSignupParam, AuthSignUpResponse } from "@/app/globalInterface";


export const AuthRepositoryImpl: AuthRepository = {
    signin: async (username: string, password: string): Promise<SignInResInterface> => {
        const res = await signinApi(username, password);
        return {
            status: res.status,
            message: res.message,
            accessToken: res.accessToken,
            refreshToken: res.refreshToken
        }
    },
    signup: async (body: AuthSignupParam): Promise<AuthSignUpResponse> => {
        const res = await signupApi({
            username: body.username, 
            email: body.email, 
            password: body.password, 
            role: body.role
        });
        return {
            status: res.status,
            message: res.message
        }
    }
}