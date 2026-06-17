const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const requiredSnippets = [
  '<html lang="id">',
  'id="page-explanation"',
  'id="page-simulator"',
  'id="page-problems"',
  'id="page-solutions"',
  'function simulateSJF',
  'function simulateSRTF',
  'Jalankan Simulasi',
  'Pembahasan Solusi'
];

const missing = requiredSnippets.filter((snippet) => !html.includes(snippet));
const mojibakePattern = /â|ð|Î|�/;

if (missing.length > 0) {
  console.error('Validasi gagal. Bagian berikut tidak ditemukan:');
  missing.forEach((snippet) => console.error('- ' + snippet));
  process.exit(1);
}

if (mojibakePattern.test(html)) {
  console.error('Validasi gagal. Ditemukan karakter encoding rusak seperti â, ð, Î, atau �.');
  process.exit(1);
}

console.log('Validasi berhasil: presentasi lengkap dan berbahasa Indonesia.');
