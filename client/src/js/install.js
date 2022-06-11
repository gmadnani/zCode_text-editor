const installBtn = document.querySelector("#buttonInstall");

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  installBtn.classList.toggle("hidden", false);
});

// Click event handler on the `installBtn` element
installBtn.addEventListener("click", async () => {
  // Hide the install button
  installBtn.classList.toggle("hidden", true);
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
});

// Event handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
  installBtn.classList.toggle("hidden", true);
  console.log("JATE was installed");
});
