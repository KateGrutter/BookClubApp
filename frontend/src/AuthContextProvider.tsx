import { ReactNode, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from "./firebaseConfig"
import AuthContext from './AuthContext';

function AuthContextProvider({children}: {children: ReactNode}) {
    const [currentUser, setCurrentUser] = useState<User|null>(null);


useEffect(() => {
    return auth.onAuthStateChanged(newUser => {
        setCurrentUser(newUser)
    });
}, []);

return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
        {children}
        </AuthContext.Provider>
);
};

export default AuthContextProvider;