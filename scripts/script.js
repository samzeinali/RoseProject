const $ = document;
let iconbar = $.querySelector('.fa-bars');
let iconclose = $.querySelector('.closenavbar-mobile');
let menuebox = $.querySelector('.navbar-mobile');
let mainbox = $.querySelector('.main');
let headermobile = $.querySelector('.header');

iconbar.addEventListener('click', function openmenue() {
    menuebox.style.display = 'unset';
    mainbox.style.display = 'none';
    headermobile.style.display = 'none';
})
iconclose.addEventListener('click', function closemenue() {
    menuebox.style.display = 'none';
    mainbox.style.display = 'flex';
    headermobile.style.display = 'flex';
})