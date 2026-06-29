const togglePencilMode = () => {
  const pencil =
    document.getElementsByClassName("xwd__toolbar_icon--pencil")[0] ??
    document.getElementsByClassName("xwd__toolbar_icon--pencil-active")[0];
  pencil?.parentElement.click();
};

window.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Shift") togglePencilMode();
  },
  true,
);
window.addEventListener(
  "keyup",
  (e) => {
    if (e.key === "Shift") togglePencilMode();
  },
  true,
);
