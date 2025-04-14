import { SignInResInterface, SignUpResInterface } from "../entities/User";

export interface AuthRepository {
    signin(username: string, password: string): Promise<SignInResInterface>;
    signup(username: string, email: string, password: string, role: string): Promise<SignUpResInterface>;
}