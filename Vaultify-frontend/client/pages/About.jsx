import { useNavigate } from "react-router-dom";
import "./About.css";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container vaultify-bg-gradient min-h-screen relative">
      {/* Background Gradient Orbs */}
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

      {/* About Content */}
      <div className="relative z-20 py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-[48px] font-bold font-inter">About Us</h1>
          <p className="text-vaultify-text-gray mt-2">Vaultify: your secure, on-chain document vault.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6 text-white/90">
          <p>
            Vaultify enables anyone to securely upload documents, encrypt them with strong cryptography,
            and anchor ownership proofs on-chain. Share access via secure links and revoke anytime.
          </p>
          <p>
            Our mission is to make enterprise-grade security accessible. We never store your plaintext files on-chain;
            only cryptographic fingerprints are recorded for tamper-proof verification.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li>End-to-end encryption and secure sharing</li>
            <li>On-chain verification for authenticity and ownership</li>
            <li>Wallet-based login for seamless, passwordless access</li>
          </ul>
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
