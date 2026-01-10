document.addEventListener('DOMContentLoaded', () => {
    const menuBtnIcon = document.querySelector('.menuIcon');
    const menuBaar = document.querySelector('.menu_baar');

    if (menuBtnIcon && menuBaar) {
        menuBtnIcon.addEventListener('click', () => {
            menuBaar.classList.toggle('open');
        });
    } else {
        console.log("Error: HTML elements not found. Please check classes.");

    }
});
