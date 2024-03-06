function updatemenu() {
  if (document.getElementById("responsive-menu").checked == true) {
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
  } else {
    document.getElementById("menu").style.borderRadius = "10px";
  }
}

// Open the modal
function openModal(img) {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("img01").src = img.src;

  // Menambahkan event listener untuk menutup modal saat mengklik di luar gambar
  window.addEventListener("click", outsideClick);
}

// Close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";

  // Menghapus event listener saat modal ditutup
  window.removeEventListener("click", outsideClick);
}

// Function untuk menutup modal saat mengklik di luar gambar
function outsideClick(event) {
  if (event.target === document.getElementById("myModal")) {
    closeModal();
  }
}

// hitung
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// copyright
const currentYear = new Date().getFullYear();
const copyrightYear = document.getElementById("copyright-year");
copyrightYear.textContent = currentYear;
