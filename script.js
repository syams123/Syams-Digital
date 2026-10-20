const WA = '6285707838184'; // GANTI dengan nomor WhatsApp Anda (format 62..., tanpa + atau spasi)

const header = `
<header class="site"><div class="wrap bar">
  <a class="logo" href="index.html">
  <img src="img/logo-sd.png" alt="Syams Digital">
  <span>Syams Digital</span>
</a>
  <button class="burger" aria-label="Buka menu" aria-expanded="false"><span></span></button>
  <nav id="nav" aria-label="Menu utama"><ul>
    <li><a href="index.html">Beranda</a></li>
    <li class="has"><button class="m" aria-expanded="false">Layanan</button>
      <div class="mega"><div class="wrap grid">
        <div><h4>Undangan digital</h4>
          <a href="undangan-pernikahan.html">Pernikahan</a>
          <a href="undangan-khitan.html">Khitan &amp; aqiqah</a>
          <a href="undangan-ulang-tahun.html">Ulang tahun &amp; acara</a></div>
        <div><h4>Website usaha</h4>
          <a href="landing-page.html">Landing page</a>
          <a href="company-profile.html">Company profile</a>
          <a href="marketplace.html">Marketplace</a></div>
        <div><h4>Pendukung</h4>
  <a href="cv-digital.html">Pembuatan CV digital</a>
  <a href="sertifikat-digital.html">Pembuatan sertifikat digital</a>
  <a href="perawatan-website.html">Perawatan website</a></div>
        <aside><p>Belum tahu butuh yang mana? Ceritakan usaha Anda, kami bantu pilihkan.</p>
          <a class="btn" href="kontak.html" style="display:inline-block;padding:9px 16px">Konsultasi gratis</a></aside>
      </div></div></li>
    <li><a href="portofolio.html">Portofolio</a></li>
    <li><a href="kontak.html">Kontak</a></li>
    <li><a class="btn" data-wa href="#">Chat WhatsApp</a></li>
  </ul></nav>
</div></header>`;

const footer = `
<footer class="site"><div class="wrap">
  <div class="cols">
    <div><h4>Syams Digital</h4><p>Jasa pembuatan undangan digital, landing page, dan company profile untuk usaha dan acara Anda.</p></div>
    <div><h4>Halaman</h4><a href="index.html">Beranda</a><a href="layanan.html">Layanan</a><a href="portofolio.html">Portofolio</a><a href="kontak.html">Kontak</a></div>
    <div><h4>Hubungi</h4><a data-wa href="#">WhatsApp</a><a href="mailto:el.hadee98@gmail.com">Email</a></div>
  </div>
  <div class="copy">&copy; <span id="yr"></span> Syams Digital. All Rights Reserved.</div>
</div></footer>`;

document.getElementById('hdr').outerHTML = header;
document.getElementById('ftr').outerHTML = footer;
document.getElementById('yr').textContent = new Date().getFullYear();

const page = (location.pathname.split('/').pop() || 'index').replace('.html', '');
document.querySelectorAll('nav > ul > li > a:not(.btn)').forEach(a => {
  if (a.getAttribute('href').replace('.html', '') === page) a.classList.add('on');
});
const SVC = ["undangan-pernikahan", "undangan-khitan", "undangan-ulang-tahun", "landing-page", "company-profile", "katalog-produk", "cv-digital", "sertifikat-digital", "perawatan-website"];
if (page === 'layanan' || SVC.includes(page)) document.querySelector('nav li.has > button').classList.add('on');
document.querySelectorAll('[data-wa]').forEach(a => {
  a.href = `https://wa.me/${WA}?text=${encodeURIComponent('Halo, saya ingin bertanya tentang jasa pembuatan website.')}`;
  a.target = '_blank'; a.rel = 'noopener';
});

const nav = document.getElementById('nav'), burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  const o = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', o);
});
document.querySelectorAll('li.has > button').forEach(b => b.addEventListener('click', () => {
  const li = b.parentElement, o = li.classList.toggle('open');
  b.setAttribute('aria-expanded', o);
}));
const closeAll = () => {
  document.querySelectorAll('li.has.open').forEach(li => li.classList.remove('open'));
  nav.classList.remove('open'); burger.setAttribute('aria-expanded', false);
};
document.addEventListener('click', e => { if (!e.target.closest('header.site')) closeAll(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
nav.addEventListener('click', e => { if (e.target.closest('.mega a')) closeAll(); });

const form = document.getElementById('wa');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const text = `Halo, saya ${d.get('nama')}.\nSaya butuh: ${d.get('butuh')}.\n\n${d.get('pesan')}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
