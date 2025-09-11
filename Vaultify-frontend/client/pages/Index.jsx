import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWallet } from "../hooks/use-wallet";
import "./Index.css";
import "./Dashboard.css";
import Faq from "./Faq";

function AboutUsSection() {
  const teamMembers = [
    {
      name: "Amisha Bhagat",
      role: "Frontend & UI/UX Developer",
      bio: "An expert in frontend development, passionate about building intuitive and seamless user experiences. Specializing in React, she ensures Vaultify's interface is both beautiful and functional.",
      image: "https://placehold.co/150x150/6F26FF/FFFFFF?text=Amisha"
    },
    {
      name: "Ankit Kumar",
      role: "Backend & ML Specialist",
      bio: "Responsible for developing the core backend infrastructure and integrating the machine learning models that provide intelligent document analysis and security.",
      image: "https://placehold.co/150x150/6F26FF/FFFFFF?text=Ankit"
    },
    {
      name: "Sumit Kumar Thakur",
      role: "Project Lead & Blockchain Specialist",
      bio: "Spearheading the overall project vision and handling the blockchain integration, including the smart contracts for document hashing and ownership verification.",
      image: "https://placehold.co/150x150/6F26FF/FFFFFF?text=Sumit"
    }
  ];

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-white mb-4">About Us</h2>
        <p className="text-xl font-semibold text-[#676666] mb-20">
          The Story Behind Vaultify.
        </p>

        {/* The Vision */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold text-white mb-4">Our Vision</h3>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            In an age where data breaches and privacy concerns are rampant, we saw a need for a new kind of digital locker. Traditional centralized services, while convenient, hold your most sensitive information in a single, vulnerable place. Our vision for Vaultify is to empower you with a vault that is truly your own—a decentralized solution where your control is absolute, and your privacy is non-negotiable.
          </p>
        </div>

        {/* The Technology */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold text-white mb-4">The Technology That Powers Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-2">Blockchain</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use an immutable public ledger to store a cryptographic hash of your document, not the document itself. This creates an unalterable proof of ownership and a tamper-proof record without compromising your data.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-2">Machine Learning</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our ML models add a layer of intelligence, helping to automatically categorize and tag your documents. We're also developing advanced models to detect and flag fraudulent activity, keeping your data extra secure.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-2">Frontend & Backend</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                A user-friendly React frontend provides a seamless experience, while a robust backend handles the secure encryption and storage of your files, bridging the gap between your browser and the blockchain.
              </p>
            </div>
          </div>
        </div>

        {/* The Team */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-12">Meet the Team</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-4 border-4 border-purple-500 object-cover"
                />
                <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                <p className="text-purple-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm max-w-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Index() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const {
    account,
    isConnecting,
    error,
    isConnected,
    connectWallet,
    disconnectWallet,
    formatAddress
  } = useWallet();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="vaultify-bg-gradient min-h-screen relative">
      {/* Background Gradient Orbs */}
      <div className="vaultify-gradient-orb green w-[703px] h-[703px] absolute top-[3178px] left-[1177px]"></div>
      <div className="vaultify-gradient-orb purple w-[909px] h-[909px] absolute top-[4034px] left-[-459px]"></div>
      <div className="vaultify-gradient-orb dark w-[704px] h-[704px] absolute top-[3998px] left-[-283px]"></div>
      <div className="vaultify-gradient-orb green w-[703px] h-[703px] absolute top-[-273px] left-[-225px] opacity-50"></div>
      <div className="vaultify-gradient-orb purple w-[817px] h-[817px] absolute top-[355px] left-[991px] opacity-70"></div>
      <div className="vaultify-gradient-orb dark w-[613px] h-[613px] absolute top-[-309px] left-[156px]"></div>
      <div className="vaultify-gradient-orb dark w-[925px] h-[925px] absolute top-[752px] left-[1016px]"></div>
      <div className="vaultify-gradient-orb green w-[859px] h-[859px] absolute top-[2322px] left-[-279px] opacity-30"></div>
      <div className="vaultify-gradient-orb purple w-[817px] h-[817px] absolute top-[1840px] left-[1016px] opacity-30"></div>

      {/* Background Pattern */}
      <div className="background-pattern">
        <div className="pattern-container">
          <span className="pattern-text">HSHX1+&#125;]#+X&gt;SK+SP</span>
          <span className="pattern-text">NBFLGO#+X&gt;SK+SPOZ</span>
          <span className="pattern-text">E0SHG6WVGO#+X&gt;S&gt;S</span>
          <span className="pattern-text">NC\L25BFLGOFLGD&gt;K</span>
          <span className="pattern-text">AXJ&#123;AE0SHG6NBFLGO</span>
          <span className="pattern-text">C\L2NBFGO#+X&gt;S6N+</span>
          <span className="pattern-text">VGO#+X&gt;HG6NBGHZ9+</span>
          <span className="pattern-text">D&gt;KSO?AG6NBFLGO#+</span>
          <span className="pattern-text">PXJ&#123;AX0SHG6NH0LGO</span>
          <span className="pattern-text">4SUSO5N1JGHZ9+D&gt;K</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-elements">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/f6bfd48579bbd0e5b1bcf9f177f9ba52a81b8cc2?width=1556"
          alt="Decorative"
          className="absolute top-[773px] left-[-282px] w-[778px] h-[928px] mix-blend-overlay opacity-70"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/30ea4c2f20d54d817cbdda34a28d734ef8f3a132?width=936"
          alt="Decorative"
          className="absolute top-[685px] left-[1092px] w-[468px] h-[680px] mix-blend-overlay opacity-70"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/fb68aa95f96947e0bcd230051ec8de9e4fcc225c?width=290"
          alt="Asset"
          className="absolute top-[217px] left-[-82px] w-[145px] h-[224px] opacity-30"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5133c93630d490c4e479f937ad40051e15eb41d5?width=240"
          alt="Asset"
          className="absolute top-[594px] left-[291px] w-[120px] h-[64px] opacity-40 animate-float"
          style={{ transform: "rotate(27.851deg)" }}
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/85e2fa9e32b5827998d6c81c2218126c35805f68?width=128"
          alt="Asset"
          className="absolute top-[136px] left-[1273px] w-[64px] h-[64px] opacity-50 animate-float"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/37ac8b57c6fe0e89cd2aeb435f6a4b5eb9e0d8b7?width=415"
          alt="Asset"
          className="absolute top-[488px] left-[1288px] w-[208px] h-[234px] opacity-40"
          style={{ transform: "rotate(14.752deg)" }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="px-4 sm:px-8 py-6 relative z-20">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="site-logo" aria-label="Vaultify Home" onClick={(e)=>{e.preventDefault(); navigate('/');}}>VAULTIFY</Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/features"
                className="text-white text-[18px] font-inter hover:text-vaultify-purple transition-colors"
              >
                Features
              </Link>
              <Link
                to="/what-we-offer"
                className="text-white text-[18px] font-inter hover:text-vaultify-purple transition-colors"
              >
                What We Offer
              </Link>
              <Link
                to="/faq"
                className="text-white text-[18px] font-inter hover:text-vaultify-purple transition-colors"
              >
                FAQ's
              </Link>
              <Link
                to="/about"
                className="text-white text-[18px] font-inter hover:text-vaultify-purple transition-colors"
              >
                About Us
              </Link>
            </nav>

            {/* Desktop Wallet Button */}
            <div className="hidden sm:block">
              {isConnected ? (
                <div className="flex items-center space-x-3">
                  <span className="text-white text-sm font-medium hidden lg:block">
                    {formatAddress(account)}
                  </span>
                  <button
                    onClick={disconnectWallet}
                    className="vaultify-btn-secondary text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-2"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button
                  onClick={connectWallet}
                  disabled={isConnecting}
                  className="vaultify-btn-secondary text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-2 disabled:opacity-50"
                >
                  {isConnecting ? "Connecting..." : "Connect Wallet"}
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden text-white p-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M3 12h18M3 6h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden absolute top-full left-0 right-0 bg-vaultify-darker/95 backdrop-blur-md border-t border-white/10 z-50">
              <nav className="flex flex-col space-y-4 p-6">
                <Link
                  to="/features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-lg font-inter hover:text-vaultify-purple transition-colors"
                >
                  Features
                </Link>
                <Link
                  to="/what-we-offer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-lg font-inter hover:text-vaultify-purple transition-colors"
                >
                  What We Offer
                </Link>
                <Link
                  to="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-lg font-inter hover:text-vaultify-purple transition-colors"
                >
                  FAQ's
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-lg font-inter hover:text-vaultify-purple transition-colors"
                >
                  About Us
                </Link>

                {/* Mobile Wallet Button */}
                <div className="pt-4 border-t border-white/10">
                  {isConnected ? (
                    <div className="space-y-3">
                      <div className="text-white text-sm font-medium">
                        {formatAddress(account)}
                      </div>
                      <button
                        onClick={() => {
                          disconnectWallet();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full vaultify-btn-secondary text-base"
                      >
                        Disconnect
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        connectWallet();
                        setMobileMenuOpen(false);
                      }}
                      disabled={isConnecting}
                      className="w-full vaultify-btn-secondary text-base disabled:opacity-50"
                    >
                      {isConnecting ? "Connecting..." : "Connect Wallet"}
                    </button>
                  )}
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="text-center py-12 sm:py-20 px-4 sm:px-8 relative z-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-[55px] font-bold font-inter leading-tight mb-4">
              Your Digital Vault
            </h1>
            <h2 className="text-vaultify-text-gray text-2xl sm:text-3xl lg:text-[45px] font-bold font-inter leading-tight mb-8 sm:mb-12">
              Secure on the Blockchain
            </h2>
            <button
              onClick={connectWallet}
              disabled={isConnecting || isConnected}
              className="vaultify-btn-primary text-base sm:text-[22px] px-6 py-3 disabled:opacity-50 hover:disabled:transform-none"
            >
              {isConnecting ? "Connecting..." : isConnected ? "Wallet Connected" : "Connect Wallet"}
            </button>
            {isConnected && (
              <div className="mt-4 sm:mt-6 flex justify-center gap-3 sm:gap-4">
                <Link
                  to="/login"
                  className="text-white border border-white/30 text-base sm:text-[18px] font-bold font-inter px-6 sm:px-8 py-3 rounded-[18px] hover:border-vaultify-purple hover:text-vaultify-purple transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-purple-gradient-alt text-white text-base sm:text-[18px] font-bold font-inter px-6 sm:px-8 py-3 rounded-[18px] hover:transform hover:scale-105 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {error && (
              <div className="mt-6 max-w-md mx-auto">
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 sm:py-20 px-4 sm:px-8 relative z-20">
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
                  <h3 className="text-white text-[27px] font-bold font-inter mb-4">
                    Upload
                  </h3>
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
                  <h3 className="text-white text-[27px] font-bold font-inter mb-4">
                    Encrypt
                  </h3>
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
                  <h3 className="text-white text-[27px] font-bold font-inter mb-4">
                    Share
                  </h3>
                  <p className="text-vaultify-text-gray text-[23px] font-bold font-inter">
                    Generate a shareable, secure link for easy access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Icons Section */}
        <section className="py-12 sm:py-20 px-4 sm:px-8 relative z-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 justify-items-center">
              <div className="flex flex-col items-center text-center">
                <div className="w-[73px] h-[73px] mb-7">
                  <svg
                    width="73"
                    height="74"
                    viewBox="0 0 73 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.19336 36.906C9.19336 34.4942 10.1514 32.1811 11.8568 30.4757C13.5622 28.7703 15.8753 27.8123 18.2871 27.8123H54.6619C57.0737 27.8123 59.3867 28.7703 61.0921 30.4757C62.7976 32.1811 63.7556 34.4942 63.7556 36.906V58.1246C63.7556 60.5364 62.7976 62.8495 61.0921 64.5549C59.3867 66.2603 57.0737 67.2183 54.6619 67.2183H18.2871C15.8753 67.2183 13.5622 66.2603 11.8568 64.5549C10.1514 62.8495 9.19336 60.5364 9.19336 58.1246V36.906ZM39.5057 42.9684C39.5057 42.1645 39.1864 41.3935 38.6179 40.825C38.0494 40.2566 37.2784 39.9372 36.4745 39.9372C35.6706 39.9372 34.8996 40.2566 34.3311 40.825C33.7626 41.3935 33.4433 42.1645 33.4433 42.9684V52.0622C33.4433 52.8661 33.7626 53.6371 34.3311 54.2056C34.8996 54.774 35.6706 55.0934 36.4745 55.0934C37.2784 55.0934 38.0494 54.774 38.6179 54.2056C39.1864 53.6371 39.5057 52.8661 39.5057 52.0622V42.9684Z"
                      fill="white"
                    />
                    <path
                      d="M24.3496 30.8435V21.7498C24.3496 18.5341 25.6271 15.4501 27.9009 13.1762C30.1748 10.9023 33.2588 9.62488 36.4746 9.62488C39.6903 9.62488 42.7743 10.9023 45.0482 13.1762C47.3221 15.4501 48.5995 18.5341 48.5995 21.7498V30.8435"
                      stroke="white"
                      strokeWidth="4.54686"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-[27px] font-bold font-inter">
                  Tamper-proof
                </h3>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-[95px] h-[95px] mb-4">
                  <svg
                    width="97"
                    height="97"
                    viewBox="0 0 97 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.2229 23.4068C61.6742 22.5301 60.8658 21.8463 59.9103 21.4505C58.9547 21.0548 57.8996 20.9668 56.8917 21.1988L49.7383 22.8419C49.0052 23.0104 48.2435 23.0104 47.5104 22.8419L40.357 21.1988C39.3491 20.9668 38.294 21.0548 37.3384 21.4505C36.3829 21.8463 35.5745 22.5301 35.0258 23.4068L31.1269 29.6292C30.7291 30.2658 30.192 30.8029 29.5554 31.2047L23.333 35.1036C22.4578 35.6518 21.775 36.4589 21.3793 37.4128C20.9837 38.3667 20.8948 39.4201 21.125 40.4269L22.7681 47.5882C22.936 48.32 22.936 49.0803 22.7681 49.8121L21.125 56.9695C20.8939 57.9768 20.9823 59.0311 21.378 59.9858C21.7738 60.9405 22.4571 61.7482 23.333 62.2967L29.5554 66.1956C30.192 66.5934 30.7291 67.1305 31.1309 67.7671L35.0298 73.9895C36.1518 75.7838 38.2922 76.671 40.357 76.1975L47.5104 74.5544C48.2435 74.3859 49.0052 74.3859 49.7383 74.5544L56.8957 76.1975C57.903 76.4287 58.9573 76.3402 59.912 75.9445C60.8667 75.5488 61.6744 74.8654 62.2229 73.9895L66.1218 67.7671C66.5196 67.1305 67.0567 66.5934 67.6933 66.1956L73.9196 62.2967C74.7956 61.7474 75.4787 60.9388 75.8737 59.9833C76.2687 59.0278 76.3561 57.973 76.1237 56.9655L74.4846 49.8121C74.3161 49.079 74.3161 48.3173 74.4846 47.5842L76.1277 40.4269C76.3592 39.42 76.2714 38.366 75.8764 37.4113C75.4814 36.4566 74.7989 35.6486 73.9236 35.0996L67.6973 31.2007C67.0616 30.8021 66.5243 30.2649 66.1258 29.6292L62.2229 23.4068ZM60.2217 39.8261C60.4678 39.3736 60.5287 38.8433 60.3918 38.3468C60.2548 37.8503 59.9306 37.4262 59.4873 37.1639C59.0441 36.9015 58.5163 36.8213 58.0152 36.9402C57.514 37.059 57.0784 37.3676 56.8002 37.801L46.3964 55.4099L40.1143 49.3944C39.928 49.203 39.705 49.0512 39.4587 48.9479C39.2123 48.8445 38.9477 48.7919 38.6806 48.7931C38.4135 48.7942 38.1493 48.8492 37.9039 48.9546C37.6585 49.0601 37.4368 49.2139 37.2521 49.4069C37.0674 49.5998 36.9235 49.828 36.8289 50.0779C36.7343 50.3277 36.691 50.594 36.7016 50.8609C36.7121 51.1278 36.7763 51.3898 36.8903 51.6314C37.0044 51.8729 37.1659 52.0891 37.3652 52.2669L45.4575 60.021C45.6741 60.2281 45.9346 60.3835 46.2197 60.4758C46.5048 60.5681 46.8071 60.5947 47.1039 60.5538C47.4008 60.5129 47.6846 60.4054 47.9341 60.2394C48.1836 60.0734 48.3923 59.8532 48.5448 59.5953L60.2217 39.8261Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-[27px] font-bold font-inter">
                  On-chain verify
                </h3>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-[73px] h-[73px] mb-7">
                  <svg
                    width="74"
                    height="74"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M61.3852 18.7183H33.9424L29.2743 12.2921C28.898 11.7772 28.4053 11.3586 27.8363 11.0706C27.2673 10.7826 26.6383 10.6334 26.0006 10.635H12.8854C11.8135 10.635 10.7855 11.0608 10.0275 11.8188C9.26957 12.5768 8.84375 13.6048 8.84375 14.6767V59.1348C8.84375 60.2067 9.26957 61.2347 10.0275 61.9927C10.7855 62.7507 11.8135 63.1765 12.8854 63.1765H61.3852C62.4571 63.1765 63.4851 62.7507 64.2431 61.9927C65.001 61.2347 65.4268 60.2067 65.4268 59.1348V22.76C65.4268 21.6881 65.001 20.6601 64.2431 19.9021C63.4851 19.1441 62.4571 18.7183 61.3852 18.7183ZM12.8854 14.6767H26.0006L31.4972 22.76H12.8854V14.6767ZM45.0974 54.3657C43.9806 54.3765 42.9051 53.9446 42.106 53.1644C41.307 52.3843 40.8494 51.3194 40.8334 50.2028V49.5965L29.3753 44.2211L29.2137 44.3828C28.6091 44.9517 27.8496 45.3289 27.0309 45.4668C26.2123 45.6046 25.3711 45.4969 24.6136 45.1573C23.8561 44.8177 23.2161 44.2614 22.7743 43.5585C22.3325 42.8557 22.1088 42.0377 22.1313 41.2078C22.1538 40.378 22.4215 39.5733 22.9007 38.8954C23.38 38.2175 24.0492 37.6967 24.824 37.3987C25.5988 37.1006 26.4446 37.0387 27.2546 37.2207C28.0645 37.4027 28.8025 37.8205 29.3753 38.4214L40.7728 33.046V32.5812C40.7817 31.6068 41.1288 30.6658 41.7548 29.919C42.3808 29.1723 43.2468 28.6663 44.2047 28.4875C45.1626 28.3087 46.1529 28.4683 47.0061 28.9389C47.8593 29.4096 48.5225 30.162 48.8823 31.0676C49.242 31.9732 49.276 32.9756 48.9783 33.9035C48.6806 34.8313 48.0699 35.6269 47.2504 36.1542C46.431 36.6815 45.4538 36.9077 44.486 36.7941C43.5182 36.6805 42.62 36.2343 41.9449 35.5316L30.5676 40.9474V41.8972L42.1267 47.2726C42.614 46.7896 43.2125 46.4338 43.8696 46.2366C44.5268 46.0395 45.2223 46.0069 45.8949 46.142C46.5676 46.277 47.1967 46.5753 47.7269 47.0108C48.257 47.4463 48.672 48.0054 48.9351 48.639C49.1982 49.2726 49.3014 49.9612 49.2357 50.6442C49.1699 51.3271 48.9372 51.9833 48.558 52.5551C48.1789 53.1269 47.6649 53.5966 47.0614 53.9229C46.4579 54.2492 45.7834 54.4221 45.0974 54.4263V54.3657Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-[27px] font-bold font-inter">
                  Encrypted share
                </h3>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-[73px] h-[73px] mb-7">
                  <svg
                    width="74"
                    height="74"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M61.2351 21.7497V15.6872C61.2351 12.3438 58.5161 9.62476 55.1727 9.62476H15.7666C10.7529 9.62476 6.67285 13.7048 6.67285 18.7185V55.0933C6.67285 61.7651 12.1109 64.187 15.7666 64.187H61.2351C64.5786 64.187 67.2976 61.468 67.2976 58.1246V27.8122C67.2976 24.4687 64.5786 21.7497 61.2351 21.7497ZM55.1727 49.0308H49.1102V36.9059H55.1727V49.0308ZM15.7666 21.7497C14.9861 21.7148 14.2491 21.3802 13.7092 20.8155C13.1692 20.2509 12.8679 19.4997 12.8679 18.7185C12.8679 17.9372 13.1692 17.186 13.7092 16.6214C14.2491 16.0568 14.9861 15.7221 15.7666 15.6872H55.1727V21.7497H15.7666Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-[27px] font-bold font-inter">
                  Wallet login
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <Faq />

        {/* About Us section */}
        <AboutUsSection />




        {/* Footer */}
        <footer className="py-12 sm:py-16 px-4 sm:px-8 relative z-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-8">
              <a
                href="#"
                className="text-vaultify-text-light-gray text-sm font-bold font-inter hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-vaultify-text-light-gray text-sm font-bold font-inter hover:text-white transition-colors"
              >
                Concept
              </a>
              <a
                href="#"
                className="text-vaultify-text-light-gray text-sm font-bold font-inter hover:text-white transition-colors"
              >
                Rent
              </a>
              <a
                href="#"
                className="text-vaultify-text-light-gray text-sm font-bold font-inter hover:text-white transition-colors"
              >
                Mission
              </a>
              <a
                href="#"
                className="text-vaultify-text-light-gray text-sm font-bold font-inter hover:text-white transition-colors"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-vaultify-text-light-gray text-sm font-bold font-inter hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="text-center mb-8">
              <p className="text-vaultify-text-light-gray text-xs font-inter">
                © 2025 Houzie Proptech OPC PVT LTD
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-8">
              <a
                href="#"
                className="text-vaultify-text-light-gray text-xs font-inter hover:text-white transition-colors"
              >
                Legal Notices
              </a>
              <a
                href="#"
                className="text-vaultify-text-light-gray text-xs font-inter hover:text-white transition-colors"
              >
                Confidentiality
              </a>
              <a
                href="#"
                className="text-vaultify-text-light-gray text-xs font-inter hover:text-white transition-colors"
              >
                Credits
              </a>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <a
                href="#"
                className="w-4 h-4 opacity-80 hover:opacity-100 transition-opacity"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.01379 9.26216V15.5066H9.41931V9.26216H11.9588L12.4872 6.39096H9.41931V5.37518C9.41931 3.85737 10.0153 3.27609 11.5536 3.27609C12.0322 3.27609 12.4168 3.28783 12.6399 3.31132V0.707269C12.2201 0.592773 11.1925 0.475342 10.5995 0.475342C7.46114 0.475342 6.01379 1.95792 6.01379 5.15499V6.39096H4.07617V9.26216H6.01379Z"
                    fill="#7027FE"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-4 h-4 opacity-80 hover:opacity-100 transition-opacity"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4022 4.92944C14.4117 5.06296 14.4117 5.19651 14.4117 5.33003C14.4117 9.40256 11.312 14.0951 5.64666 14.0951C3.90127 14.0951 2.2799 13.5896 0.916016 12.7121C1.164 12.7407 1.40242 12.7503 1.65995 12.7503C3.1001 12.7503 4.42584 12.2639 5.48452 11.4341C4.13018 11.4055 2.9952 10.5185 2.60415 9.29766C2.79492 9.32626 2.98566 9.34534 3.18597 9.34534C3.46255 9.34534 3.73916 9.30717 3.99666 9.24044C2.5851 8.95429 1.5264 7.71442 1.5264 6.21702V6.17888C1.9365 6.40779 2.41342 6.55085 2.91887 6.5699C2.0891 6.01671 1.54548 5.0725 1.54548 4.00428C1.54548 3.43204 1.69805 2.90747 1.96512 2.44967C3.4816 4.31903 5.7611 5.53982 8.31714 5.67337C8.26947 5.44447 8.24084 5.20605 8.24084 4.96761C8.24084 3.2699 9.61427 1.88696 11.3215 1.88696C12.2085 1.88696 13.0096 2.25893 13.5724 2.8598C14.2686 2.72628 14.9362 2.46875 15.5276 2.11587C15.2986 2.8312 14.8122 3.43207 14.1732 3.81355C14.7932 3.74682 15.394 3.5751 15.9472 3.33669C15.5276 3.94707 15.003 4.49069 14.4022 4.92944Z"
                    fill="#7027FE"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-4 h-4 opacity-80 hover:opacity-100 transition-opacity"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.14459 1.72852C9.84943 1.72968 10.2066 1.73341 10.5153 1.7426L10.6368 1.74657C10.7772 1.75156 10.9158 1.75783 11.0828 1.76566C11.7493 1.79645 12.2039 1.90188 12.6032 2.05689C13.016 2.21607 13.3646 2.4311 13.7127 2.77922C14.0603 3.12734 14.2754 3.47703 14.4351 3.88882C14.5895 4.28757 14.695 4.74268 14.7263 5.40917C14.7338 5.57618 14.7398 5.71472 14.7447 5.85516L14.7487 5.97672C14.7578 6.28533 14.762 6.64256 14.7633 7.34743L14.7638 7.8144C14.7639 7.87146 14.7639 7.93033 14.7639 7.99108L14.7638 8.16776L14.7635 8.63479C14.7623 9.33963 14.7586 9.69688 14.7494 10.0055L14.7454 10.127C14.7404 10.2675 14.7341 10.406 14.7263 10.573C14.6955 11.2395 14.5895 11.6941 14.4351 12.0934C14.2759 12.5062 14.0603 12.8549 13.7127 13.203C13.3646 13.5506 13.0144 13.7656 12.6032 13.9253C12.2039 14.0798 11.7493 14.1852 11.0828 14.2165C10.9158 14.224 10.7772 14.2301 10.6368 14.2349L10.5153 14.2389C10.2066 14.2481 9.84943 14.2522 9.14459 14.2536L8.67756 14.2541C8.6205 14.2541 8.56163 14.2541 8.50088 14.2541H8.3242L7.85716 14.2537C7.15232 14.2525 6.79509 14.2488 6.48648 14.2396L6.36493 14.2356C6.22448 14.2306 6.08594 14.2243 5.91893 14.2165C5.25244 14.1858 4.79837 14.0798 4.39859 13.9253C3.98627 13.7661 3.6371 13.5506 3.28898 13.203C2.94087 12.8549 2.72636 12.5046 2.56665 12.0934C2.41164 11.6941 2.30674 11.2395 2.27542 10.573C2.26798 10.406 2.26191 10.2675 2.257 10.127L2.25306 10.0055C2.24389 9.69688 2.23972 9.33963 2.23836 8.63479L2.23828 7.34743C2.23945 6.64256 2.24317 6.28533 2.25236 5.97672L2.25634 5.85516C2.26133 5.71472 2.26759 5.57618 2.27542 5.40917C2.30621 4.74216 2.41164 4.28809 2.56665 3.88882C2.72583 3.47651 2.94087 3.12734 3.28898 2.77922C3.6371 2.4311 3.98679 2.21659 4.39859 2.05689C4.79785 1.90188 5.25192 1.79697 5.91893 1.76566C6.08594 1.75822 6.22448 1.75215 6.36493 1.74724L6.48648 1.7433C6.79509 1.73413 7.15232 1.72995 7.85716 1.7286L9.14459 1.72852ZM8.50088 4.85959C6.77045 4.85959 5.36935 6.26221 5.36935 7.99108C5.36935 9.72149 6.77198 11.1226 8.50088 11.1226C10.2313 11.1226 11.6324 9.71999 11.6324 7.99108C11.6324 6.26069 10.2297 4.85959 8.50088 4.85959ZM8.50088 6.11219C9.5386 6.11219 10.3798 6.95311 10.3798 7.99108C10.3798 9.0288 9.53885 9.86998 8.50088 9.86998C7.46316 9.86998 6.62196 9.02911 6.62196 7.99108C6.62196 6.95336 7.46284 6.11219 8.50088 6.11219ZM11.789 3.92013C11.3573 3.92013 11.0061 4.27081 11.0061 4.70248C11.0061 5.13416 11.3568 5.48537 11.789 5.48537C12.2206 5.48537 12.5718 5.1347 12.5718 4.70248C12.5718 4.27081 12.22 3.9196 11.789 3.92013Z"
                    fill="#7027FE"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-4 h-4 opacity-80 hover:opacity-100 transition-opacity"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.9362 13.6276H1.20944V4.84668H3.9362V13.6276ZM2.57135 3.64888C1.69942 3.64888 0.992188 2.92668 0.992188 2.05475C0.992188 1.63593 1.15856 1.23426 1.45471 0.938112C1.75086 0.641961 2.15253 0.475586 2.57135 0.475586C2.99017 0.475586 3.39184 0.641961 3.68799 0.938112C3.98414 1.23426 4.15051 1.63593 4.15051 2.05475C4.15051 2.92668 3.44299 3.64888 2.57135 3.64888ZM14.1416 13.6276H11.4207V9.35312C11.4207 8.3344 11.4002 7.02798 10.003 7.02798C8.58532 7.02798 8.36807 8.13477 8.36807 9.27973V13.6276H5.64424V4.84668H8.25944V6.04449H8.29761C8.66165 5.35458 9.5509 4.6265 10.8776 4.6265C13.6372 4.6265 14.1445 6.44376 14.1445 8.80413V13.6276H14.1416Z"
                    fill="#7027FE"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-4 h-4 opacity-80 hover:opacity-100 transition-opacity"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.68561 2.35303H7.76922C8.54145 2.35585 12.4543 2.38403 13.5093 2.66774C13.8282 2.75433 14.1188 2.92311 14.3521 3.15721C14.5854 3.39131 14.7531 3.68253 14.8386 4.00177C14.9335 4.35876 15.0002 4.8313 15.0453 5.31888L15.0547 5.41658L15.0753 5.66084L15.0829 5.75854C15.1439 6.61721 15.1514 7.42138 15.1524 7.59705V7.66751C15.1514 7.84977 15.143 8.70843 15.0753 9.60279L15.0678 9.70143L15.0594 9.79913C15.0124 10.3365 14.9429 10.8701 14.8386 11.2628C14.7531 11.582 14.5854 11.8733 14.3521 12.1074C14.1188 12.3415 13.8282 12.5102 13.5093 12.5968C12.4195 12.8899 8.27746 12.9106 7.70346 12.9115H7.57005C7.27976 12.9115 6.07914 12.9059 4.82027 12.8627L4.66057 12.8571L4.57884 12.8533L4.41819 12.8467L4.25754 12.8401C3.21475 12.7941 2.22175 12.7199 1.76423 12.5959C1.44541 12.5094 1.15486 12.3407 0.921593 12.1068C0.688328 11.8729 0.520514 11.5819 0.434908 11.2628C0.330629 10.871 0.261109 10.3365 0.214137 9.79913L0.206621 9.70049L0.199105 9.60279C0.152474 8.96623 0.126782 8.32831 0.12207 7.69006L0.12207 7.57451C0.123949 7.37253 0.131465 6.67451 0.182195 5.90416L0.188771 5.8074L0.19159 5.75854L0.199105 5.66084L0.219773 5.41658L0.229168 5.31888C0.274262 4.8313 0.340963 4.35782 0.435848 4.00177C0.52131 3.68253 0.68906 3.39131 0.922334 3.15721C1.15561 2.92311 1.44624 2.75433 1.76517 2.66774C2.22269 2.54562 3.21569 2.47046 4.25848 2.42349L4.41819 2.41691L4.57977 2.41127L4.66057 2.40846L4.82121 2.40188C5.7153 2.37314 6.60975 2.35716 7.50429 2.35397L7.68561 2.35303ZM6.13457 5.36867V9.89496L10.0399 7.63275L6.13457 5.36867Z"
                    fill="#7027FE"
                  />
                </svg>
              </a>

            </div>
          </div>
        </footer>

        {/* This is the VAULTIFY Watermark section */}
        <div className="relative pointer-events-none overflow-hidden">
          <div
            className="text-center text-[280px] lg:text-[344px] font-black transform translate-y-[30%] opacity-50"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.76) -352.73%, rgba(111, 38, 255, 0.76) 101.02%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "Impact, -apple-system, Roboto, Helvetica, sans-serif",
              lineHeight: "1",
            }}
          >
            VAULTIFY
          </div>
        </div>


        

        

      </div>
    </div>
  );
}
