console.log("JavaScript Loaded");

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

console.log(menuBtn);
console.log(navLinks);

menuBtn.addEventListener("click", function () {
    console.log("Menu Clicked");
    navLinks.classList.toggle("active");
});
// Animated Counter

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            count += increment;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(updateCounter);

            } else {

                if (target === 10000) {
                    counter.innerText = "10K+";
                } 
                else if (target === 500) {
                    counter.innerText = "500+";
                } 
                else if (target === 98) {
                    counter.innerText = "98%";
                } 
                else if (target === 24) {
                    counter.innerText = "24/7";
                }
            }

        };

        updateCounter();

    });

};

window.addEventListener("load", startCounter);
// Dark / Light Mode

const themeBtn = document.getElementById("theme-toggle");
const icon = themeBtn.querySelector("i");

// Load saved theme
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    icon.classList.replace("fa-moon","fa-sun");
}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        icon.classList.replace("fa-moon","fa-sun");
        localStorage.setItem("theme","light");

    }else{

        icon.classList.replace("fa-sun","fa-moon");
        localStorage.setItem("theme","dark");

    }

});
// Scroll Progress Bar

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});
// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// Contact Form Validation

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name=form.querySelector("input[type='text']").value.trim();

    const email=form.querySelector("input[type='email']").value.trim();

    const message=form.querySelector("textarea").value.trim();

    if(name==="" || email==="" || message===""){

        alert("Please fill all fields.");

        return;

    }

    alert("Message sent successfully!");

    form.reset();

});