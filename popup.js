function updateAdsBlockedCount() {
    chrome.storage.local.get("adsBlocked", (data) => {
      const adsBlocked = data.adsBlocked || 0;
      document.getElementById("ads-blocked").textContent = adsBlocked;
    });
  }
  
  // Reset the ads blocked count
  document.getElementById("reset").addEventListener("click", () => {
    chrome.storage.local.set({ adsBlocked: 0 }, () => {
      updateAdsBlockedCount();
    });
  });
  
  // Load the current count on popup open
  updateAdsBlockedCount();