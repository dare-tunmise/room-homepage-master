const navMenu = document.getElementById("nav-menu"),
 toggleMenu = document.getElementById("toggle-menu"),
 closeMenu = document.getElementById("close-menu")

toggleMenu.addEventListener('click',() => {
   navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click',() => {
    navMenu.classList.remove('show')
 })




let slides = document.querySelectorAll(".firstpart");
let index = 0;

//next function 

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

//previous function 
    function prev() {
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');
    }