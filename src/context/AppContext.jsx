import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  // Theme State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Auth State
  const [user, setUser] = useState(null);

  // Theme effect hook
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  // Auth Actions
  const login = (email) => {
    // Generate mock details based on login
    setUser({
      name: email.split('@')[0],
      email: email,
      address: '123 Fashion Ave, NY 10001'
    });
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (details) => {
    setUser(prev => ({ ...prev, ...details }));
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppContext.Provider value={{
      user,
      login,
      logout,
      updateUser,
      isDarkMode,
      toggleTheme
    }}>
      {children}
    </AppContext.Provider>
  );
};
