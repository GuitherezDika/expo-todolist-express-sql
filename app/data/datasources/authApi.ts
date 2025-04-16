import { AuthSignInResponse, AuthSignoutResponse, AuthSignupParam, AuthSignUpResponse } from "@/app/globalInterface";

const BASE_URL = 'http://10.7.129.233:3000';

export const signinApi = async(username: string, password: string): Promise<AuthSignInResponse> => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password}),
  });
  const data = await res.json();
  return {...data, status: res.status}
}

export const signupApi = async(signupParam: AuthSignupParam): Promise<AuthSignUpResponse> => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ 
      username: signupParam.username, 
      email: signupParam.email, 
      password: signupParam.password, 
      role: signupParam.role 
    }),
  });
  const data = await res.json();
  return {...data, status: res.status}
}

export const signoutApi = async(token: string, refreshToken: string): Promise<AuthSignoutResponse> => {
  const res  = await fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ refreshToken })
  })
  const data = await res.json();
  return data;
}