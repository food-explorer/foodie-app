import { useState, useEffect } from 'react';

type IUser = {
  name: string;
}
const useAuth = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const token = 'weuwnew';
  const isLoggedIn = !!token;

  useEffect(() => {
    // fetxh user here;
    setUser({ name: 'Tunde Nasri' });
  }, []);

  return [isLoggedIn, user] as const;
};

export default useAuth;
