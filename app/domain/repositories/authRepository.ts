import { AuthSignupParam } from "@/app/globalInterface";
import { SignInResInterface, SignUpResInterface } from "../entities/User";

export interface AuthRepository {
    signin(username: string, password: string): Promise<SignInResInterface>;
    signup(body: AuthSignupParam): Promise<SignUpResInterface>;
}