/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Google Auth Provider
  const googleProvider = new GoogleAuthProvider();

  // Register a new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Log out the current user
  const logOut = () => {
    return signOut(auth);
  };

  // Log in an existing user
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Log in with Google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Update the current user's profile
  const updateUserProfile = async (updateData) => {
    if (!auth.currentUser) {
      throw new Error("No authenticated user.");
    }
    await updateProfile(auth.currentUser, updateData);

    // Update the local user state to reflect changes immediately
    setUser((prevUser) => ({
      ...prevUser,
      ...updateData,
    }));
  };

  // Send a password reset email
  const sendResetPasswordEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Provide the authentication context to the children
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    googleLogin, // Exporting Google Login function
    updateUserProfile,
    sendPasswordResetEmail,
  };

  // Monitor authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
