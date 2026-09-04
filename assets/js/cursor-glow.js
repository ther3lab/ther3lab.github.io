// Tracks the cursor position and exposes it as --cursor-x / --cursor-y CSS
// custom properties, used by the page background's radial-gradient glow.
(function () {
  var root = document.documentElement;
  var ticking = false;
  var lastX = window.innerWidth / 2;
  var lastY = window.innerHeight / 2;

  function apply() {
    root.style.setProperty("--cursor-x", lastX + "px");
    root.style.setProperty("--cursor-y", lastY + "px");
    ticking = false;
  }

  function onMove(event) {
    lastX = event.clientX;
    lastY = event.clientY;
    if (!ticking) {
      window.requestAnimationFrame(apply);
      ticking = true;
    }
  }

  window.addEventListener("mousemove", onMove, { passive: true });
})();
