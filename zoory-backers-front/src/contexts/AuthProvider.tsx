import {createContext, useState} from "react";
import { signInWithEmailAndPassword,GoogleAuthProvider,createUserWithEmailAndPassword,getAuth } from "firebase/auth";
import app from "../firebase/firebase.config.js";



export const AuthContext =createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);

    {/*start crate an account*/}
   const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)

   }
    {/*end create an account*/}

    {/*start sign up with gmail*/}
    const signUpWithGmail =()=>{
    return    signInWithPopup(auth, googleProvider)
    }
    {/*end sign up with gmail*/}

    {/*start login using email & password*/}
    const login =(email,password)=>{
      return   signInWithEmailAndPassword(auth,email,password);

    }
    {/*end login using email & password*/}
    const authInfo ={
        user,
        createUser,
        signUpWithGmail,
        login
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;