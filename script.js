/*=========================================
PRELOADER
=========================================*/

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/*=========================================
STICKY HEADER
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

/*=========================================
MOBILE MENU
=========================================*/

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("menu-open");

});

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        hamburger.classList.remove("active");
        document.body.classList.remove("menu-open");

    });

});

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/*=========================================
SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
    ".service-card, .project-card, .testimonial, .about-image, .why-grid div, .contact-box"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(el => {

    el.classList.add("hidden");

    revealObserver.observe(el);

});

/*=========================================
SERVICE CARD HOVER
=========================================*/

document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

    });

});

/*=========================================
PARALLAX HERO
=========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    hero.style.backgroundPositionY = `${window.pageYOffset * 0.4}px`;

});

/*=========================================
SCROLL TO TOP BUTTON
=========================================*/

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.className = "scroll-top";

document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("visible");

    } else {

        scrollBtn.classList.remove("visible");

    }

});

/*=========================================
COUNTER ANIMATION
(Optional if counters are added later)
=========================================*/

const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.count;

        let current = 0;

        const increment = target / 120;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*=========================================
FOOTER YEAR
=========================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*=========================================
IMAGE FADE-IN
=========================================*/

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("load", () => {

        img.classList.add("loaded");

    });

});

/*=========================================
CONTACT FORM
(Frontend only)
=========================================*/

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", e => {

        e.preventDefault();

        alert(
            "Thanks for your enquiry! Form functionality will be connected later."
        );

    });

}

console.log(
    "%cPremium Fencing Website Loaded",
    "color:#0C4DA2;font-size:18px;font-weight:bold;"
);