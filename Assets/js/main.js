let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('#navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('popup');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('popup');
}

// vanilajs
VanillaTilt.init(document.querySelector(".card"), {
    max: 25,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".your-element"));
