// src/components/ProfileUpdate/ProfileUpdate.js
import  { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ProfileUpdate = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name || !photoURL) {
      setError("Both fields are required");
      return;
    }

    try {
      // Update profile
      await updateUserProfile({ displayName: name, photoURL });
      // Navigate to the profile or home page after successful update
      navigate("/");  // Adjust this to your preferred redirection route
    } catch (err) {
      setError("Failed to update profile: " + err.message);
    }
  };

  return (
    <div className="mx-auto py-10 block">
             <Helmet>
        <title>Update Profile | Mountes Track</title>
      </Helmet>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 text-center mx-auto shadow-2xl">
        <form onSubmit={handleUpdate} className="card-body">
          <h2 className="text-xl font-bold">Update Profile</h2>

          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input input-bordered"
            />
          </div>

          {/* Profile Photo URL Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Photo URL</span>
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter your profile photo URL"
              className="input input-bordered"
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
