const BASE_URL = 'http://192.168.0.115:3000';

export interface AuthSignInResponse {
  status: number;
  message: string;
  accessToken: string;
  refreshToken: string;
}

export interface AuthSignUpResponse {
  status: number;
  message: string;
}

export const signinApi = async(username: string, password: string): Promise<AuthSignInResponse> => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password}),
  });
  const data = await res.json();
  return {...data, status: res.status}
}

export const signupApi = async(email: string, username: string, password: string, role: string): Promise<AuthSignUpResponse> => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, email, password, role }),
  });
  const data = await res.json();
  return {...data, status: res.status}
}