// Data portofolio dummy. Ganti judul, deskripsi, dan warna sesuai karya asli Anda.
// Untuk thumbnail asli: ganti isi 'mock' dengan <img src="gambar/nama.jpg" alt="...">
const KAT = { inv: 'Undangan digital', web: 'Website', sos: 'Social media', cus: 'Custom' };
const ITEMS = [
  { k:'inv', jenis:'Pernikahan', t:'Undangan Taman Melati', d:'Cover, profil mempelai, galeri, peta, dan buku tamu.', a:'#d9a5a0', b:'#f5e6d8' },
  { k:'inv', jenis:'Khitan', t:'Undangan Khitan Fatih', d:'Tampilan ceria dengan hitung mundur dan tombol konfirmasi hadir.', a:'#5b8fb9', b:'#dcebf5' },
  { k:'inv', jenis:'Ulang tahun', t:'Ulang Tahun ke-7 Alya', d:'Warna cerah, galeri foto, dan daftar kado.', a:'#e9a820', b:'#f8d9e0' },
  { k:'inv', jenis:'Event', t:'Reuni Akbar Alumni', d:'Jadwal acara, lokasi, dan formulir pendaftaran peserta.', a:'#3d5a80', b:'#c9d6e3' },
  { k:'web', jenis:'Landing page', t:'Kelas Online Barista', d:'Satu halaman promo dengan tombol daftar ke WhatsApp.', a:'#8a5a44', b:'#ecdcc8' },
  { k:'web', jenis:'Company profile', t:'Profil Kontraktor Bangun Jaya', d:'Lima halaman: beranda, layanan, proyek, tentang, kontak.', a:'#0f4c5c', b:'#cfe0e0' },
  { k:'web', jenis:'Katalog', t:'Katalog Toko Batik', d:'Daftar produk dengan tombol pesan per item.', a:'#7a3e65', b:'#f0dcea' },
  { k:'sos', jenis:'Instagram', t:'Branding Instagram Kedai Kopi', d:'Desain feed, template story, dan jadwal unggahan bulanan.', a:'#c6573b', b:'#f6e3d6' },
  { k:'sos', jenis:'Facebook Page', t:'Facebook Page Toko Bangunan', d:'Penataan halaman, katalog produk, dan balasan pesan.', a:'#2f6db5', b:'#dce8f6' },
  { k:'sos', jenis:'Pengelolaan', t:'Kelola Akun Klinik Gigi', d:'Konten edukasi mingguan dan laporan hasil tiap bulan.', a:'#2e8b7a', b:'#d9efe9' },
  { k:'cus', m:'cert', jenis:'Sertifikat digital', t:'Sertifikat Pelatihan & Lomba', d:'Nama penerima tercetak otomatis, hasilnya PDF siap dikirim ke peserta.', a:'#c28a14', b:'#f6ecd0' },
  { k:'cus', m:'cv', jenis:'CV digital', t:'CV Digital Pribadi', d:'Halaman CV online yang rapi: profil, pengalaman, keahlian, dan unduhan PDF.', a:'#5a4fa3', b:'#e2def5' },
];
const MOCK = {
  inv: '<div class="ph"><div class="c"></div><div class="l"></div><div class="l s"></div><div class="l"></div><div class="bt"></div></div>',
  web: '<div class="bw"><div class="tp"></div><div class="hr"></div><div class="cl"><i></i><i></i><i></i></div></div>',
  sos: '<div class="sg"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>',
  cert: '<div class="cert"><i class="t"></i><i class="l"></i><i class="l"></i><i class="s"></i></div>',
  cv: '<div class="cvm"><div class="sd"><i></i><b></b><b></b></div><div class="mn2"><i></i><i></i><i></i><i></i><i></i></div></div>',
};

const grid = document.getElementById('grid'), chips = document.getElementById('chips');
grid.innerHTML = ITEMS.map(i => {
  const wa = `https://wa.me/${WA}?text=${encodeURIComponent('Halo, saya tertarik dengan contoh "' + i.t + '". Bisa minta demo atau penawarannya?')}`;
  return `<article class="card" data-k="${i.k}">
    <div class="th" style="--a:${i.a};--b:${i.b}"><span class="tag">Contoh</span>${MOCK[i.m || i.k]}</div>
    <h3>${i.t}</h3><p class="meta">${KAT[i.k]} · ${i.jenis}</p><p>${i.d}</p>
    <a href="${wa}" target="_blank" rel="noopener">Minta demo</a></article>`;
}).join('');

const total = ITEMS.length, count = k => ITEMS.filter(i => i.k === k).length;
chips.innerHTML = `<button aria-pressed="true" data-k="all">Semua<span>${total}</span></button>` +
  Object.entries(KAT).map(([k, v]) => `<button aria-pressed="false" data-k="${k}">${v}<span>${count(k)}</span></button>`).join('');
chips.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  chips.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
  grid.querySelectorAll('.card').forEach(c => c.hidden = b.dataset.k !== 'all' && c.dataset.k !== b.dataset.k);
});
