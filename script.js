function verifyPasscode() {
    const passcode = document.getElementById("passcode").value;
    const correctPasscode = "服務";
    const message = document.getElementById("message");

    if (passcode === correctPasscode) {
        window.location.href = "https://sites.google.com/view/resres3/%E9%A6%96%E9%A0%81"; // 與第三位人物交談
    } else {
        message.textContent = "不要亂猜!再好好整理重點吧!";
    }
}