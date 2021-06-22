import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';

export type IUser = {
  name: string;
  image: string;
  username: string;
}

type AuthData = {
  data: IUser | null;
  isLoggedIn: boolean;
  // eslint-disable-next-line no-unused-vars
  loginUser: (x: IUser) => void;
}
const authContextDefaultValues: AuthData = {
  data: {
    name: '',
    image: '',
    username: '',
  },
  isLoggedIn: false,
  loginUser: () => {},
};

export const AuthContext = React.createContext<AuthData>(authContextDefaultValues);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const [cookies] = useCookies(['jwt_token']);

  const token = cookies.jwt_token;

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  useQuery('profile', async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(res.data.data);
    return res.data;
  }, { enabled: !!token });

  const loginUser = (loginData: IUser) => {
    setData(loginData);
    setIsLoggedIn(true);
  };

  return (
    <>
      <AuthContext.Provider value={{ data, isLoggedIn, loginUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => React.useContext(AuthContext);
export default AuthProvider;

export const getServerSideProps = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('thanks');
    }, 30000);
  });

  return {
    props: {},
  };
};
