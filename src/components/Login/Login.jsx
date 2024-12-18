import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const {
    userLogin,
    setUser,
    sendPasswordResetEmail,
    googleLogin, // Add Google login from AuthContext
  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); // For error handling
  const [loading, setLoading] = useState(false); // For loading state
  const [resetEmail, setResetEmail] = useState(""); // For password reset email
  const [resetMessage, setResetMessage] = useState(null); // Success message for password reset

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    try {
      const result = await userLogin(email, password);
      const user = result.user;
      setUser(user);
      console.log("Login successful:", user);
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      setError(`Login failed: ${error.message}`);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Password reset handler
  const handlePasswordReset = async () => {
    if (!resetEmail) {
      setResetMessage("Please enter your email.");
      return;
    }

    try {
      await sendPasswordResetEmail(resetEmail);
      setResetMessage("Password reset email sent successfully.");

      // Redirect to Gmail after sending the reset email
      window.location.href = "https://mail.google.com"; // Redirects the user to Gmail
    } catch (error) {
      setResetMessage(`Failed to send reset email: ${error.message}`);
    }
  };

  // Google Login Handler
  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;
      setUser(user);
      console.log("Google Login successful:", user);
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      setError(`Google login failed: ${error.message}`);
    }
  };

  return (
    <div className="mx-auto py-10 block">
      <Helmet>
        <title>Login | Mountes Track</title>
      </Helmet>

      <h2 className="text-3xl text-center text-black font-bold">Login</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 text-center mx-auto shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
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
            <label className="label">
              <span
                className="label-text-alt link link-hover text-blue-500"
                onClick={() => document.getElementById("forgot-modal").showModal()}
              >
                Forgot password?
              </span>
            </label>
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <div className="form-control mt-6">
            <button
              className={`text-white btn bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-primary w-full flex items-center justify-center gap-2"
            >
              <FaGoogle /> Continue with Google
            </button>
          </div>
          <h3 className="text-sm text-gray-600 my-3">
            Are you a new user? Please{" "}
            <Link to="/registration">
              <span className="underline cursor-pointer">Register</span>
            </Link>
          </h3>
        </form>
      </div>

      {/* Forgot Password Modal */}
      <dialog id="forgot-modal" className="modal">
        <form method="dialog" className="modal-box bg-white text-black shadow-lg p-6">
          <h3 className="font-bold text-lg">Reset Password</h3>
          <p className="py-4 text-gray-600">
            Enter your email address to reset your password.
          </p>
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full mb-4"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
          {resetMessage && (
            <div
              className={`text-sm ${
                resetMessage.startsWith("Failed") ? "text-red-500" : "text-green-500"
              }`}
            >
              {resetMessage}
            </div>
          )}
          <div className="modal-action">
            <button
              type="button"
              className="text-white btn bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
              onClick={handlePasswordReset}
            >
              Send Reset Email
            </button>
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Login;
