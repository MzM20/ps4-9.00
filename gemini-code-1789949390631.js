function runKernelExploit() {
    if (typeof updateProgress === "function") {
        updateProgress(65, "أدخل فلاشة الـ USB المجهزة لثغرة Kernel 9.00...");
    }
    setTimeout(function() {
        if (typeof loadGoldHen === "function") {
            loadGoldHen();
        }
    }, 2500);
}