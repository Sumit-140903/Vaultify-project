import { Link, useParams, useNavigate } from "react-router-dom";
import { getDoc } from "../lib/docs";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import NotificationBell from "../components/NotificationBell";
import LogoutButton from "../components/LogoutButton";

export default function DocumentView() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const d = await getDoc(id);
        if (mounted) setDoc(d);
      } catch (e) {
        console.error('Failed to load document', e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen vaultify-bg-gradient text-white p-6">
        <div className="max-w-5xl mx-auto py-6 text-center">Loading document...</div>
      </div>
    );
  }

  if (!doc) {
    return (
      <div className="min-h-screen vaultify-bg-gradient text-white p-6">
        <header className="flex items-center justify-between max-w-5xl mx-auto py-6">
          <h1 className="text-3xl font-bold">Document Not Found</h1>
          <Link to="/documents" className="text-[#B95DFE] font-semibold hover:underline">Back to Documents</Link>
        </header>
      </div>
    );
  }

  const isImage = doc.fileType.startsWith("image/");
  const isPDF = doc.fileType === "application/pdf";

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
        <nav className="dashboard-nav">
          <div className={`nav-container ${menuOpen ? "show-mobile" : ""}`}>
            <Link to="/documents" className="nav-button nav-button-active">
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
        <h1 className="dashboard-title">{doc.title}</h1>
        <div className="document-cards" style={{maxWidth:'900px'}}>
          <div className="document-card" style={{minHeight:'auto'}}>
            <div className="card-content" style={{alignItems:'stretch'}}>
              <div className="card-info" style={{textAlign:'left'}}>
                <h3 className="card-title">Details</h3>
                <p className="card-description" style={{marginBottom:'16px'}}>File: {doc.fileName || 'Unnamed'} ({doc.fileType || 'unknown'})</p>
                <p className="card-description">{doc.description}</p>
              </div>
              <div className="card-visual" style={{minHeight:'auto'}}>
                {isImage && doc.dataUrl && (<img src={doc.dataUrl} alt={doc.title} style={{maxWidth:'100%', borderRadius:12}} />)}
                {isPDF && doc.dataUrl && (
                  <iframe title="pdf" src={doc.dataUrl} style={{width:'100%', height:500, border:'none', borderRadius:12}} />
                )}
                {!isImage && !isPDF && doc.dataUrl && (
                  <a className="vaultify-btn-primary" href={doc.dataUrl} download={doc.fileName || 'document'}>Download</a>
                )}
              </div>
              <div style={{display:'flex', gap:12}}>
                <button onClick={()=>navigate('/documents')} className="vaultify-btn-secondary">Back</button>
                <a className="vaultify-btn-primary" href={doc.dataUrl} download={doc.fileName || 'document'}>Download</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="vaultify-watermark"><span>VAULTIFY</span></div>
    </div>
  );
}
