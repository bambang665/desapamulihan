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
// JavaScript untuk mengelola forum
document.addEventListener("DOMContentLoaded", function () {
  const forumForm = document.getElementById("forumForm");
  const forumPosts = document.getElementById("forumPosts");

  forumForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai dari form
    const name = document.getElementById("forumName").value;
    const message = document.getElementById("forumMessage").value;

    // Tambahkan postingan baru ke forum
    const post = document.createElement("div");
    post.className = "mb-3";
    post.innerHTML = `<h5>${name}</h5><p>${message}</p>`;
    forumPosts.prepend(post);

    // Reset form
    forumForm.reset();
  });
});
// JavaScript untuk mengelola umpan balik
document.addEventListener("DOMContentLoaded", function () {
  const feedbackForm = document.getElementById("feedbackForm");

  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai dari form
    const name = document.getElementById("feedbackName").value;
    const message = document.getElementById("feedbackMessage").value;

    // Tampilkan pesan sukses (bisa diubah sesuai kebutuhan)
    alert(`Terima kasih, ${name}! Umpan balik Anda telah diterima.`);

    // Reset form
    feedbackForm.reset();
  });
});
document.getElementById("forumForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  fetch(e.target.action, {
    method: "POST",
    body: new FormData(e.target),
  }).then((response) => {
    if (response.ok) {
      document.getElementById("forumAlert").style.display = "block"; // Show success message
      setTimeout(() => {
        document.getElementById("forumAlert").style.display = "none";
      }, 3000);
      e.target.reset(); // Reset form fields
    }
  });
});

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    fetch(e.target.action, {
      method: "POST",
      body: new FormData(e.target),
    }).then((response) => {
      if (response.ok) {
        document.getElementById("feedbackAlert").style.display = "block"; // Show success message
        setTimeout(() => {
          document.getElementById("feedbackAlert").style.display = "none";
        }, 3000);
        e.target.reset(); // Reset form fields
      }
    });
  });
$(document).ready(function () {
  $(".news-carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
