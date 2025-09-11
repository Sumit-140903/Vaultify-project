import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import "./Dashboard.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailKey = (formData.email || "").trim().toLowerCase();
    let displayName = "";

    try {
      const usersRaw = localStorage.getItem("vaultifyUsers");
      if (usersRaw) {
        const users = JSON.parse(usersRaw);
        if (users && users[emailKey] && users[emailKey].fullName) {
          displayName = users[emailKey].fullName;
        }
      }
    } catch {
      // ignore JSON/localStorage errors
    }

    if (!displayName) {
      const beforeAt = emailKey.split("@")[0] || "";
      displayName = beforeAt
        ? beforeAt
            .replace(/[._-]+/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .replace(/\b\w/g, (c) => c.toUpperCase())
        : "User";
    }

    try {
      localStorage.setItem("vaultifyCurrentUserName", displayName);
    } catch {
      // ignore storage write errors
    }

    navigate("/dashboard");
  };

  const navigate = useNavigate();

  return (
    <div className="login-container vaultify-bg-gradient min-h-screen relative">
      {/* Background Gradient Orbs */}
      <div className="vaultify-gradient-orb green w-[720px] h-[720px] absolute top-[-280px] left-[-251px] opacity-50"></div>
      <div className="vaultify-gradient-orb purple w-[837px] h-[837px] absolute top-[364px] left-[995px] opacity-70"></div>
      <div className="vaultify-gradient-orb dark w-[628px] h-[628px] absolute top-[-317px] left-[139px]"></div>
      <div className="vaultify-gradient-orb dark w-[948px] h-[948px] absolute top-[771px] left-[1021px]"></div>

      {/* Background Pattern */}
      <div className="login-background-pattern">
        <div className="login-pattern-container">
          <span className="login-pattern-text">HSHX1+&#125;]#+X&gt;SK+SP</span>
          <span className="login-pattern-text">NBFLGO#+X&gt;SK+SPOZ</span>
          <span className="login-pattern-text">E0SHG6WVGO#+X&gt;S&gt;S</span>
          <span className="login-pattern-text">NC\L25BFLGOFLGD&gt;K</span>
          <span className="login-pattern-text">AXJ&#123;AE0SHG6NBFLGO</span>
          <span className="login-pattern-text">C\L2NBFGO#+X&gt;S6N+</span>
          <span className="login-pattern-text">VGO#+X&gt;HG6NBGHZ9+</span>
          <span className="login-pattern-text">D&gt;KSO?AG6NBFLGO#+</span>
          <span className="login-pattern-text">PXJ&#123;AX0SHG6NH0LGO</span>
          <span className="login-pattern-text">4SUSO5N1JGHZ9+D&gt;K</span>
        </div>
      </div>

      {/* 3D Elements */}
      <div className="login-3d-elements">
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
          alt="Login Background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex min-h-screen">
        {/* Left Side - Branding */}
        <div className="flex-1 flex flex-col justify-center items-start px-16 py-12">
          <div className="max-w-md">
            {/* Logo */}
            <div className="mb-12">
              <Link to="/" className="brand-logo" aria-label="Vaultify Home" onClick={(e)=>{e.preventDefault(); navigate('/');}}>VAULTIFY</Link>
            </div>

            {/* Title */}
            <div className="mb-8">
              <h2 className="text-white text-[48px] font-medium font-inter leading-tight mb-4">
                Sign in to
              </h2>
              <p className="text-white text-[24px] font-normal font-inter opacity-80">
                Lorem Ipsum is simply
              </p>
            </div>

            {/* Register Link */}
            <div className="text-white text-[16px] font-normal font-inter">
              If you don't have an account register <br />
              You can{" "}
              <Link
                to="/register"
                className="text-[#B95DFE] font-semibold hover:underline"
              >
                Register here !
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex flex-col justify-center items-center px-16 py-12">
          <div className="w-full max-w-md">
            {/* Form Header */}
            <div className="text-center mb-8">
              <h3 className="text-white text-[36px] font-semibold font-inter mb-2">
                Sign in
              </h3>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email or user name"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 text-[16px] font-inter focus:outline-none focus:ring-2 focus:ring-vaultify-purple focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 text-[16px] font-inter focus:outline-none focus:ring-2 focus:ring-vaultify-purple focus:border-transparent transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white opacity-60 hover:opacity-100 transition-opacity"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3C13.866 3 17 6.134 17 10C17 13.866 13.866 17 10 17C6.134 17 3 13.866 3 10C3 6.134 6.134 3 10 3ZM10 5C7.239 5 5 7.239 5 10C5 12.761 7.239 15 10 15C12.761 15 15 12.761 15 10C15 7.239 12.761 5 10 5ZM10 7.5C11.381 7.5 12.5 8.619 12.5 10C12.5 11.381 11.381 12.5 10 12.5C8.619 12.5 7.5 11.381 7.5 10C7.5 8.619 8.619 7.5 10 7.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#B95DFE] to-[#6F26FF] text-white text-[18px] font-bold font-inter py-4 rounded-xl hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Login
              </button>
            </form>

            {/* Additional Options */}
            <div className="mt-6 text-center">
              <Link
                to="/forgot-password"
                className="text-white opacity-70 text-[14px] font-inter hover:opacity-100 transition-opacity"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Brand Text */}
      <div className="absolute bottom-0 left-0 right-0 text-center py-16 z-10">
        <h1 className="text-[#481B9F] text-opacity-75 font-impact text-[352px] font-normal leading-none pointer-events-none select-none">
          VAULTIFY
        </h1>
      </div>
    </div>
  );
}
