import { apiFetch, getToken } from './api';

export async function getDocs() {
  try {
    const token = getToken();
    if (token) {
      try {
        const res = await apiFetch('/api/documents/user-documents');
        if (res && res.documents && Array.isArray(res.documents)) {
          // map backend document shape to frontend expected shape
          return res.documents.map((d) => ({
            id: String(d._id),
            title: d.fileName || 'Untitled',
            description: d.description || '',
            fileName: d.fileName || '',
            fileType: d.fileType || 'file',
            dataUrl: d.cloudinaryUrl || '',
            createdAt: new Date(d.uploadedAt || d.createdAt || Date.now()).getTime(),
          }));
        }
      } catch (err) {
        // fallback to localstorage on any API error
        console.error('Failed to fetch docs from backend, falling back to localstorage', err);
      }
    }

    const raw = localStorage.getItem('vaultifyDocuments');
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch (err) {
    return [];
  }
}

export async function getDoc(id) {
  const list = await getDocs();
  return list.find((d) => d.id === id) || null;
}

export async function deleteDoc(id) {
  const token = getToken();
  if (token) {
    try {
      await apiFetch(`/api/documents/${id}`, { method: 'DELETE' });
      return true;
    } catch {
      // fall back to local deletion on error
    }
  }
  try {
    const raw = localStorage.getItem('vaultifyDocuments');
    const arr = raw ? JSON.parse(raw) : [];
    const next = Array.isArray(arr) ? arr.filter((d) => d.id !== id) : [];
    localStorage.setItem('vaultifyDocuments', JSON.stringify(next));
    return true;
  } catch {
    return false;
  }
}

function uuid() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return `doc_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
}

export function saveDoc({ title, description, fileName, fileType, dataUrl }) {
  const doc = {
    id: uuid(),
    title: String(title || 'Untitled').trim(),
    description: String(description || '').trim(),
    fileName: String(fileName || '').trim(),
    fileType: String(fileType || '').trim(),
    dataUrl: dataUrl || '',
    createdAt: Date.now(),
  };
  try {
    const list = (() => {
      try {
        const raw = localStorage.getItem('vaultifyDocuments');
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    })();
    const next = [doc, ...list];
    localStorage.setItem('vaultifyDocuments', JSON.stringify(next));
  } catch {}
  return doc;
}
