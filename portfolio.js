document.addEventListener('DOMContentLoaded', () => {
    const menuBtnIcon = document.querySelector('.menuIcon');
    const menuClose = document.querySelector('.close_menu');
    const menuBaar = document.querySelector('.menu_baar');
   


        menuBtnIcon.addEventListener('click', () => {
            menuBaar.classList.add('open');
        });
        menuClose.addEventListener('click', () => {
            menuBaar.classList.remove('open');
        });
});
