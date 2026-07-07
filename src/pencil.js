const PENCIL_SELECTOR = "xwd__toolbar_icon--pencil";
const PENCIL_ACTIVE_SELECTOR = "xwd__toolbar_icon--pencil-active";

const TOGGLE_KEY = "Shift";
const ACTIVATE_KEY = "CapsLock";

const togglePencilMode = () => {
  const pencil =
    document.getElementsByClassName(PENCIL_SELECTOR)[0] ??
    document.getElementsByClassName(PENCIL_ACTIVE_SELECTOR)[0];

  pencil?.parentElement.click();
};

const handlePencilShortcuts = (e) => {
  if (e.repeat) return;
  if (e.key === TOGGLE_KEY || (e.key === ACTIVATE_KEY && e.type === "keydown"))
    togglePencilMode();
};

window.addEventListener("keydown", handlePencilShortcuts, true);
window.addEventListener("keyup", handlePencilShortcuts, true);
