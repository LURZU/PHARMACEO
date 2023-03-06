import { createContext } from "react";
export const AuthContext = createContext({
    isAuth: false,
    user: {},
    signIn: () => {},
    signOut: () => {},
    setIsAuth: () => {},
    setUser: () => {}, 
});