import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getNotificationCount } from "../lib/notifications";

export default function NotificationBell() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setCount(getNotificationCount());
    const onStorage = (e) => {
      if (e && e.key && e.key !== "vaultifyNotificationCount") return;
      setCount(getNotificationCount());
    };
    const onNotify = (e) => {
      if (e && typeof e.detail === "number") setCount(e.detail);
      else setCount(getNotificationCount());
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener("vaultify:notify", onNotify);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("vaultify:notify", onNotify);
    };
  }, []);

  const display = count > 99 ? "99+" : String(count);

  return (
    <div className="notification-bell">
      <button
        className="notification-icon"
        aria-label="Notifications"
        onClick={() => navigate("/notifications")}
      >
        <Bell size={24} />
        {count > 0 && <span className="notification-badge">{display}</span>}
      </button>
    </div>
  );
}
