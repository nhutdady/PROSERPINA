// Một chút tương tác nhỏ cho vui
document.addEventListener("DOMContentLoaded", () => {
  const rsvpBtn = document.getElementById("rsvp-btn");
  const contactBtn = document.getElementById("contact-btn");

  if (rsvpBtn) {
    rsvpBtn.addEventListener("click", () => {
      alert("Cảm ơn bạn đã bấm nút! 🥰\nBạn có thể sửa nội dung này trong file script.js.");
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      // TODO: đổi link bên dưới thành Facebook / Zalo / IG của bạn
      window.location.href = "https://www.facebook.com/";
    });
  }
});
