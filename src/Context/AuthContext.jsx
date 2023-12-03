import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prevValue) => !prevValue);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        toggleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
