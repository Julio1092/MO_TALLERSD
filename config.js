/* ══════════════════════════════════════════════════
   MANODEOBRA · config.js
   Configuración global compartida entre páginas
══════════════════════════════════════════════════ */

const SUPA_URL = '';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6Y2Zyamd3eGhnd3Nsd3Z0YmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MzA2NjIsImV4cCI6MjA4ODMwNjY2Mn0.hWg2jS8q_X6xIbfMIYGU7Bp7JcJhpYbQwJEB4ZaSjrs';

async function supaFetch(endpoint, opts = {}) {
  const res = await fetch(`/api/supa/rest/v1/${endpoint}`, {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPA_KEY,
      'Authorization': `Bearer ${SUPA_KEY}`,
      ...(opts.headers || {})
    }
  });
  const text = await res.text();
  return { ok: res.ok, status: res.status, data: text ? JSON.parse(text) : null };
}

// ✅ Usa hora local del dispositivo (no UTC) — corrige el problema de zona horaria GMT-6
function isoHoy() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function isoAyer() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
function pad(n) { return String(n).padStart(2, '0'); }

// Sesión simple via sessionStorage
function getSession() {
  try { return JSON.parse(sessionStorage.getItem('mo_user') || 'null'); } catch { return null; }
}
function setSession(user) {
  sessionStorage.setItem('mo_user', JSON.stringify(user));
}
function clearSession() {
  sessionStorage.removeItem('mo_user');
}
