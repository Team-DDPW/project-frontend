import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { useRouter } from 'next/router';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + 'api/token/';
const registerUrl = baseUrl + 'accounts/register';

const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error('You forgot AuthProvider!');
  return auth;
}

export function AuthProvider(props) {
  const [state, setState] = useState({
    tokens: null,
    user: null,
    login,
    logout,
    signup,
  });
  const router = useRouter();

  async function login(email, password) {
    const response = await axios.post(tokenUrl, { email, password });
    console.log('line 25:', response.data);
    const decodedAccess = await jwt.decode(response.data.access);
    const newState = {
      tokens: response.data,
      user: {
        email: decodedAccess.email,
        id: decodedAccess.user_id,
      },
    };
    setState((prevState) => ({ ...prevState, ...newState }));
    console.log('state.tokens', state.tokens);
    router.push('/');
  }

  async function signup(email, password, first_name, last_name) {
    console.log('line 45: ', email, password, first_name, last_name);
    console.log('register url:', registerUrl)
    const response = await axios.post(registerUrl, {
      email,
      password,
      // first_name,
      // last_name,
    });
    console.log('response.data: ', response.data);
  }

  function logout() {
    console.log('line 42', state.tokens);
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
    console.log('line 48', state.tokens);
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
