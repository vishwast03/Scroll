// date in footer
const date = document.querySelector('.date');
date.textContent = new Date().getFullYear();

// scroll event listener
const navbar = document.querySelector('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-navbar');
    }
    else {
        navbar.classList.remove('fixed-navbar');
    }
    if (scrollHeight > 500) {
        topLink.classList.add('show-top-link');
    }
    else {
        topLink.classList.remove('show-top-link');
    }
});

topLink.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0
    });
});

// nav toggle
const toggleBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', () => {
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
});

// scroll to specific sections
const scrollLinks = document.querySelectorAll('.scroll-link');
// console.log(scrollLinks);

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-navbar");
        let position = element.offsetTop - navHeight;

        if(!fixedNav) {
            position -= navHeight;
        }

        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position
        });

        linksContainer.style.height = 0;
    });
});