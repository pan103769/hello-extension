// MutationObserver - watches for DOM changes
const observer = new MutationObserver(() => {

    // Get all YouTube video links
    const videoLinks = document.querySelectorAll("a[href*='/watch?v=']");

    // Store unique video IDs
    const uniqueVideoIds = new Set();

    // Extract video IDs
    for (const link of videoLinks) {

        const url = link.href;
        const urlObject = new URL(url);

        uniqueVideoIds.add(urlObject.searchParams.get("v"));
    }

    console.log(uniqueVideoIds);

});

observer.observe(document.body, {
    childList: true,
    subtree: true
});