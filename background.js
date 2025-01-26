// List of ad-related domains to block
const adDomains = [
  "*://*.doubleclick.net/*",
  "*://*.googleadservices.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.youtube.com/*ad*"
];

// Keep track of the number of ads blocked
let adsBlockedCount = 0;

// Listen for web requests to ad-related domains
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    adsBlockedCount += 1; // Increment count when an ad is blocked

    // Save the count to Chrome storage
    chrome.storage.local.set({ adsBlocked: adsBlockedCount });

    return { cancel: true }; // Block the request
  },
  { urls: adDomains },
  ["blocking"]
);

// Initialize blocked ads count on extension load
chrome.runtime.onInstalled.addListener(() => {
  console.log("Ad blocker installed successfully!");
});

