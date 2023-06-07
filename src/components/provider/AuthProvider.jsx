import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';
export const authContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    // const user = { pd: "working" }
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("CurentUser:-", currentUser);
            if (currentUser) {
                axios.post(`http://localhost:1000/jwt`, { email: currentUser.email })
                    .then(data => {
                        console.log(data.data);
                        localStorage.setItem("access-token", data.data)
                    })
            } else {
                localStorage.removeItem("access-token")
            }
            setLoading(false)
        })
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logout,
        updateUserProfile,
        googleSignIn,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;