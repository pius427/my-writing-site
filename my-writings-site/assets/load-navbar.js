(function () {
  // Figure out how many folders deep we are after the repo root
  const parts = location.pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  const afterRepo = parts.length > 0 ? parts.length - 1 : 0;
  const up = afterRepo > 0 ? '../'.repeat(afterRepo) : '';
  const navUrl = up + 'assets/navbar.html';

  fetch(navUrl)
    .then(r => r.text())
    .then(html => { document.getElementById('navbar').innerHTML = html; })
    .catch(err => console.error('Navbar failed to load:', err));
})();
