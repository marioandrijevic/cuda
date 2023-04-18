console.log("1 2 3");

const hamburger = document.querySelector(".hamburger");
const navMeni = document.querySelector(".list");
const header = document.querySelector("header");



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMeni.classList.toggle("active");
});