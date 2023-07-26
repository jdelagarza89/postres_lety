//accesing the elements in document

const ham = document.querySelector(".ham")
const navMenu = document.querySelector(".nav_links")

// add an event listener for menu "click"

ham.addEventListener('click', () => {
    ham.classList.toggle("active");
    navMenu.classList.toggle("active");
})


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".logo").style.width  = "75px";
    document.querySelector('.nav_links').style.top = "75px";
} else {

    document.querySelector(".logo").style.width  = "150px";
    document.querySelector('.nav_links').style.top = "150px";
  }
}
