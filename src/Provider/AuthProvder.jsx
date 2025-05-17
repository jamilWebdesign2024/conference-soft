import React, { createContext, useEffect, useState } from 'react';
import app from '../firbase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null);

    const [loading, setLoading]=useState(true);

    console.log(loading, user);
    

    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }



    const logOut=()=>{

        return signOut(auth)
    }

    useEffect(()=>{
     const unSubscribe  = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    }, [])

    const authData = {
        user,
        setUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        createUser
    };

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
