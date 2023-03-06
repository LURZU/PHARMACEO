import { useContext, useEffect} from "react";
import { AuthContext } from "./context";
import TextField from "@mui/material/TextField"; 
import Button from "@mui/material/Button"; 



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
            <div class="mt-14">
                <div class="flex justify-end">
                    <p class="mr-6">Bonjour {user.username}</p>
                    <Button onClick={signOut} variant="contained">
                        Déconnexion
                    </Button>
                </div>
            </div>
            <div>
            </div>
            </>
        );
    }

    return ( 
    <form onSubmit={handleSignIn}>
        
        <h1 class="text-3xl font-bold text-center">Formularie d'inscription</h1>
    <div class="flex justify-center mt-8 flex-row">
        <TextField
        type="text"
        name="username"
        variant="outlined"
        placeholder="Login"
        onChange={(e) => {}}
        />
        <TextField
        type="password"
        name="password"
        variant="outlined"
        placeholder="Mot de passe"
        onChange={(e) => {}}
        />
        <Button type="submit" variant="contained">
        Connexion 
    </Button>
    </div>
    </form>
    ); 
}; 

export default LogInForm;