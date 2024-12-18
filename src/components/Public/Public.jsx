/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Public = ({ children }) => {
  const { user } = useContext(AuthContext); 

  return !user ? children : <Navigate to="/" />;
};

export default Public;
