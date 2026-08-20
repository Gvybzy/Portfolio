/** Casual anti-selection / anti-copy protection. */
export function initProtection() {
  const editable = (target) => target instanceof Element && (target.matches("input, textarea, [contenteditable=\"true\"]") || !!target.closest("[contenteditable=\"true\"]"));
  document.addEventListener("contextmenu", e => { if (!editable(e.target)) e.preventDefault(); });
  document.addEventListener("copy", e => { if (!editable(e.target)) e.preventDefault(); });
  document.addEventListener("cut", e => { if (!editable(e.target)) e.preventDefault(); });
  document.addEventListener("dragstart", e => { if (!editable(e.target)) e.preventDefault(); });
  document.addEventListener("keydown", e => {
    if (editable(e.target)) return;
    const k=e.key.toLowerCase(), cm=e.ctrlKey||e.metaKey, sh=e.shiftKey;
    if (k==="f12" || (cm&&sh&&["i","j","c"].includes(k)) || (cm&&["u","s","a"].includes(k))) { e.preventDefault(); e.stopPropagation(); }
  });
}
