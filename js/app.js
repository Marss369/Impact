// WOW js
var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();




// Sticky Navbar

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


// Owl carsoul

$('.owl-1').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})

$('.owl-2').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
        1200: {
            items: 3
        }
    }
})


// Header active remove 

const headerNavLink = document.querySelectorAll(".header-link");

headerNavLink.forEach((headerLink) => {

    headerLink.addEventListener("click", (e) => {

        headerNavLink.forEach((sinNavLink) => {
            sinNavLink.classList.remove("header-active");
        })

        e.target.classList.add("header-active");
    })

})


// Counter 

const statsObserver = new IntersectionObserver((e) => {

    if (e[0].isIntersecting) {

        const counters = document.querySelectorAll(".counter");

        counters.forEach((sinCounter) => {
            let i = 0;

            const count = setInterval(() => {
                sinCounter.innerText = ++i;

                if (i == sinCounter.dataset.stop) {
                    clearInterval(count);
                }
            }, 100)

        })

        statsObserver.unobserve(e[0].target);
    }

}, { threshold: 0.3 });

statsObserver.observe(document.getElementById("stats"));






function headerLinkRemove() {

    headerNavLink.forEach((navLink) => {
        navLink.classList.remove("header-active");
    })
}



// Intersection observer

//Banner sec
const bannerSec = document.getElementById("banner");

const bannerobserver = new IntersectionObserver((e) => {

    if (e[0].isIntersecting) {

        headerLinkRemove();

        headerNavLink[0].classList.add("header-active");
    }

}, { threshold: 0.5 })

bannerobserver.observe(bannerSec);


//About sec
const aboutSec = document.getElementById("about");

const aboutobserver = new IntersectionObserver((e) => {

    if (e[0].isIntersecting) {

        headerLinkRemove();

        headerNavLink[1].classList.add("header-active");
    }

}, { threshold: 0.3 })

aboutobserver.observe(aboutSec);


//Service sec
const serviceSec = document.getElementById("service");

const serviceobserver = new IntersectionObserver((e) => {

    if (e[0].isIntersecting) {

        headerLinkRemove();

        headerNavLink[2].classList.add("header-active");
    }

}, { threshold: 0.5 })

serviceobserver.observe(serviceSec);


//Portfolio sec
const portfolioSec = document.getElementById("portfolio");

const portfolioobserver = new IntersectionObserver((e) => {

    if (e[0].isIntersecting) {

        headerLinkRemove();

        headerNavLink[3].classList.add("header-active");
    }

}, { threshold: 0.3 })

portfolioobserver.observe(portfolioSec);



//Team sec
const teamSec = document.getElementById("team");

const teamobserver = new IntersectionObserver((e) => {

    if (e[0].isIntersecting) {

        headerLinkRemove();

        headerNavLink[4].classList.add("header-active");
    }

}, { threshold: 0.3 })

teamobserver.observe(teamSec);


//Contact sec
const contactSec = document.getElementById("contact");

const contactobserver = new IntersectionObserver((e) => {

    if (e[0].isIntersecting) {

        headerLinkRemove();

        headerNavLink[7].classList.add("header-active");
    }

}, { threshold: 0.3 })

contactobserver.observe(contactSec);