import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth'
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    console.log(user);

    const createUser = (email, password) => {
        console.log(email, password);
        console.log('hello');
        console.log(auth);
        console.log(app);
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setIsLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        setIsLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const emailVerification = () => {
        setIsLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = { user, isLoading, createUser, signIn, logOut, googleSignIn, updateUserProfile, emailVerification }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;