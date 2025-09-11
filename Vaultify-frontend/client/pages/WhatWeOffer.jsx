import { useNavigate } from "react-router-dom";
import "./WhatWeOffer.css";

export default function WhatWeOffer() {
  const navigate = useNavigate();

  return (
    <div className="offer-container vaultify-bg-gradient min-h-screen relative">
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

      {/* Only the four offer items */}
      <div className="relative z-20 py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-[48px] font-bold font-inter">What We Offer</h1>
          <p className="text-vaultify-text-gray mt-2">Tamper-proof, On-chain verify, Encrypted share, Wallet login</p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 justify-items-center">
            <div className="flex flex-col items-center text-center">
              <div className="w-[73px] h-[73px] mb-7">
                <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.19336 36.906C9.19336 34.4942 10.1514 32.1811 11.8568 30.4757C13.5622 28.7703 15.8753 27.8123 18.2871 27.8123H54.6619C57.0737 27.8123 59.3867 28.7703 61.0921 30.4757C62.7976 32.1811 63.7556 34.4942 63.7556 36.906V58.1246C63.7556 60.5364 62.7976 62.8495 61.0921 64.5549C59.3867 66.2603 57.0737 67.2183 54.6619 67.2183H18.2871C15.8753 67.2183 13.5622 66.2603 11.8568 64.5549C10.1514 62.8495 9.19336 60.5364 9.19336 58.1246V36.906ZM39.5057 42.9684C39.5057 42.1645 39.1864 41.3935 38.6179 40.825C38.0494 40.2566 37.2784 39.9372 36.4745 39.9372C35.6706 39.9372 34.8996 40.2566 34.3311 40.825C33.7626 41.3935 33.4433 42.1645 33.4433 42.9684V52.0622C33.4433 52.8661 33.7626 53.6371 34.3311 54.2056C34.8996 54.774 35.6706 55.0934 36.4745 55.0934C37.2784 55.0934 38.0494 54.774 38.6179 54.2056C39.1864 53.6371 39.5057 52.8661 39.5057 52.0622V42.9684Z" fill="white" />
                  <path d="M24.3496 30.8435V21.7498C24.3496 18.5341 25.6271 15.4501 27.9009 13.1762C30.1748 10.9023 33.2588 9.62488 36.4746 9.62488C39.6903 9.62488 42.7743 10.9023 45.0482 13.1762C47.3221 15.4501 48.5995 18.5341 48.5995 21.7498V30.8435" stroke="white" strokeWidth="4.54686" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-white text-[27px] font-bold font-inter">Tamper-proof</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-[95px] h-[95px] mb-4">
                <svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="48.5" cy="48.5" r="44" stroke="white" strokeWidth="5" opacity="0.6" />
                  <path d="M32 50l10 10 23-26" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-white text-[27px] font-bold font-inter">On-chain verify</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-[73px] h-[73px] mb-7">
                <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37 15v14" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <path d="M37 45v14" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="37" cy="37" r="10" stroke="white" strokeWidth="4" />
                </svg>
              </div>
              <h3 className="text-white text-[27px] font-bold font-inter">Encrypted share</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-[73px] h-[73px] mb-7">
                <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M61.2351 21.7497V15.6872C61.2351 12.3438 58.5161 9.62476 55.1727 9.62476H15.7666C10.7529 9.62476 6.67285 13.7048 6.67285 18.7185V55.0933C6.67285 61.7651 12.1109 64.187 15.7666 64.187H61.2351C64.5786 64.187 67.2976 61.468 67.2976 58.1246V27.8122C67.2976 24.4687 64.5786 21.7497 61.2351 21.7497ZM55.1727 49.0308H49.1102V36.9059H55.1727V49.0308ZM15.7666 21.7497C14.9861 21.7148 14.2491 21.3802 13.7092 20.8155C13.1692 20.2509 12.8679 19.4997 12.8679 18.7185C12.8679 17.9372 13.1692 17.186 13.7092 16.6214C14.2491 16.0568 14.9861 15.7221 15.7666 15.6872H55.1727V21.7497H15.7666Z" fill="white" />
                </svg>
              </div>
              <h3 className="text-white text-[27px] font-bold font-inter">Wallet login</h3>
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
