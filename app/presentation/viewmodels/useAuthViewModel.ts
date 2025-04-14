import { AuthRepositoryImpl } from "@/app/data/repositories/AuthRepositoryImpl"
import { SignInResInterface, SignUpResInterface } from "@/app/domain/entities/User"
import { signInUseCase, signUpUseCase } from "@/app/domain/usecases/authUseCase"

export const useAuthViewModel = () => {// view model ini -> langsung di run pada screen;
    const signin = async (username: string, password: string): Promise<SignInResInterface> => {
        return await signInUseCase(AuthRepositoryImpl, username, password)
    };

    const signup = async (email: string, username: string, password: string, role: string): Promise<SignUpResInterface> => {
        return await signUpUseCase(AuthRepositoryImpl, email, username, password, role)
    };

    return {
        signin,
        signup
    }
}