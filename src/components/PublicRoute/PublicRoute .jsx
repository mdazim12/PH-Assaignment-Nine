import { Navigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";

const PublicRoute = ({ children }) => {

  const { user } = useAuth();

  console.log(user)


  return !user ? children : <Navigate to="/" />; 
};

export default PublicRoute;
