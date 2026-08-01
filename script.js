const redEndCall = document.getElementById("redEndCall");

redEndCall.addEventListener("click", () => {
    // Dừng âm thanh
    document.getElementById("ring").pause();
    document.getElementById("ring").currentTime = 0;

    document.getElementById("voice").pause();
    document.getElementById("voice").currentTime = 0;

    // Thoát khỏi trang
    if (history.length > 1) {
        history.back();
    } else {
        window.close();
    }
});
