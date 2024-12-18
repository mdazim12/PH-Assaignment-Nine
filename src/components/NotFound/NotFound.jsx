import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-2xl font-medium text-gray-800">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="mt-2 text-gray-600">
        It seems you've found a broken link or mistyped the URL.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
