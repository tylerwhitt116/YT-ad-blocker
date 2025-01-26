class YouTubeAdBlocker {
    constructor() {
      this.adSelectors = [
        ".ytp-ad-module",           // Video ads
        ".ytp-ad-overlay-container", // Overlay ads
        ".ad-container",            // Banner ads
        "ytd-promoted-sparkles-web-renderer", // Promoted ads
        "ytd-display-ad-renderer"   // Sidebar ads
      ];
      this.skipButtonSelector = ".ytp-ad-skip-button"; // Skip button for video ads
      this.observer = null;
    }
  
    // Remove DOM-based ads
    removeAds() {
      this.adSelectors.forEach(selector => {
        const ads = document.querySelectorAll(selector);
        ads.forEach(ad => ad.remove());
      });
    }
  
    // Automatically skip ads
    autoSkipAds() {
      const skipButton = document.querySelector(this.skipButtonSelector);
      if (skipButton) {
        skipButton.click();
      }
    }
  
    // Observe mutations for dynamically added ads
    observeMutations() {
      const config = { childList: true, subtree: true };
      this.observer = new MutationObserver(() => {
        this.removeAds();
        this.autoSkipAds();
      });
      this.observer.observe(document.body, config);
    }
  
    // Stop observing mutations
    stopObserving() {
      if (this.observer) {
        this.observer.disconnect();
      }
    }
  }
  
  export default YouTubeAdBlocker;
  