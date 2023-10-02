const menu = document.querySelector(".menu")
const menuButton = document.querySelector(".menu-button")
const buttonRow = document.querySelector(".button-row")
const pageButtons = document.querySelectorAll(".page-btn")
const allMenuButtons = document.querySelectorAll(".btn")
menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu-expand")
    menuButton.classList.toggle("rotate")
    pageButtons.forEach((button) => {
        if (button.classList.contains("hidden")){
            button.classList.remove("hidden")
        }
        else {
            button.classList.add("hidden")
        }
        button.classList.toggle("wiggle")
        
    })
})
pageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        menu.classList.toggle("menu-expand")
    menuButton.classList.toggle("rotate")
    pageButtons.forEach((button) => {
        if (button.classList.contains("hidden")){
            button.classList.remove("hidden")
        }
        else {
            button.classList.add("hidden")
        }
        button.classList.toggle("wiggle")
        
    })
    })
})

allMenuButtons.addEventListener("click,")