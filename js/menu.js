const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


// Header

const header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    header.classList.toggle("sticky", window.scrollY > 100);
});

// desplazamiento

document.addEventListener("DOMContentLoaded", function() {
  
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        const navbarHeight = document.querySelector('header').offsetHeight; 
        const offset = section.offsetTop - navbarHeight; 
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const sectionId = this.getAttribute('href');
            scrollToSection(sectionId);
        });
    });
});
