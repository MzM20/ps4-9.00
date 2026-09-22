function loadGoldHen() {
    if (typeof updateProgress === "function") {
        updateProgress(90, "جاري تحميل وتثبيت GoldHEN...");
    }
    setTimeout(function() {
        if (typeof window.postExploit === "function") {
            window.postExploit();
        }
    }, 1500);
}