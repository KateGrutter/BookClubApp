import { User } from 'firebase/auth';
import { createContext } from 'react';

export interface AuthContextModel {
    currentUser: User|null;
    setCurrentUser: (user: User) => void
};

const defaultValue: AuthContextModel = {
    currentUser: null,
    setCurrentUser: () => {}
};

const AuthContext = createContext(defaultValue);
export default AuthContext;