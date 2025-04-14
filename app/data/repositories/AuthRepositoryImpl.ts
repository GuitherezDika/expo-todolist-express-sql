import { SignInResInterface, SignUpResInterface } from "@/app/domain/entities/User";
import { AuthRepository } from "@/app/domain/repositories/authRepository";
import { signinApi, signupApi } from "../datasources/authApi";


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
    signup: async (email: string, username: string, password: string, role: string): Promise<SignUpResInterface> => {
        const res = await signupApi(email, username, password, role);
        return {
            status: res.status,
            message: res.message
        }
    }
}