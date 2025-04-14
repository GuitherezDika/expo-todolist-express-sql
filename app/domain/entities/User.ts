export interface SignUpResInterface {
    status: number;
    message: string;
}

export interface SignInResInterface {
    status: number;
    message: string;
    accessToken: string;
    refreshToken: string;
}