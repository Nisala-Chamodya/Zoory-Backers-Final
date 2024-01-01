import {createContext, useState} from "react";
import { createUserWithEmailAndPassword,getAuth } from "firebase/auth";
import app from "../firebase/firebase.config.js";

export const AuthContext =createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);

    {/*start crate an account*/}
   const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)

   }
    {/*end create an account*/}



    const authInfo ={
        user,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;