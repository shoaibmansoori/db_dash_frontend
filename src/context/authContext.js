import { React, useContext, createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import PropTypes from "prop-types";
import {GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  getAdditionalUserInfo
} from "firebase/auth";
import {signUpUser} from "../api/index"
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const googleSignIn = async () => {
      try {
        const provider = new GoogleAuthProvider();
        const userInfo = await signInWithPopup(auth, provider);
        if ((getAdditionalUserInfo(userInfo))?.isNewUser) {
          const displayName = userInfo?.user?.displayName;
          const email = userInfo?.user?.email;
          const dataToSend ={
            "email":email,
            "password" :"",
            "name":displayName
          }
        await signUpUser(dataToSend)
          // return;
        }
        console.log(userInfo)
      } catch (error) {
        console.log(error);
      }
    };
  const signUp = async (email, password,name) => {
    try {
      console.log("in signup",email,password);  
      const userInfo = await createUserWithEmailAndPassword(auth, email, password);
      const dataToSend ={
            "email":email,
            "password" :password,
            "name":name
      }
      await signUpUser(dataToSend)
      console.log(userInfo);
     } catch (error) {
      console.log(error);
      }
    }

  const signIn = async (email,password) => {
    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      console.log(userInfo);
    } catch (error) {
     console.log(error);
    }
  }

  const logOut = () => {
    signOut(auth);
  };

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if(currentUser) {
        setUser(currentUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, signUp, logOut,signIn ,googleSignIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}