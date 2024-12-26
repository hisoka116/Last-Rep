const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuToggle");
const overlay = document.getElementById("overlay");
const menuItems = document.querySelectorAll("header .container nav a");

menuToggle.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        overlay.classList.remove("active");
        menuToggle.className = "fa-solid fa-bars";
    } else {
        menu.classList.add("active");
        overlay.classList.add("active");
        menuToggle.className = "fa-solid fa-xmark";
    };
    if (document.getElementById("popup").style.display === "block") {
        document.getElementById("popup").style.display = "none";
    };
});

overlay.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        overlay.classList.remove("active");
        menuToggle.className = "fa-solid fa-bars";
    };
    if (document.getElementById("popup").style.display === "block") {
        document.getElementById("popup").style.display = "none";
        overlay.classList.remove("active");
    };
});

menuItems.forEach((ele) => {
    ele.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
        menuToggle.className = "fa-solid fa-bars";
    });
});

let header = document.querySelector("header");
let prev;
window.addEventListener("scroll", () => {
    if (window.scrollY > 70 && prev < window.scrollY) {
        header.style.top = "-11%";
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            overlay.classList.remove("active");
            menuToggle.className = "fa-solid fa-bars";
        }
    } else if (prev > window.scrollY) {
        header.style.top = 0;
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            overlay.classList.remove("active");
            menuToggle.className = "fa-solid fa-bars";
        }
    };
    prev = window.scrollY;
});

// About Animation 

let animatedElements = document.querySelectorAll(".about .container .detail div");
animatedElements.forEach((ele) => {
    document.addEventListener("scroll", () => {
        const screenHeight = window.innerHeight;
        let rect = ele.getBoundingClientRect();
        if (rect.bottom <= screenHeight + 100) {
            ele.style = `opacity: 1; transform: translateY(0px) scale(1);`;
        } else if (rect.top > screenHeight) {
            ele.style = `opacity: 0; transform: translateY(200px) scale(0);`;
        };
    });
});

// About Animation 

// Testimonials Application

const clients = ["Jack Marten", "Zeus Ochiha"];

function loadTestimonials () {
    const holder = document.getElementById("testimonials-holder");
    clients.forEach((ele) => {
        const item = document.createElement("img");
        item.src = `testimonials/${ele}/after.jpg`;
        item.alt = `${ele} Image`;
        item.addEventListener("click", () => openPopup(ele));
        holder.appendChild(item);
    });
    // Clients fill
    const clientsFill = [
        "testimonials/clients fill/1.jpg",
        "testimonials/clients fill/2.jpg",
        "testimonials/clients fill/3.jpg",
        "testimonials/clients fill/2.jpg",
        "testimonials/clients fill/3.jpg",
        "testimonials/Jack Marten/after.jpg"
    ];
    clientsFill.forEach((ele) => {
        const item = document.createElement("img");
        item.src = ele;
        item.style = "filter: grayscale(100%);";
        holder.appendChild(item);
    });
    // Clients fill
};

function openPopup (client) {
    document.getElementById("popup-name").textContent = `${client}`;
    document.getElementById("popup-before").src = `testimonials/${client}/before.jpg`;
    document.getElementById("popup-after").src = `testimonials/${client}/after.jpg`;
    fetch(`testimonials/${client}/text.txt`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("popup-testimonial").textContent = data;
        });
    document.getElementById("popup").style.display = "block";
    document.getElementById("close-popup").addEventListener("click", () => {
        document.getElementById("popup").style.display = "none";
        overlay.classList.remove("active");
    });
    overlay.classList.add("active");
};

loadTestimonials();

// Testimonials Application