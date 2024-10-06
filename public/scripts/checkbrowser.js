var userAgent = navigator.userAgent.toLowerCase();
var divWarning = document.getElementById("warning");
if (!window.isRtcSupported) {
    divWarning.innerText = 'Trình duyệt bạn đang sử dụng không hỗ trợ WebRTC, vui lòng mở trang này bằng trình duyệt khác. Khuyên dùng Safari, Firefox hoặc Chrome.';
    divWarning.style.display = "block";
} else if (userAgent.indexOf("Cannot") > -1 || userAgent.indexOf("micromessenger") > -1) {
    divWarning.innerText = 'Không thể tải xuống tệp, nếu bạn cần nhận tệp, hãy nhấp vào góc trên bên phải và chọn "Mở trong trình duyệt". Khuyên dùng Safari, Firefox hoặc Chrome.';
    divWarning.style.display = "block";
}