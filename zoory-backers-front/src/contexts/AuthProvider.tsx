import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  {
    /*start create an acc*/
  }
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  {
    /*end create an acc*/
  }

  {
    /*start signup*/
  }
  const signUpWithGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };
  {
    /*end sign up*/
  }

  {
    /*start login using email and password */
  }
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  {
    /*end login using email and password */
  }

  {
    /*start log out functionality */
  }
  const logOut = () => {
    signOut(auth);
  };
  {
    /* end logout functionality */
  }

  {
    /*start update profile */
  }
  const updateuserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  {
    /*end update profile */
  }

  {
    /* start check signin user */
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        {
          /*start add axios */
        }
        if (currentUser) {
          const userInfo = { email: currentUser.email };
          axios.post("http://localhost:6001/jwt", userInfo).then((response) => {
            // console.log(response.data.token);
            if (response.data.token) {
              localStorage.setItem("access-token", response.data.token);
            }
          });
        }

        {
          /*end add axios */
        }
      } else {
        // User is signed out
        // ...
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  {
    /*end check signin user */
  }
  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    login,
    logOut,
    updateuserProfile,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
