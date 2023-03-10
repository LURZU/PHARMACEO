import { useContext, useEffect} from "react";
import AuthContext from "./context";
import { Text, StyleSheet} from 'react-native';
import TextField from "@mui/material/TextField"; 
import Button from "@mui/material/Button"; 
import { styled } from 'nativewind';



const LogInForm = () => { 
    const { isAuth, user, signIn, signOut, setIsAuth, setUser } = useContext(AuthContext);

    useEffect(() => {
        if(localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            setUser(user);
            setIsAuth(true);
        }
    
    }, [])

    useEffect(() => { 
        // Enregistrer le nom d’utilisateur dans le local storage
        if (isAuth) { 
        localStorage.setItem("user", JSON.stringify(user)); 
        } else { 
        localStorage.removeItem("user"); 
        } 
        }, [isAuth, user]); 

    const handleSignIn = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        if(!username) {
            return ('veuillez saisir un login');
        }
        signIn(username, password);
    }

    if (isAuth) {
        return (
            <>
            <div className="mt-14">
                <div className="flex justify-end">
                    <Text className="mr-6">Bonjour {user.username}</Text>
                    <Button onClick={signOut} variant="contained"><Text>Déconnexion</Text></Button>
                </div>
            </div>
            <div>
            </div>
            </>
        );
    }

    return ( 
    <form onSubmit={handleSignIn}>
        
        <Text className="text-3xl font-bold text-center">Formularie d'inscription</Text>
    <div className="flex justify-center mt-8 flex-row">
        <TextField
        type="text"
        name="username"
        variant="outlined"
        placeholder="Login"
        onChange={(e) => {}}
        /><TextField
        type="password"
        name="password"
        variant="outlined"
        placeholder="Mot de passe"
        onChange={(e) => {}}
        /><Button type="submit" variant="contained"><Text>Connexion</Text></Button>
    </div>
    </form>
    ); 
}; 
  

export default LogInForm;