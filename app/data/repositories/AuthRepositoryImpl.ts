import { AuthRepository } from "@/app/domain/repositories/authRepository";
import { signinApi, signoutApi, signupApi } from "../datasources/authApi";
import { AuthSigninParam, AuthSignInResponse, AuthSignoutParam, AuthSignoutResponse, AuthSignupParam, AuthSignUpResponse } from "@/app/globalInterface";


export const AuthRepositoryImpl: AuthRepository = {
    signin: async (body: AuthSigninParam): Promise<AuthSignInResponse> => {
        const res = await signinApi(body);
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
    },
    signout: async (body: AuthSignoutParam): Promise<AuthSignoutResponse> => {
        const res = await signoutApi(body);
        return {
            status: res.status,
            message: res.message
        }
    }
}