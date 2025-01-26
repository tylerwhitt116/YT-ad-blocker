import YouTubeAdBlocker from "./adblocker.js";

const adBlocker = new YouTubeAdBlocker();

document.addEventListener("DOMContentLoaded", () => {
  adBlocker.removeAds();
  adBlocker.autoSkipAds();
  adBlocker.observeMutations();
});
