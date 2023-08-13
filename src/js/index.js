const mobileBtn = document.getElementById("mbl-button");
const mobileMenu = document.getElementById("nav-bar");

mobileBtn.addEventListener("click", () => mobileMenu.classList.toggle("active"));


// burger button end===========================

// reg section button
const y = document.querySelector(".reg-li")
const x = document.querySelector(".reg-ac");

x.addEventListener("click", () => {
    y.classList.toggle("selected")
});


// 