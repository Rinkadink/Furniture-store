import { login, logout } from '@/services/authService';
import { useRouter } from 'next/navigation';
import { createContext, useState, useContext, useEffect } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  authenticate: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<boolean>;
  signout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  authenticate: async ({ email, password }) => {
    return false;
  },
  signout: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const authenticate = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    const data = await login(email, password);
    window.localStorage.setItem('accessToken', data.access_token);
    window.localStorage.setItem('refreshToken', data.refresh_token);
    setIsAuthenticated(true);
    return true;
  };

  const signout = async () => {
    await logout();
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    setIsAuthenticated(false);
    router.push('/login');
  };

  useEffect(() => {
    // Check if running on the client side before accessing window.localStorage
    if (typeof window !== 'undefined') {
      setIsAuthenticated(!!window.localStorage.getItem('accessToken'));
    }
  }, []);

  const val: AuthContextType = { isAuthenticated, authenticate, signout };

  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
