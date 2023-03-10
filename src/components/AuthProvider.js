import { AuthContext } from "./context"; 
import { useState } from "react";

const AuthProvider = ({ children }) => { 
    const signIn = (username, password) => { 
        setUser({ username })
        setIsAuth(true);
    }
    const signOut = () => {
        setUser({});
        setIsAuth(false);
     }

    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);
 return ( 
 <AuthContext.Provider value={{isAuth, user, signIn, signOut, setIsAuth, setUser}}>
 {children}
 </AuthContext.Provider>
 ) 
} 
export default AuthProvider;