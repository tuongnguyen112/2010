function checkOrientation() {
  if (window.innerHeight > window.innerWidth) {
    // Nếu đang ở chế độ dọc
    document.body.innerHTML = `
      <div style="
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        text-align:center;
        background:#ffebee;
        color:#c62828;
        font-family:sans-serif;
        font-size:1.5rem;
        padding:20px;
      ">
        🔄 Vui lòng xoay ngang điện thoại để xem nội dung tốt nhất!
      </div>
    `;
  } else {
    // Nếu xoay ngang và chưa reload lần nào thì reload 1 lần
    if (!sessionStorage.getItem('hasReloadedLandscape')) {
      sessionStorage.setItem('hasReloadedLandscape', 'true');
      location.reload();
    }
  }
}

// Gọi khi load trang và khi xoay màn hình
window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);