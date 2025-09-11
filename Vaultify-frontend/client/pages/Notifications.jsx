import { Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useState } from "react";
import NotificationBell from "../components/NotificationBell";
import LogoutButton from "../components/LogoutButton";
import { getDocs } from "../lib/docs";
import { setNotificationCount } from "../lib/notifications";
import "./Dashboard.css";

function getRequests() {
  try {
    const raw = localStorage.getItem("vaultifyRequests");
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export default function Notifications() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const requests = getRequests();

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const list = await getDocs();
        if (mounted) setDocs(list);
      } catch (e) {
        console.error('Failed to load documents for notifications', e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const items = useMemo(() => {
    const docItems = docs.map((d) => ({
      id: d.id,
      createdAt: d.createdAt || 0,
      type: "doc",
      title: `Document uploaded: ${d.title}`,
      description: d.fileName ? `${d.fileName} (${d.fileType || "unknown"})` : d.description || "",
    }));
    const reqItems = requests.map((r) => ({
      id: r.id,
      createdAt: r.createdAt || 0,
      type: "request",
      title: `Request sent to ${r.email}`,
      description: r.note || "",
    }));
    return [...docItems, ...reqItems].sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  }, [docs, requests]);

  useEffect(() => {
    setNotificationCount(0);
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-background">
        <div className="blur-effect blur-green-1"></div>
        <div className="blur-effect blur-purple-1"></div>
        <div className="blur-effect blur-dark-1"></div>
        <div className="blur-effect blur-dark-2"></div>
      </div>

      <div className="background-pattern">
        <div className="pattern-container"></div>
      </div>

      <header className="dashboard-header">
        <Link to="/dashboard" className="site-logo" aria-label="Vaultify Home">VAULTIFY</Link>
        <nav className="dashboard-nav">
          <div className={`nav-container ${menuOpen ? "show-mobile" : ""}`}>
            <Link to="/documents" className="nav-button">
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 25 24" fill="none"><path d="M8 6.75H21.5M8 12H21.5M8 17.25H21.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.25 7.5C4.66421 7.5 5 7.16421 5 6.75C5 6.33579 4.66421 6 4.25 6C3.83579 6 3.5 6.33579 3.5 6.75C3.5 7.16421 3.83579 7.5 4.25 7.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>My Documents</span>
            </Link>
            <Link to="/add-document" className="nav-button">
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 25 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12.5 3.75C12.6989 3.75 12.8897 3.82902 13.0303 3.96967C13.171 4.11032 13.25 4.30109 13.25 4.5V11.25H20C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12C20.75 12.1989 20.671 12.3897 20.5303 12.5303C20.3897 12.671 20.1989 12.75 20 12.75H13.25V19.5C13.25 19.6989 13.171 19.8897 13.0303 20.0303C12.8897 20.171 12.6989 20.25 12.5 20.25C12.3011 20.25 12.1103 20.171 11.9697 20.0303C11.829 19.8897 11.75 19.6989 11.75 19.5V12.75H5C4.80109 12.75 4.61032 12.671 4.46967 12.5303C4.32902 12.3897 4.25 12.1989 4.25 12C4.25 11.8011 4.32902 11.6103 4.46967 11.4697C4.61032 11.329 4.80109 11.25 5 11.25H11.75V4.5C11.75 4.30109 11.829 4.11032 11.9697 3.96967C12.1103 3.82902 12.3011 3.75 12.5 3.75Z" fill="white"/></svg>
              <span>Add Document</span>
            </Link>
            <Link to="/requests" className="nav-button">
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 25 24" fill="none"><path d="M16.25 6C16.25 6.99456 15.8549 7.94839 15.1516 8.65165C14.4484 9.35491 13.4945 9.75 12.5 9.75C11.5054 9.75 10.5516 9.35491 9.84833 8.65165C9.14506 7.94839 8.74998 6.99456 8.74998 6C8.74998 5.00544 9.14506 4.05161 9.84833 3.34835C10.5516 2.64509 11.5054 2.25 12.5 2.25C13.4945 2.25 14.4484 2.64509 15.1516 3.34835C15.8549 4.05161 16.25 5.00544 16.25 6ZM5.00098 20.118C5.03311 18.1504 5.83731 16.2742 7.24015 14.894C8.64299 13.5139 10.5321 12.7405 12.5 12.7405C14.4679 12.7405 16.357 13.5139 17.7598 14.894C19.1626 16.2742 19.9668 18.1504 19.999 20.118C17.6464 21.1968 15.0881 21.7535 12.5 21.75C9.82398 21.75 7.28398 21.166 5.00098 20.118Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>Requests</span>
            </Link>
          </div>
          {/* actions moved to top-right */}
        </nav>
        <div className="header-actions">
          <button className="hamburger-btn" aria-label="Menu" onClick={() => setMenuOpen((v)=>!v)}>
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            )}
          </button>
          <NotificationBell />
          <LogoutButton className="px-3 py-2" />
        </div>
      </header>

      <main className="dashboard-main">
        <h1 className="dashboard-title">Notifications</h1>
        <div className="document-cards" style={{maxWidth:'900px'}}>
          {items.length === 0 && (
            <div className="document-card"><div className="card-content"><div className="card-info"><h3 className="card-title">You’re all caught up</h3><p className="card-description">No notifications yet.</p></div></div></div>
          )}
          {items.map((it) => (
            <div key={`${it.type}-${it.id}`} className="document-card" style={{minHeight:'auto'}}>
              <div className="card-content" style={{alignItems:'stretch'}}>
                <div className="card-info" style={{textAlign:'left'}}>
                  <h3 className="card-title">{it.title}</h3>
                  <p className="card-description" style={{marginBottom:'12px'}}>{it.description}</p>
                </div>
                {it.type === 'doc' && (
                  <div style={{display:'flex', gap:12}}>
                    <Link className="vaultify-btn-primary" to={`/documents/${it.id}`}>View Document</Link>
                    <Link className="vaultify-btn-secondary" to="/documents">All Documents</Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="vaultify-watermark"><span>VAULTIFY</span></div>
    </div>
  );
}
