# Catatan Kantong (aplikasi Android)

Aplikasi catatan pemasukan dan pengeluaran harian dengan batas budget harian atau bulanan dan peringatan otomatis. Dibungkus dengan Capacitor, APK-nya dibangun otomatis oleh GitHub Actions. Kamu tidak perlu memasang Android Studio.

## Cara mendapatkan APK

1. Buat akun di github.com kalau belum punya, lalu buat repositori baru (boleh Private), misalnya `catatan-kantong`.
2. Ekstrak zip ini di komputermu, lalu unggah seluruh isinya ke repositori itu. Pastikan folder tersembunyi `.github` ikut terunggah. Cara paling aman memakai Git:
   ```
   cd catatan-kantong-app
   git init -b main
   git add .
   git commit -m "Catatan Kantong"
   git remote add origin https://github.com/NAMA-KAMU/catatan-kantong.git
   git push -u origin main
   ```
3. Buka tab **Actions** di repositori. Workflow **Build APK** berjalan otomatis setelah push dan butuh sekitar 5 sampai 10 menit. Kalau tidak jalan sendiri, pilih Build APK lalu tekan **Run workflow**.
4. Setelah centang hijau, buka halaman **Releases** di repositori. Unduh `Catatan-Kantong.apk` langsung dari ponselmu. File yang sama juga ada di bagian Artifacts pada halaman run (berbentuk zip).

## Cara instal di ponsel

1. Buka file `Catatan-Kantong.apk` yang sudah diunduh.
2. Android akan meminta izin **Instal aplikasi dari sumber ini**. Izinkan untuk browser atau aplikasi File yang kamu pakai.
3. Tekan Instal. Ikon Catatan Kantong muncul di layar aplikasi.

APK ini memakai tanda tangan debug, cukup untuk dipakai pribadi. Untuk Play Store diperlukan build release yang ditandatangani.

## Catatan penting

- Data tersimpan di dalam aplikasi di ponsel itu saja. Menghapus data aplikasi atau mencopot aplikasi menghapus catatanmu. Pakai menu Cadangan (ikon paling kanan) untuk menyalin data sebelum itu.
- Data di versi web (halaman artifact) tidak otomatis pindah ke aplikasi. Salin lewat menu Cadangan di versi web, lalu pulihkan di aplikasi.
- Tombol kembali Android menutup panel yang terbuka, lalu kembali ke Beranda, lalu keluar dari aplikasi.

## Mengubah aplikasi

Semua tampilan dan logika ada di satu file: `www/index.html`. Ubah file itu, lakukan commit dan push, lalu APK baru dibangun otomatis dan muncul sebagai Release baru.

## Struktur

- `www/` isi aplikasi (HTML, CSS, JS) dan daftar font
- `assets/` ikon dan splash screen sumber
- `scripts/copy-fonts.mjs` menyalin font agar aplikasi tampil sama saat offline
- `.github/workflows/build-apk.yml` langkah pembangunan APK
- `capacitor.config.json` nama dan ID aplikasi
