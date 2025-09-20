import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-full max-w-md p-6 rounded-lg shadow-lg dark:bg-slate-800 dark:text-white">
          <form method="dialog">
            {/* Close Button */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-gray-200 dark:hover:bg-slate-700"
              title="Close"
            >
              ✕
            </button>
          </form>

          <h3 className="font-bold text-2xl mb-4 text-center">Login</h3>

          <form className="space-y-4">
            {/* Email */}
            <div className="form-control">
              <label className="label text-sm font-semibold">
                <span>Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400"
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label text-sm font-semibold">
                <span>Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full focus:outline-none focus:ring focus:ring-pink-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-pink-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"

              >
                Login
              </button>
            </div>
          </form>

          {/* Optional: Signup link */}
          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-pink-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
