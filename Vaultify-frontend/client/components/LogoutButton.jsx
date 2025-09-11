import { useEffect, useState, useCallback } from "react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@/hooks/use-wallet";

export default function LogoutButton({ className = "", fullWidth = false, label = "Logout" }) {
  const navigate = useNavigate();
  const { isConnected, disconnectWallet } = useWallet();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const check = () => {
      try {
        setIsLoggedIn(!!localStorage.getItem("vaultifyCurrentUserName"));
      } catch {
        setIsLoggedIn(false);
      }
    };
    check();
    const onStorage = (e) => {
      if (!e || !e.key || e.key === "vaultifyCurrentUserName") check();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleLogout = useCallback(() => {
    try {
      localStorage.removeItem("vaultifyCurrentUserName");
    } catch {}
    if (isConnected) disconnectWallet();
    try {
      const evt = new CustomEvent("vaultify:logout");
      window.dispatchEvent(evt);
    } catch {}
    navigate("/");
  }, [disconnectWallet, isConnected, navigate]);

  if (!isLoggedIn && !isConnected) return null;

  return (
    <button
      type="button"
      onClick={handleLogout}
      className={`logout-btn inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-vaultify-purple/60 ${fullWidth ? "w-full" : ""} ${className}`}
      aria-label="Logout"
    >
      <LogOut size={18} />
      <span>{label}</span>
    </button>
  );
}
