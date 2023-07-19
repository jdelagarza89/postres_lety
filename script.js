//accesing the elements in document

const ham = document.querySelector(".ham")
const navMenu = document.querySelector(".nav_links")

// add an event listener for menu "click"

ham.addEventListener('click', () => {
    ham.classList.toggle("active");
    navMenu.classList.toggle("active");
})

