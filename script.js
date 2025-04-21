function verifyPasscode() {
    const passcode = document.getElementById("passcode").value;
    const correctPasscode = "服務";
    const message = document.getElementById("message");

    if (passcode === correctPasscode) {
       const newWindow = window.open("https://sites.google.com/view/resres3/%E9%A6%96%E9%A0%81", "_blank");
        if (!newWindow || newWindow.closed || typeof newWindow.closed == "undefined") {
            message.textContent = "請允許彈出式視窗以進入下一關！";
        }
    } else {
        message.textContent = "不要亂猜!再好好整理重點吧!";
    }
}
