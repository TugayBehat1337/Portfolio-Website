let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll(`header nav a`);
let copyrightYear = document.querySelector(`copyright`)

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(`id`);

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove(`active`);
            })
        }
    })
}




menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML =
  `&copy;${currentYear} Tugay Behat | All rights reserved..`;
