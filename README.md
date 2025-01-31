# YouTube Ad Blocker Extension

![YouTube Ad Blocker](https://img.shields.io/badge/version-1.0-blue.svg) ![Chrome](https://img.shields.io/badge/compatible-Chrome-orange.svg) ![Opera GX](https://img.shields.io/badge/compatible-Opera%20GX-purple.svg)

## 🚀 Overview
A lightweight browser extension that blocks YouTube ads, including pre-roll, mid-roll, and banner ads. This extension is built using JavaScript, Chrome Web APIs, and Object-Oriented Programming (OOP).

## ✨ Features
- 🚫 Blocks YouTube video ads.
- 📊 Tracks the number of ads blocked.
- ⚡ Uses `declarativeNetRequest` API for efficiency.
- 🎨 Clean and responsive popup UI.
- 🔄 Reset button to clear ad count.

## 📜 Installation Guide

### **🔹 Load the Extension in Chrome**
1. **Download the Code:**
   ```sh
   git clone https://github.com/yourusername/youtube-ad-blocker.git
   cd youtube-ad-blocker
   ```
2. **Open Chrome Extensions Page:**
   - Go to `chrome://extensions/`
   - Enable **Developer Mode** (top right corner).
3. **Load Unpacked Extension:**
   - Click on **Load unpacked**.
   - Select the `youtube-ad-blocker` folder.

### **🔸 Load the Extension in Opera GX**
1. Follow steps 1–2 above.
2. Click **Load unpacked** and select the extension folder.
3. If prompted, enable "Allow access to search page results."

## ⚙️ How It Works
The extension uses Chrome's **declarativeNetRequest** API to block ad-related network requests before they load. This ensures efficient and seamless ad blocking without interfering with YouTube's core functionality.

### **🔧 Technologies Used**
- **JavaScript (ES6+)**
- **Chrome Extensions API**
- **Manifest V3**
- **Declarative Net Request API**
- **HTML & CSS (Popup UI)**

## 🛠 Troubleshooting

### ❌ "Unchecked runtime.lastError: You do not have permission to use blocking webRequest listeners"
**Solution:** Ensure your `manifest.json` includes:
```json
"permissions": ["declarativeNetRequest", "storage"],
"host_permissions": ["*://*.youtube.com/*"]
```

### ❌ "Cannot read properties of undefined (reading 'addListener')"
**Solution:**
- Ensure you're using **Manifest V3**.
- Use `chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(...)` in `background.js`.

## 📌 Contributing
Feel free to fork, modify, and submit pull requests! If you encounter any issues, report them in the **Issues** section.

## 📜 License
This project is licensed under the MIT License.

## 🌟 Show Your Support
If you like this project, ⭐ **star** this repository to help others discover it!

---

🔗 **GitHub Repository:** [https://github.com/yourusername/youtube-ad-blocker](https://github.com/tylerwhitt116/YT-ad-blocker)

