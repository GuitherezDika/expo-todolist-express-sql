interface AuthSignInResponse {
    status: number;
    message: string;
    accessToken: string;
    refreshToken: string;
}

interface AuthSignUpResponse {
    status: number;
    message: string;
}

interface AuthSignoutResponse {
    status: number;
    message: string;
}

interface AuthSigninParam {
    username: string;
    password: string
}

interface AuthSignupParam {
    email: string;
    username: string;
    password: string;
    role: string
}

interface AuthSignoutParam {
    token?: string | null;
    refreshToken?: string | null;
}

export {
    AuthSignInResponse,
    AuthSignUpResponse,
    AuthSignoutResponse,
    AuthSigninParam,
    AuthSignoutParam,
    AuthSignupParam
}