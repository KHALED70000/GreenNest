import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import { useLocation } from 'react-router-dom';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(user)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const LogOut = () => {
        return signOut(auth);
    };

    const LogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
}

//google log in

const googleLogin = (provider) => {
    return signInWithPopup(auth, provider)
}
//googlee log in end

// console.log(user)
const authData = {
    user,
    setUser,
    createUser,
    LogOut,
    LogIn,
    googleLogin,
    loading,
    setLoading,
    updateUser,

};

return (
    <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;
