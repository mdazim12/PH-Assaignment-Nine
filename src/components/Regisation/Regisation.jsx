import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Registration = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();

  // Validate password and set validation state
  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 6) errors.push("Password must be at least 6 characters.");
    if (!/[A-Z]/.test(password)) errors.push("Password must include an uppercase letter.");
    if (!/[a-z]/.test(password)) errors.push("Password must include a lowercase letter.");
    if (!/\W/.test(password)) errors.push("Password must include a special character.");

    setPasswordError(errors.length > 0 ? errors.join(" ") : null);
    return errors.length === 0;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");

    if (!validatePassword(password)) {
      setLoading(false);
      return;
    }

    try {
      const result = await createNewUser(email, password);
      const user = result.user;
      setUser(user);

      await updateUserProfile({ displayName: name, photoURL: photo });
      navigate("/");
    } catch (err) {
      setError(`Registration failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto py-10 block">

     <Helmet>
        <title>Register | Mountes Track</title>
      </Helmet>


      <div className="card bg-base-100 w-full max-w-sm shrink-0 text-center mx-auto shadow-2xl">
        <form onSubmit={handleRegistration} className="card-body">
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Profile Photo URL Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Password Input */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`input input-bordered ${
                passwordError ? "border-red-500" : ""
              }`}
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="btn btn-xs absolute right-4 top-12"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>

          {/* Password Error Message */}
          {passwordError && (
            <div className="text-red-500 text-sm mt-2">{passwordError}</div>
          )}

          {/* Password Validation List */}
          {/* <ul className="text-sm text-gray-600 mt-2">
            <li
              className={`${
                password.length >= 6 ? "text-green-500" : "text-red-500"
              }`}
            >
              - At least 6 characters
            </li>
            <li
              className={`${
                /[A-Z]/.test(password) ? "text-green-500" : "text-red-500"
              }`}
            >
              - One uppercase letter
            </li>
            <li
              className={`${
                /[a-z]/.test(password) ? "text-green-500" : "text-red-500"
              }`}
            >
              - One lowercase letter
            </li>
            <li
              className={`${
                /\W/.test(password) ? "text-green-500" : "text-red-500"
              }`}
            >
              - One special character
            </li>
          </ul> */}

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              className={`text-white btn bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 ${
                loading ? "loading" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
