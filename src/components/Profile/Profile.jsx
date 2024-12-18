import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mx-auto py-10 block">
      <Helmet>
        <title>My Profile | Mountes Track</title>
      </Helmet>

      <div className="card bg-base-100 w-full max-w-md shrink-0 text-center mx-auto shadow-2xl p-6">
        {/* Welcome Title */}
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          Welcome{user?.displayName ? `, ${user.displayName}!` : "!"}
        </h2>

        {/* User Profile Information */}
        <div className="text-left">
          {user?.photoURL ? (
            <div className="flex justify-center mb-4">
              <img
                src={user.photoURL}
                alt={`${user?.displayName || "User"}'s profile`}
                className="rounded-full w-28 h-28 object-cover shadow-md"
              />
            </div>
          ) : (
            <div className="flex justify-center mb-4">
              <div className="rounded-full w-28 h-28 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            </div>
          )}

          <div className="text-gray-700">
            <p className="text-lg font-medium">
              <strong>Name:</strong> {user?.displayName || "Not set"}
            </p>
            <p className="text-lg font-medium">
              <strong>Email:</strong> {user?.email || "Not available"}
            </p>
          </div>
        </div>

        {/* Update Profile Button */}
        <div className="mt-6">
          <Link to="/profile/update">
            <button className="btn bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white w-full">
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
