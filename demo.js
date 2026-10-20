// Hitung mundur pada contoh undangan
document.querySelectorAll('[data-count]').forEach(el => {
  const t = new Date(el.dataset.count);
  const f = () => {
    let d = Math.max(0, t - new Date());
    el.innerHTML = [[864e5, 'Hari'], [36e5, 'Jam'], [6e4, 'Menit'], [1e3, 'Detik']].map(([m, l]) => {
      const n = Math.floor(d / m); d -= n * m;
      return `<span><strong>${String(n).padStart(2, '0')}</strong>${l}</span>`;
    }).join('');
  };
  f(); setInterval(f, 1000);
});
// Tombol "Pesan" pada contoh katalog
document.querySelectorAll('[data-pesan]').forEach(a => {
  a.href = `https://wa.me/${WA}?text=${encodeURIComponent('Halo, saya mau pesan: ' + a.dataset.pesan)}`;
  a.target = '_blank'; a.rel = 'noopener';
});
