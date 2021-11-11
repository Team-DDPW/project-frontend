import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { useRouter } from 'next/router';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + '/api/token/';
const registerUrl = baseUrl + '/accounts/api/register';

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
    register,
  });
  const router = useRouter();

  async function login(email, password) {
    const response = await axios.post(tokenUrl, { email, password });
    const decodedAccess = jwt.decode(response.data.access);
    console.log('line30:', decodedAccess);
    const newState = {
      tokens: response.data,
      user: {
        email: decodedAccess.email,
        id: decodedAccess.user_id,
      },
    };
    setState((prevState) => ({ ...prevState, ...newState }));
    console.log('a user has logged in');
    router.push('/');
  }

  function logout() {
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
    router.push('/');
  }

  async function register(email, password) {
    const response = await axios.post(registerUrl, { email, password });
    login(email, password);
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
