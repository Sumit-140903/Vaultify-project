import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Faq.css";

export default function Faq({ showBack = false }) {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Are my documents stored on the blockchain?",
      answer:
        "No. We only store the cryptographic hash of your document on-chain. The actual file remains encrypted and can be deleted at your discretion.",
    },
    {
      question: "Do I need a crypto wallet to use Vaultify?",
      answer:
        "Yes, you need a crypto wallet to authenticate and interact with the blockchain features of Vaultify.",
    },
    {
      question: "What if I lose my encryption key?",
      answer:
        "If you lose your encryption key, the data cannot be recovered. We recommend storing your keys securely and having backup procedures in place.",
    },
    {
      question: "Can I revoke a document I shared?",
      answer:
        "Yes, you can revoke access to shared documents at any time through your Vaultify dashboard.",
    },
    {
      question: "Can I prove ownership of a document later?",
      answer:
        "Yes, the blockchain record provides immutable proof of when you uploaded and owned the document.",
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 px-4 sm:px-8 relative z-20">
      {showBack && (
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
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="label">Back</span>
          </button>
        </div>
      )}

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-[38px] font-bold font-inter mb-2">
            FAQs
          </h2>
          <p className="text-vaultify-text-gray text-lg sm:text-xl font-inter">
            Got questions? We've got you covered.
          </p>
        </div>

        <div className="vaultify-faq-section relative p-6 sm:p-8 rounded-xl">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/81f575f7891b27034c2e6099f62d0b380bb54f65?width=1103"
            alt="FAQ Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 sm:opacity-25 lg:opacity-20 rounded-xl pointer-events-none"
          />

          <div className="relative z-10 space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="vaultify-faq-item border-b border-gray-700 pb-4"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-panel-${index}`}
                >
                  <h3 className="text-white text-lg sm:text-xl font-medium font-inter pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                {openFaq === index && (
                  <div id={`faq-panel-${index}`} className="mt-3">
                    <p className="text-[#d1d5db] text-[15px] font-inter leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
