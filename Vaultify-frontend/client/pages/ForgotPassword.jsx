import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    // Simulate request
    setSubmitted(true);
  };

  return (
    <div className="forgot-container vaultify-bg-gradient min-h-screen relative">
      {/* Background Gradient Orbs */}
      <div className="vaultify-gradient-orb green w-[720px] h-[720px] absolute top-[-280px] left-[-251px] opacity-50"></div>
      <div className="vaultify-gradient-orb purple w-[837px] h-[837px] absolute top-[364px] left-[995px] opacity-70"></div>
      <div className="vaultify-gradient-orb dark w-[628px] h-[628px] absolute top-[-317px] left-[139px]"></div>
      <div className="vaultify-gradient-orb dark w-[948px] h-[948px] absolute top-[771px] left-[1021px]"></div>

      {/* Animated Back Button */}
      <div className="absolute top-4 left-4 z-30">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="animated-back-btn group flex items-center gap-2"
          aria-label="Go back"
        >
          <span className="chevron-icon inline-flex h-8 w-8 items-center justify-center rounded-full">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:-translate-x-1">
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
          alt="Background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex min-h-screen">
        <div className="flex-1 flex flex-col justify-center items-center px-8 sm:px-16 py-12">
          <div className="w-full max-w-md">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-white text-2xl sm:text-[36px] font-semibold font-inter mb-2">Forgot Password</h3>
              <p className="text-white/70">Enter your email to receive a reset link.</p>
            </div>

            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center text-green-300">
                If an account exists for {email}, a reset link has been sent.
                <div className="mt-4">
                  <Link to="/login" className="text-[#B95DFE] font-semibold hover:underline">Return to Login</Link>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-60 text-sm sm:text-[16px] font-inter focus:outline-none focus:ring-2 focus:ring-vaultify-purple focus:border-transparent transition-all duration-300 ${error ? "border-red-500 border-opacity-60" : ""}`}
                    required
                  />
                  {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#B95DFE] to-[#6F26FF] text-white text-base sm:text-[18px] font-bold font-inter py-3 sm:py-4 rounded-xl hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Reset Link
                </button>
              </form>
            )}
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
