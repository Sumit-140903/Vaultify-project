import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWallet } from "../hooks/use-wallet";
import "./Register.css";
import "./Dashboard.css";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const { isConnected, account, formatAddress } = useWallet();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const key = (formData.email || "").trim().toLowerCase();
      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`
        .replace(/\s+/g, " ")
        .trim();

      try {
        const usersRaw = localStorage.getItem("vaultifyUsers");
        const users = usersRaw ? JSON.parse(usersRaw) : {};
        if (users[key]) {
          setErrors((prev) => ({ ...prev, email: "User already exists" }));
          return;
        }
        users[key] = { fullName, email: key };
        localStorage.setItem("vaultifyUsers", JSON.stringify(users));
        localStorage.setItem("vaultifyCurrentUserName", fullName);
      } catch {
        // ignore storage errors
      }

      navigate("/dashboard");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="register-container vaultify-bg-gradient min-h-screen relative">
      {/* Background Gradient Orbs */}
      <div className="vaultify-gradient-orb green w-[720px] h-[720px] absolute top-[-280px] left-[-251px] opacity-50"></div>
      <div className="vaultify-gradient-orb purple w-[837px] h-[837px] absolute top-[364px] left-[995px] opacity-70"></div>
      <div className="vaultify-gradient-orb dark w-[628px] h-[628px] absolute top-[-317px] left-[139px]"></div>
      <div className="vaultify-gradient-orb dark w-[948px] h-[948px] absolute top-[771px] left-[1021px]"></div>

      {/* Background Pattern */}
      <div className="register-background-pattern">
        <div className="register-pattern-container">
          <span className="register-pattern-text">HSHX1+&#125;]#+X&gt;SK+SP</span>
          <span className="register-pattern-text">NBFLGO#+X&gt;SK+SPOZ</span>
          <span className="register-pattern-text">E0SHG6WVGO#+X&gt;S&gt;S</span>
          <span className="register-pattern-text">NC\L25BFLGOFLGD&gt;K</span>
          <span className="register-pattern-text">AXJ&#123;AE0SHG6NBFLGO</span>
          <span className="register-pattern-text">C\L2NBFGO#+X&gt;S6N+</span>
          <span className="register-pattern-text">VGO#+X&gt;HG6NBGHZ9+</span>
          <span className="register-pattern-text">D&gt;KSO?AG6NBFLGO#+</span>
          <span className="register-pattern-text">PXJ&#123;AX0SHG6NH0LGO</span>
          <span className="register-pattern-text">4SUSO5N1JGHZ9+D&gt;K</span>
        </div>
      </div>

      {/* 3D Elements */}
      <div className="register-3d-elements">
        <div className="floating-cylinder"></div>
        <div className="floating-cross"></div>
        <div className="floating-shapes">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="shape-3"></div>
        </div>
      </div>

      {/* Animated Back Button */}
      <div className="absolute top-4 left-4 z-30">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="animated-back-btn group flex items-center gap-2"
          aria-label="Go back"
        >
          <span className="chevron-icon inline-flex h-8 w-8 items-center justify-center rounded-full">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="label">Back</span>
        </button>
      </div>

      {/* Decorative Layer Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/1766c9cd4c8b0cb79006a344334927db4930ff14?width=2958"
          alt="Register Background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex min-h-screen">
        {/* Left Side - Branding */}
        <div className="flex-1 flex flex-col justify-center items-start px-8 sm:px-16 py-12">
          <div className="max-w-md">
            {/* Logo */}
            <div className="mb-8 sm:mb-12">
              <Link to="/" className="brand-logo" aria-label="Vaultify Home" onClick={(e)=>{e.preventDefault(); navigate('/');}}>VAULTIFY</Link>
            </div>

            {/* Title */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-white text-3xl sm:text-[48px] font-medium font-inter leading-tight mb-4">
                Create Account
              </h2>
              <p className="text-white text-lg sm:text-[24px] font-normal font-inter opacity-80">
                Join the future of secure storage
              </p>
            </div>

            {/* Wallet Connection Status */}
            {isConnected && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-sm font-medium">
                  ✓ Wallet Connected: {formatAddress(account)}
                </p>
              </div>
            )}

            {/* Login Link */}
            <div className="text-white text-sm sm:text-[16px] font-normal font-inter">
              Already have an account? <br />
              You can{" "}
              <Link
                to="/login"
                className="text-[#B95DFE] font-semibold hover:underline"
              >
                Sign in here !
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 sm:px-16 py-12">
          <div className="w-full max-w-md">
            {/* Form Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-white text-2xl sm:text-[36px] font-semibold font-inter mb-2">
                Sign up
              </h3>
            </div>

            {/* Register Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 text-sm sm:text-[16px] font-inter focus:outline-none focus:ring-2 focus:ring-vaultify-purple focus:border-transparent transition-all duration-300 ${
                      errors.firstName ? "border-red-500 border-opacity-60" : ""
                    }`}
                    required
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 text-sm sm:text-[16px] font-inter focus:outline-none focus:ring-2 focus:ring-vaultify-purple focus:border-transparent transition-all duration-300 ${
                      errors.lastName ? "border-red-500 border-opacity-60" : ""
                    }`}
                    required
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 text-sm sm:text-[16px] font-inter focus:outline-none focus:ring-2 focus:ring-vaultify-purple focus:border-transparent transition-all duration-300 ${
                    errors.email ? "border-red-500 border-opacity-60" : ""
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 text-sm sm:text-[16px] font-inter focus:outline-none focus:ring-2 focus:ring-vaultify-purple focus:border-transparent transition-all duration-300 ${
                    errors.password ? "border-red-500 border-opacity-60" : ""
                  }`}
                  required
                />
                {errors.password && (
                  <p className="text-red-400 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 text-sm sm:text-[16px] font-inter focus:outline-none focus:ring-2 focus:ring-vaultify-purple focus:border-transparent transition-all duration-300 ${
                    errors.confirmPassword ? "border-red-500 border-opacity-60" : ""
                  }`}
                  required
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className={`mt-1 w-4 h-4 text-vaultify-purple bg-transparent border-2 border-white border-opacity-30 rounded focus:ring-vaultify-purple focus:ring-2 ${
                    errors.agreeToTerms ? "border-red-500" : ""
                  }`}
                  required
                />
                <label
                  htmlFor="agreeToTerms"
                  className="text-white text-xs sm:text-sm font-inter opacity-80 leading-relaxed"
                >
                  I agree to the{" "}
                  <a href="#" className="text-[#B95DFE] hover:underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#B95DFE] hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-400 text-xs">{errors.agreeToTerms}</p>
              )}

              {/* Register Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#B95DFE] to-[#6F26FF] text-white text-base sm:text-[18px] font-bold font-inter py-3 sm:py-4 rounded-xl hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Create Account
              </button>
            </form>

            {/* Additional Options */}
            <div className="mt-6 text-center">
              <p className="text-white opacity-70 text-xs sm:text-[14px] font-inter">
                By creating an account, you agree to our Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Brand Text */}
      <div className="absolute bottom-0 left-0 right-0 text-center py-8 sm:py-16 z-10">
        <h1 className="text-[#481B9F] text-opacity-75 font-impact text-6xl sm:text-8xl lg:text-[200px] xl:text-[352px] font-normal leading-none pointer-events-none select-none">
          VAULTIFY
        </h1>
      </div>
    </div>
  );
}
