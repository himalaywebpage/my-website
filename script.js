// 🔄 Image preview
document.addEventListener("DOMContentLoaded", function () {
  const upload = document.getElementById('upload');
  const preview = document.getElementById('preview');

  upload.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // 🖼 Background slideshow
  const wallpapers = [
    "ae.jpeg", "af.jpg", "ad.jpeg", "wx.jpg", "ww.jpg",
    "we.jpg", "cc.jpg", "bc.jpg", "kk.jpg", "ll.jpg",
    "uu.jpg", "ac.jpg", "ad.jpeg"
  ];
  let i = 0;

  setInterval(() => {
    document.body.style.background = `url(${wallpapers[i]}) no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
    i = (i + 1) % wallpapers.length;
  }, 5000);

  // ⏰ Live Date & Time
  function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString("en-IN", {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
      datetimeElement.textContent = dateTimeString;
    }
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();
});
