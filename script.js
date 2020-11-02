const menuIcon = document.querySelector
(".hamburger-menu");
const navbar = document.querySelector
(".navbar-paginas");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
})

