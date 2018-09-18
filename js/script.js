var wrapperMenuIsOpen = false;

function inicializeApp() {
    const page = document.getElementById('page');
    const loader = document.getElementById('loader');

    document.onreadystatechange = (e) => {
        setTimeout(() => {
            page.style.display = 'inline';
            loader.style.display = 'none';
        }, 1000);
    }

    changePage();
}

function validateResponsivity() {
    const wrapperNav = document.getElementById('wrapper-nav');
    const hamburgerButton = document.getElementById('hamburger-button');
    const logo = document.getElementById('logo');

    if (hamburgerButton.style.display == 'inline') {
        wrapperNav.className = 'wrapper-nav';
    } else {
        wrapperNav.className = 'sidebar';
    }
}

function pressHamburgerButton() {
    validateResponsivity();

    const toOpen = !wrapperMenuIsOpen;
    if (toOpen) {
        document.getElementById('hamburger-button').innerHTML = 'X';
        document.getElementById('wrapper-nav').style.display = 'inline';
        ;
    } else {
        document.getElementById('hamburger-button').innerHTML = '|||';
        document.getElementById('wrapper-nav').style.display = 'none';
    }
    wrapperMenuIsOpen = toOpen;
}


function changePage(page = 'home') {
    const pages = ['home', 'about', 'works', 'contact']

    pages.map(item => item == page ? document.getElementById(item).style.display = 'inline' : document.getElementById(item).style.display = 'none');
}