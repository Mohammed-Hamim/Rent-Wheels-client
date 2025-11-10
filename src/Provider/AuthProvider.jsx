import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    // google sign in 
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    // log in with email and password 
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    // crater user with email and pass 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // function for log out
    const LogOut = () => {
        return signOut(auth)
    }

    // observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        googleSignIn,
        LogOut,
        createUser,
        logIn

    }

    return <AuthContext value={authInfo}>{children}</AuthContext>

};

export default AuthProvider;