export function initBoostControls(starBtn, boostHint, setTargetSpeed) {
  function activate() {
    setTargetSpeed(4);
    if (boostHint) boostHint.style.display = "none";
  }

  function deactivate() {
    setTargetSpeed(1);
  }

  starBtn.addEventListener("mousedown", activate);
  starBtn.addEventListener("mouseup", deactivate);
  starBtn.addEventListener("mouseleave", deactivate);

  starBtn.addEventListener("touchstart", e => {
    e.preventDefault();
    activate();
  });

  starBtn.addEventListener("touchend", deactivate);
}
