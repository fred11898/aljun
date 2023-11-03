let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.remove('icon');
    } else {
        navbar.classList.add('icon');
    }

    lastScrollTop = scrollTop;
});
