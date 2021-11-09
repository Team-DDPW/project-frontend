import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { useRouter } from 'next/router';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + '/api/token/';

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
  });
  const router = useRouter();

  async function login(email, password) {
    const response = await axios.post(tokenUrl, { email, password });
    console.log('line 25:', response.data);
    const decodedAccess = jwt.decode(response.data.access);
    const newState = {
      tokens: response.data,
      user: {
        email: decodedAccess.email,
        id: decodedAccess.user_id,
      },
    };
    setState((prevState) => ({ ...prevState, ...newState }));
    router.push('/');
  }

  function logout() {
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
