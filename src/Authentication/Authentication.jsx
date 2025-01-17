import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from '../Firebase/Firebase.config';
import axios from 'axios';


const Authentication = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLogout = () => {
        setLoading(true);
        return signOut(auth)

    }

    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    // social register 
    const googleRegister = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post('https://hire-sphere-server.vercel.app/jwt', user, { withCredentials: true })
                    .then(data => {
                        console.log(data.data);
                        setLoading(false);
                    })
            }
            else {
                axios.post('https://hire-sphere-server.vercel.app/jwt/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        setLoading(false);
                    })
            }


        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        handleRegister,
        handleLogout,
        handleLogin,
        loading,
        googleRegister,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authentication;