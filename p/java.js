  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inview'); // 画面に入ったら表示
      } else {
        entry.target.classList.remove('inview'); // 画面から出たら非表示に
      }
    });
  });

  document.querySelectorAll('.fade-item').forEach(el => {
    observer.observe(el);
  });
  threshold: 0.1 
});