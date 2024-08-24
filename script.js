// JavaScript untuk fungsionalitas tambahan
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Desa Pamulihan siap digunakan!");

  // Event listener untuk form kontak
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Tampilkan pesan sukses (bisa diubah sesuai kebutuhan)
    alert(`Terima kasih, ${name}! Pesan Anda telah diterima.`);

    // Reset form
    contactForm.reset();
  });
});
