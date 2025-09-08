import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { base_url } from '../utils/utils';

// Create Auth Context
const AuthContext = createContext();

// Axios configuration
const API_BASE_URL = base_url;
axios.defaults.withCredentials = true;

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider Component
export default function AuthProvider({ children }) {

    console.log("hit hte auth provider")
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from API
  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_BASE_URL}/user/singleUser`, {
        withCredentials: true
      });
      
      if (response.data) {
        // Extract only the important fields
        const { _id, fullName, email,   role, } = response?.data?.data;
        setUser({ _id, fullName, email,  role });
      }
    } catch (err) {
      console.error('Failed to fetch user:', err);
      setError(err.response?.data?.message || 'Failed to fetch user data');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // Call your logout API if you have one
      // await axios.post(`${API_BASE_URL}/auth/logout`, {}, { withCredentials: true });
      
      // Clear user data from context
      setUser(null);
      setError(null);
    } catch (err) {
      console.error('Logout error:', err);
      setError(err.response?.data?.message || 'Logout failed');
    }
  };

  // Fetch user on component mount
  useEffect(() => {
    fetchUser();
  }, []);

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    user,
    loading,
    error,
    fetchUser,
    logout,
    isAuthenticated: !!user
  }), [user, loading, error]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}