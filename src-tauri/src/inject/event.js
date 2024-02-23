document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    appWindow.setFullscreen(true);
  } else {
    appWindow.setFullscreen(false);
  }
});