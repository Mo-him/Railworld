document.addEventListener('DOMContentLoaded', function () {
    let navList = document.getElementById('nav-list');
    let openMenu = document.querySelector('.menu-open');
    let closeMenu = document.querySelector('.close');

    openMenu.addEventListener('click', function () {
        navList.classList.add('show');
    });

    closeMenu.addEventListener('click', function () {
        navList.classList.remove('show');
    });
});
