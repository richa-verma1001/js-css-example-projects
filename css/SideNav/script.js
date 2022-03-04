
const menus = Array.from(document.querySelectorAll('.navigation nav'));
const expandedMenu = menus[0];
const collapsedMenu = menus[1];
const toggle = document.getElementById('toggleLink');

toggle.addEventListener('click', () => {
    if(toggle.classList.contains('active')) {
        toggle.classList.remove('active');
        expandedMenu.style.display = 'none';
        collapsedMenu.style.display = '';
    } else {
        toggle.classList.add('active');
        expandedMenu.style.display = '';
        collapsedMenu.style.display = 'none';
    }
});

