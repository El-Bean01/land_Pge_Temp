
const toggle = document.getElementById("langToggle");

toggle.addEventListener("change", () => {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (toggle.checked && translations[key]) {
      el.textContent = translations[key]; // Spanish
    } else {
      el.textContent = key; // Original text
    }
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");

document.querySelectorAll(".screenshot img").forEach(img => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.classList.add("hidden");
});
