'use client';

import { UserType } from '@/features/auth/type.auth';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
type UserContextType = {
  user: UserType | null;
  loading: boolean;
  addUser: (user: UserType) => void;
  removeUser: () => void;
};

const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  function addUser(user: UserType) {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
  function removeUser() {
    setUser(null);
    localStorage.removeItem('user');
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider
      value={{ user, addUser, removeUser, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
