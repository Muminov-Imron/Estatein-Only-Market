const items = document.querySelectorAll(".nav-item");
const bg = document.querySelector(".nav-bg");

function updateBg(el) {
  bg.style.width = `${el.offsetWidth}px`;
  bg.style.left = `${el.offsetLeft}px`;
}

const activeItem = document.querySelector(".nav-item.active");
updateBg(activeItem);

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    updateBg(item);
  });
});

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");

  sidebar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.remove("active");
    menuBtn.classList.remove("open");
  }
});
