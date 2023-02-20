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
import {signUpUser} from "../api/userApi"
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const googleSignIn = async () => {
      try {
        const provider = new GoogleAuthProvider();
        const userInfo = await signInWithPopup(auth, provider);
        if ((getAdditionalUserInfo(userInfo))?.isNewUser) {
          const displayName = userInfo?.user?.displayName;
          const email = userInfo?.user?.email;
          const dataToSend ={
            "email":email,
            "first_name": displayName.split(" ")[0],
            last_name: displayName.split(" ")[1] || " ",
          }
      await signUpUser(dataToSend)

          // return;
        }

        navigate("/dashboard")

        console.log(userInfo)
      } catch (error) {
        console.log(error);
      }
    };
  const signUp = async (email,password, firstName,lastName) => {
    try {
      console.log("in signup",email,firstName);  
      const userInfo = await createUserWithEmailAndPassword(auth, email, password);
      const dataToSend ={
            "email":email,
            "first_name" :firstName,
            "last_name":lastName
      }
      await signUpUser(dataToSend)
      navigate("/dashboard")
      console.log(userInfo);
     } catch (error) {
      console.log(error);
      }
    }

  const signIn = async (email,password) => {
    try {
      const userInfo = await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard")
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