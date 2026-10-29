# Hero Carousel Integration

## Basis perubahan

Implementasi awal dibuat dari `origin/feature/navbar`. Setelah navbar dan katalog tersedia di `main`, `origin/main` digabungkan ke branch fitur dan blok banner statis pada komentar `<!--BANNER/hero carousel HEADER-->` diganti dengan satu Bootstrap carousel ber-ID `hero-carousel`. Navbar dan isi katalog dari `main` tetap dipertahankan.

## File

- `index.html`: markup carousel, kontrol, indikator, dan satu set dependency JavaScript Bootstrap 4.2.1.
- `assets/css/hero-carousel.css`: seluruh style carousel, di-scope ke `#hero-carousel`.
- `assets/js/hero-carousel.js`: interval 5 detik, pause/play, keyboard navigation Bootstrap, dan reduced motion.
- `assets/images/hero-*.jpg`: tiga foto produk/fabric tanpa manusia untuk visual slide.

## Integrasi ke branch lain

1. Gunakan `main` terbaru yang sudah memuat navbar dan katalog sebagai basis branch tujuan.
2. Salin folder `assets/` dan `INTEGRATION.md`.
3. Di `index.html`, tambahkan `assets/css/hero-carousel.css` setelah stylesheet existing.
4. Ganti hanya banner di bawah komentar `<!--BANNER/hero carousel HEADER-->` dengan `<section id="hero-carousel">...</section>` dari file ini.
5. Tambahkan jQuery Slim, Popper.js, Bootstrap JavaScript, lalu `assets/js/hero-carousel.js` sebelum `</body>` hanya jika dependency tersebut belum dimuat oleh hasil integrasi.
6. Pastikan section katalog tetap memakai `id="produk"` agar semua CTA bekerja.

Tidak ada dependency package atau build step baru.

## Aset visual

Semua foto merupakan placeholder editorial, bukan foto stok produk milik lost n found. Ganti dengan foto katalog asli saat tersedia.

- `hero-rack.jpg`: [Clothes on Rack](https://www.pexels.com/photo/clothes-on-rack-11435536/) oleh Shannon Deans.
- `hero-folded.jpg`: [Close up of Folded Clothes](https://www.pexels.com/photo/close-up-of-folded-clothes-10348923/) oleh Xeniya Kovaleva.
- `hero-denim.jpg`: [Close-up of Denim Fabric](https://www.pexels.com/photo/close-up-of-denim-fabric-4049757/) oleh Dan Cristian Pădureț.

Ketiganya tersedia di bawah [Pexels License](https://www.pexels.com/license/): gratis digunakan dan dimodifikasi untuk website komersial; atribusi tidak wajib.

## Verifikasi yang dilakukan

- Browser responsive pada viewport 375×812, 768×1024, dan 1440×900.
- Tidak ada horizontal overflow pada ketiga viewport.
- Katalog gabungan tetap menampilkan sembilan kartu produk dan CTA mengarah ke section katalog.
- Indikator, Previous, Next, keyboard ArrowLeft, pause/play, dan perpindahan otomatis 5 detik berfungsi.
- Reduced motion menghentikan autoplay saat halaman dibuka; pengguna tetap dapat memulainya lewat tombol play.
- Ketiga CTA menuju `#produk`.
- Tidak ada ID duplikat atau error/warning console saat pengujian.
