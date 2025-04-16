import { AuthSigninParam, AuthSignInResponse, AuthSignupParam, AuthSignUpResponse } from "@/app/globalInterface";
export interface AuthRepository {
    signin(body: AuthSigninParam): Promise<AuthSignInResponse>;
    signup(body: AuthSignupParam): Promise<AuthSignUpResponse>;
}