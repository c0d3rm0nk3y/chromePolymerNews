/**
 * Listens for the app launching then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  console.log('background.js.onLaunched()..');
  chrome.app.window.create(
    "build.html",
    {
      id: "mainWindow",
      bounds: {
        width: 700,
        height: 415
      }
    }
  );
});
