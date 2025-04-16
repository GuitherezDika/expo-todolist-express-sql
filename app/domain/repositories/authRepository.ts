import { AuthSigninParam, AuthSignInResponse, AuthSignoutParam, AuthSignoutResponse, AuthSignupParam, AuthSignUpResponse } from "@/app/globalInterface";
export interface AuthRepository {
    signin(body: AuthSigninParam): Promise<AuthSignInResponse>;
    signup(body: AuthSignupParam): Promise<AuthSignUpResponse>;
    signout(body: AuthSignoutParam): Promise<AuthSignoutResponse>;
}