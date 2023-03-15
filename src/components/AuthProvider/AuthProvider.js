import React, { useState } from 'react';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  const signIn = (email, password) => {
    // Ici, vous pouvez appeler votre API ou votre backend pour authentifier l'utilisateur
    // et récupérer le jeton d'utilisateur, puis définir le jeton d'utilisateur dans l'état.
    // Dans cet exemple, nous définissons simplement un jeton d'utilisateur factice.
    setUserToken('abcd1234');
  };

  const signOut = () => {
    // Ici, vous pouvez appeler votre API ou votre backend pour déconnecter l'utilisateur
    // et supprimer le jeton d'utilisateur de l'état.
    // Dans cet exemple, nous supprimons simplement le jeton d'utilisateur factice.
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;