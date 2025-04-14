import { SignInResInterface, SignUpResInterface } from "../entities/User";
import { AuthRepository } from '../repositories/authRepository'

export const signInUseCase = (
    authRepo: AuthRepository, // define object authentication yang menyimpan banyak function 
    username: string,
    password: string
): Promise<SignInResInterface> => {
    return authRepo.signin(username, password)
}

export const signUpUseCase = (
    authRepo: AuthRepository,
    username: string,
    email: string,
    password: string,
    role: string
): Promise<SignUpResInterface> => {
    return authRepo.signup(username, email, password, role)
}