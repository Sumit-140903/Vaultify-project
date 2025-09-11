import { Link, useNavigate } from "react-router-dom";
import "./Features.css";

export default function Features() {
  const navigate = useNavigate();

  return (
    <div className="features-container vaultify-bg-gradient min-h-screen relative">
      {/* Background Gradient Orbs (same vibe as other pages) */}
      <div className="vaultify-gradient-orb green w-[703px] h-[703px] absolute top-[-273px] left-[-225px] opacity-50" />
      <div className="vaultify-gradient-orb purple w-[817px] h-[817px] absolute top-[355px] left-[991px] opacity-70" />
      <div className="vaultify-gradient-orb dark w-[613px] h-[613px] absolute top-[-309px] left-[156px]" />
      <div className="vaultify-gradient-orb dark w-[925px] h-[925px] absolute top-[752px] left-[1016px]" />

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
          alt="Background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Main Content: Only Upload, Encrypt, Share */}
      <div className="relative z-20 py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-[48px] font-bold font-inter">Features</h1>
          <p className="text-vaultify-text-gray mt-2">Upload, Encrypt and Share</p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Upload Card */}
            <div className="vaultify-feature-card">
              <div className="aspect-square relative bg-[#222121] rounded-t-[18px] flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/66cc3798c749a345c796e2f9f897bfd14a7cdf33?width=843"
                  alt="Upload Feature"
                  className="w-full h-full object-cover rounded-t-[18px]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white text-[27px] font-bold font-inter mb-4">Upload</h3>
                <p className="text-vaultify-text-gray text-[23px] font-bold font-inter">
                  Send your document to Vaultify, directly from any device.
                </p>
              </div>
            </div>

            {/* Encrypt Card */}
            <div className="vaultify-feature-card">
              <div className="aspect-square relative bg-[#222121] rounded-t-[18px] flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/22935458045d855095d5ab91bd84f350851b54d1?width=843"
                  alt="Encrypt Feature"
                  className="w-full h-full object-cover rounded-t-[18px]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white text-[27px] font-bold font-inter mb-4">Encrypt</h3>
                <p className="text-vaultify-text-gray text-[23px] font-bold font-inter">
                  Vaultify encrypts your file using advanced cryptography.
                </p>
              </div>
            </div>

            {/* Share Card */}
            <div className="vaultify-feature-card">
              <div className="aspect-square relative bg-[#222121] rounded-t-[18px] flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e05943931b119d801ca814712b0352bb71b5d201?width=843"
                  alt="Share Feature"
                  className="w-full h-full object-cover rounded-t-[18px]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white text-[27px] font-bold font-inter mb-4">Share</h3>
                <p className="text-vaultify-text-gray text-[23px] font-bold font-inter">
                  Generate a shareable, secure link for easy access.
                </p>
              </div>
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
