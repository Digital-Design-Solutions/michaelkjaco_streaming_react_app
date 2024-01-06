import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const initialUserInfo = {
  first_name: "",
  last_name: "",
  membership_expire: "",
  membership_level: "",
  membership_valid: false,
  user_id: "",
  user_nicename: "",
};

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userInfo")) || {};
    if (Object.keys(userData).length > 0) {
      setUserInfo(userData);
      setIsLoggedIn(true);
    }
  }, []);

  const toggleLogin = () => {
    if (isLoggedIn) {
      localStorage.removeItem("userInfo");
    }
    setIsLoggedIn((prevValue) => !prevValue);
  };

  const updateUserInfo = (data) => {
    if (!isLoggedIn) {
      localStorage.setItem("userInfo", JSON.stringify(data));
    } else {
      localStorage.removeItem("userInfo");
    }
    setUserInfo(data);
    toggleLogin();
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        toggleLogin,
        userInfo,
        updateUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
