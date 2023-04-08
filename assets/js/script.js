let iconHamburger = document.querySelector(".icon_hamburger");
let iconClose = document.querySelector('.icon_close');
let menuMobile = document.querySelector('.menu_mobile');
let menuBackground = document.querySelector(".menu_mobile_bg");


iconHamburger.addEventListener('click', openMenu);
iconClose.addEventListener('click', closeMenu);

function openMenu()
{
    iconHamburger.style.display = "none";
    iconClose.style.display = "block";
    menuMobile.style.display = "block";
    menuBackground.style.display = "block";
}

function closeMenu()
{
    iconHamburger.style.display = "block";
    iconClose.style.display = "none";
    menuMobile.style.display = "none";
    menuBackground.style.display = "none";
}
