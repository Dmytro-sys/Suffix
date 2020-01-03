let menuBtn = document.querySelector('#js-menuBtn');

let headerMenu = document.querySelector('#js-menuList');

menuBtn.addEventListener('mouseenter', showMenu);

function showMenu() {
    headerMenu.style.display = 'block';
    headerMenu.style.opacity = '1';
    menuBtn.classList.add('burger__menu--active');
}

document.addEventListener('click', function (event) {
    let target = event.target;

    if (target.className === ('menu__list') || target.className === ('menu__item')) {
        return;
    } else {
        headerMenu.style.display = '';
        headerMenu.style.opacity = '';
        menuBtn.classList.remove('burger__menu--active');
    }
});