console.log("Popup Loaded 🚀");

// ==============================================
// Get HTML Elements
// ==============================================
const apiKeyInput = document.querySelector("#apiKey");
const saveButton = document.querySelector("#saveBtn");
const status = document.querySelector("#status");


// ==============================================
// Load the saved API Key when popup opens
// ==============================================
chrome.storage.local.get("apiKey", (result) => {

    if (result.apiKey) {

        apiKeyInput.value = result.apiKey;
        status.textContent = "✅ API Key Loaded";

    }

});


// ==============================================
// Save Button
// ==============================================
saveButton.addEventListener("click", saveApiKey);


// ==============================================
// Save API Key
// ==============================================
function saveApiKey() {

    // Read the API Key entered by the user
    const apiKey = apiKeyInput.value.trim();

    // Don't allow an empty API Key
    if (!apiKey) {

        status.textContent = "❌ Please enter an API Key.";
        return;

    }

    // Save the API Key
    chrome.storage.local.set({ apiKey }, () => {

        status.textContent = "✅ API Key Saved!";
        console.log("Saved:", apiKey);

    });

}