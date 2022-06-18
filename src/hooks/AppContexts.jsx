import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMusicList } from "./useMusicList";

const initialToken = localStorage.getItem("token") || null;

export const MusicContext = createContext(null);
export const AuthContext = createContext(null);

var rand = () => Math.random().toString(36).substring(2);

const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(rand()+rand()), 250);
  });

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(initialToken);

  useEffect(() => {
    token ?
      localStorage.setItem("token", token) :
      localStorage.removeItem("token");
  }, [token]);

  const handleLogin = async () => {
    const result = await fakeAuth();
    setToken(result);
    navigate("/dashboard")
  };
  
  const handleLogout = async () => {
    setToken(null);
  };

  const authValue = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  }

  const [musicList, updateMusicList] = useMusicList();
  return (
    <AuthContext.Provider value={authValue}>
      <MusicContext.Provider value={{ musicList, updateMusicList }}>
        { children }
      </MusicContext.Provider>
    </AuthContext.Provider>
  );
}