const items = document.querySelectorAll(".nav-item");
const bg = document.querySelector(".nav-bg");

function updateBg(el) {
  // Fonning kengligi va o'rnini tugmaga qarab belgilaymiz
  bg.style.width = `${el.offsetWidth}px`;
  bg.style.left = `${el.offsetLeft}px`;
}

// Sahifa yuklanganda "Home" (active) ustida bo'lishi uchun
const activeItem = document.querySelector(".nav-item.active");
updateBg(activeItem);

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    // Eski active klassini olib tashlash va yangisiga qo'shish
    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    // Fonni surish
    updateBg(item);
  });
});
