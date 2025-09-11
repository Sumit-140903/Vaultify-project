const KEY = "vaultifyNotificationCount";

export function getNotificationCount() {
  try {
    const n = parseInt(localStorage.getItem(KEY) || "0", 10);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

export function setNotificationCount(n) {
  try {
    const val = Math.max(0, Number(n) || 0);
    localStorage.setItem(KEY, String(val));
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("vaultify:notify", { detail: val }));
    }
  } catch {}
}

export function incrementNotification(by = 1) {
  const next = getNotificationCount() + (Number(by) || 0);
  setNotificationCount(next);
  return next;
}
