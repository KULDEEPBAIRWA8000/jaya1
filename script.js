const hamBurger = document.getElementById("hamBurger")
const navMenu = document.getElementById("nav-menu")
const navClose = document.getElementById("navClose")
const navLink = document.querySelectorAll(".nav_link")

hamBurger.addEventListener('click', () => {
    hamBurger.classList.add("manu-hidden")
    hamBurger.classList.remove("menu")
    navMenu.classList.remove("nav-hidden")
    navClose.classList.add("close-btn")
    
})

navClose.addEventListener("click", () => {
    navMenu.classList.add("manu-hidden")
})

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.add("nav-hidden")
        navClose.classList.remove("close-btn")
        hamBurger.classList.remove("manu-hidden")


    })
})