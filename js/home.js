const hamburgerMenu = document.querySelector("span");
const nav = document.querySelector(".mobile-nav");

const closeNav = document.getElementById("close");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.add("open-nav");
});

closeNav.addEventListener("click", () => {
    nav.classList.remove("open-nav");
});