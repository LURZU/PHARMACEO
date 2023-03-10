import { createContext } from "react"; 
const AuthContext = createContext({
    isAuth: false,
    user: {},
    signIn: () => {},
    signOut: () => {},
    setIsAuth: () => {},
    setUser: () => {}, 
});
export default AuthContext;