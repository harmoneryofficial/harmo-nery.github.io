/* ==================================================
   Harmo-nery Website
   Version 1.0
================================================== */

/* ------------------------------------------
   Fade-in Animation
------------------------------------------ */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach((section) => {

    section.classList.add("fade-up");

    observer.observe(section);

});

/* ------------------------------------------
   Smooth Navbar Shadow
------------------------------------------ */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(110,81,69,.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

/* ------------------------------------------
   Planner Card Float
------------------------------------------ */

const planner = document.querySelector(".planner-card");

let position = 0;

function floatPlanner() {

    position += 0.02;

    planner.style.transform =
        `translateY(${Math.sin(position) * 5}px)`;

    requestAnimationFrame(floatPlanner);

}

if (planner) {

    floatPlanner();

}

/* ------------------------------------------
   Welcome Message
------------------------------------------ */

console.log(
    "%c🌸 Welcome to Harmo-nery!",
    "font-size:18px;color:#6E5145;font-weight:bold;"
);

console.log(
    "%cStay Harmonious 🐇",
    "font-size:14px;color:#8CAFD8;"
);