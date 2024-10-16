import React, { useState } from "react";
import login from "../assets/login.png";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [selectedTab, setSelectedTab] = useState("EXIM");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex">
        {/* Left Side - Form */}
        <div className="w-1/2 p-8">
          {/* Logo */}
          <div className="mb-8 w-full flex justify-center items-center">
            <img
              src={login} // Change to your logo path
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>

          <h2 className="text-3xl font-bold text-center mb-8">Log In</h2>

          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 font-medium ${
                selectedTab === "EXIM"
                  ? "border-b-2 border-gray-700"
                  : "text-gray-400"
              }`}
              onClick={() => setSelectedTab("EXIM")}
            >
              EXIM
            </button>
            <button
              className={`px-4 py-2 font-medium ml-4 ${
                selectedTab === "Vendor"
                  ? "border-b-2 border-gray-700"
                  : "text-gray-400"
              }`}
              onClick={() => setSelectedTab("Vendor")}
            >
              Vendor
            </button>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <a href="/" className="text-sm text-blue-500">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 focus:outline-none"
          >
            Login
          </button>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-500">
                Sign up
              </a>
            </span>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 p-8 flex items-center justify-center rounded-r-lg">
          <img
            src={login} // Change this to your image path
            alt="AI Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
