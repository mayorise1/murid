// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementaryId('sapaButton');
// 2. Tambahkan 'eveny listener' untuk akses 'click'
tombolSapa.addEventListener('click', function() {
    // 3. Jalankan kode ini ketika tombol di klik
    alert('Halo! Terima kasih sudah berkunjung!');
});
