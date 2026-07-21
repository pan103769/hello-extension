// ==============================================
// Stores every processed video ID
// Prevents duplicate API requests
// ==============================================
const uniqueVideoIds = new Set();

// ==============================================
// Load API Key from Chrome Storage
// ==============================================
let apiKey = "";

chrome.storage.local.get("apiKey", (result) => {

    apiKey = result.apiKey;

    if (apiKey) {
        console.log("✅ API Key Loaded");
    } else {
        console.log("❌ No API Key Found");
    }

});

// ==============================================
// Watch YouTube for newly added videos
// ==============================================
const observer = new MutationObserver(() => {

    // Every video link on the page
    const videoLinks = document.querySelectorAll("a[href*='/watch?v=']");

    for (const link of videoLinks) {

        // Extract the video ID
        const url = new URL(link.href);
        const videoId = url.searchParams.get("v");

        if (!videoId) continue;

        // Skip videos already processed
        if (uniqueVideoIds.has(videoId)) continue;

        uniqueVideoIds.add(videoId);

        // ---------------------------------------
        // Find the HTML card containing this video
        // ---------------------------------------
        const videoCard =
            link.closest("ytd-rich-item-renderer") ||
            link.closest("ytd-video-renderer") ||
            link.closest("ytd-grid-video-renderer") ||
            link.closest("ytd-compact-video-renderer");

        // Couldn't find a card
        if (!videoCard) continue;

        console.log("🎥 New Video:", videoId);

        // Send BOTH the ID and the card
        getVideoCategory(videoId, videoCard);

    }

});

// ==============================================
// Start watching YouTube
// ==============================================
observer.observe(document.body, {
    childList: true,
    subtree: true
});
// ==============================================
// Get a video's category using the YouTube API
// ==============================================
async function getVideoCategory(videoId, videoCard) {

    // Stop if no API Key has been saved
    if (!apiKey) {
        console.log("❌ Please save your YouTube API Key first.");
        return;
    }

    // Build API URL
    const url =
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

    try {

        // Send request to YouTube
        const response = await fetch(url);

        // Convert JSON into JavaScript object
        const data = await response.json();

        // Uncomment while debugging
        // console.log(data);

        // Video not found
        if (!data.items || data.items.length === 0) {
            console.log("❌ Video not found");
            return;
        }

        // Get the snippet object
        const snippet = data.items[0].snippet;

        // Useful information
        const title = snippet.title;
        const categoryId = snippet.categoryId;
        const channel = snippet.channelTitle;

        console.log("================================");
        console.log("🎬 Title      :", title);
        console.log("📺 Channel    :", channel);
        console.log("📂 CategoryID :", categoryId);
        console.log("================================");

        // ==========================================
        // KEEP ONLY EDUCATION (Category 27)
        // ==========================================
        if (categoryId !== "27") {

            // Hide this video card
            videoCard.style.display = "none";

            console.log("❌ Hidden:", title);

        } else {

            console.log("✅ Educational:", title);

        }

    } catch (error) {

        console.error("❌ API Error:", error);

    }

}