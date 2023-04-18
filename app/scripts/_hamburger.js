console.log("1 2 3");

const hamburger = document.querySelector(".hamburger");
const navMeni = document.querySelector(".list");





hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMeni.classList.toggle("active");
});