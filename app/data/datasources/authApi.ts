import { AuthSigninParam, AuthSignInResponse, AuthSignoutParam, AuthSignoutResponse, AuthSignupParam, AuthSignUpResponse } from "@/app/globalInterface";

const BASE_URL = 'http://10.7.129.233:3000';

export const signinApi = async(body: AuthSigninParam): Promise<AuthSignInResponse> => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username: body.username, password: body.password}),
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

export const signoutApi = async(body: AuthSignoutParam): Promise<AuthSignoutResponse> => {
  const res  = await fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${body.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      refreshToken: body.refreshToken
    })
  })
  const data = await res.json();
  return {...data, status: res.status}
}