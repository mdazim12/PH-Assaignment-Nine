import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import MountainDetails from "./components/MountainDetails/MountainDetails";
import Login from "./components/Login/Login";
import Registration from "./components/Regisation/Regisation";
import Profile from "./components/Profile/Profile";
import ProfileUpdate from "./components/ProfileUpdate/ProfileUpdate";
import AuthProvider from "./components/Provider/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Public from "./components/Public/Public";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement : <NotFound></NotFound>,
    children: [
      // Home Page
      {
        path: "/",
        element: <Home />,
        
        loader: () => fetch("/Mountents.json"),
      },

      // Mountain Details (Protected)
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <MountainDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/Mountents.json"),
      },

      // About Page
      {
        path: "/about",
        element: <About />,
      },

      // Contact Page
      {
        path: "/contact",
        element: <Contact />,
      },

      // Login Page (Public)
      {
        path: "/login",
        element: (
          <Public>
            <Login></Login>
          </Public>
        ),
      },

      // Registration Page (Public)
      {
        path: "/registration",
        element: (



          <Public>
            <Registration />
          </Public>
        ),
      },

      // My Profile Page (Protected)
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

      // Profile Update Page (Protected)
      {
        path: "/profile/update",
        element: (
          <PrivateRoute>
            <ProfileUpdate />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
