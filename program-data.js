async function getPrograms() {
  const r = await fetch(PROGRAM_API_URL + '?t=' + Date.now(), { cache: 'no-store' });
  if (!r.ok) throw new Error('Program unavailable');
  const d = await r.json();
  return Array.isArray(d.programs) ? d.programs : [];
}
function programTime(p) { return `${p.start_time || ''} — ${p.stop_time || ''}`; }
function programTitle(p) { return String(p.title || '').trim(); }
