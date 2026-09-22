function runExploitSequence() {
    if (typeof updateProgress === "function") {
        updateProgress(30, "جاري معالجة الذاكرة واستهداف الثغرة...");
    }
    if (typeof initWebkit === "function") {
        initWebkit();
    }
    setTimeout(function() {
        if (typeof runKernelExploit === "function") {
            runKernelExploit();
        }
    }, 1200);
}