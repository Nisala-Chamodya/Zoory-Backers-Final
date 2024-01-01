import {createContext, useEffect, useState} from "react";
import { signInWithEmailAndPassword,GoogleAuthProvider,createUserWithEmailAndPassword,getAuth, updateProfile, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";



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

    {/*start log out function*/}
    const logOut =() =>{
        signOut(auth)
    }
    {/*end logout function*/}

    {/*start update profile*/}
    const updateuserProfile =({name,photoURL})=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })

    }
    {/*end update profile*/}

    {/*start check sign-in-user*/}
    useEffect(() =>{
    const unsubscribe=  onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    setUser(currentUser);
    setLoading(false);
   
  } else {
    // User is signed out
    // ...
  }
})
return ()=>{
    return unsubscribe();
}
    },[])

    {/*end  check sign in users*/}

    const authInfo ={
        user,
        createUser,
        signUpWithGmail,
        login,
        logOut,
        updateuserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;