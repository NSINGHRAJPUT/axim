import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    emailOTP: "",
    mobile: "",
    mobileOTP: "",
    password: "",
    confirmPassword: "",
    companyWebsite: "",
    termsAccepted: false,
  });

  const [otpSent, setOTPSent] = useState({ email: false, mobile: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen my-4 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl border-[1px] border-gray-300">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <p className="text-center mb-8">Please enter your personal details.</p>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email OTP */}
            <div className="flex items-end gap-2">
              <div className="flex-grow">
                <label className="block text-sm font-medium mb-1">
                  Enter Email OTP <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="emailOTP"
                  value={formData.emailOTP}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Send OTP
              </button>
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Mobile No. <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile OTP */}
            <div className="flex items-end gap-2">
              <div className="flex-grow">
                <label className="block text-sm font-medium mb-1">
                  Enter Mobile OTP <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="mobileOTP"
                  value={formData.mobileOTP}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Send OTP
              </button>
            </div>

            {/* Company Website */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Company Website
              </label>
              <input
                type="url"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Create Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Re-enter Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleCheckboxChange}
                className="form-checkbox h-4 w-4 text-blue-500"
              />
              <span className="ml-2 text-sm">
                Agree to Terms and Conditions
              </span>
            </label>
          </div>

          {/* Register Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
