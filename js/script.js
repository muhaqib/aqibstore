// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger di klik
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// form untuk ke Whatsapp
function sendToWhatsApp() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const nohp = document.getElementById("nohp").value;
  const pesan = document.getElementById("pesan").value;

  const message = `Halo Aqib Store, saya ingin konsultasi dengan anda, saya.%0A%0A*Nama:* ${nama}%0A*Email:* ${email}%0A*No HP:* ${nohp}%0A*Pesan:* ${pesan}`;
  const nomor = "6283851281977"; // Ganti dengan nomor WA yang dituju

  const url = `https://wa.me/${nomor}?text=${message}`;
  window.open(url, "_blank");
}
