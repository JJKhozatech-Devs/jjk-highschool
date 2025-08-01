// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Set active link based on current URL
const links = document.querySelectorAll(".nav-link");
const currentPage = location.pathname.split("/").pop().split("?")[0].split("#")[0]; // remove query/hash

links.forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();
  if (linkPage === currentPage) {
    link.classList.add("border-white");
  }
});
