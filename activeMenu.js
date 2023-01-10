let menuContainer = document.querySelector(".menu__container__show");

let openMenu = document.querySelector(".mobil__menu__container");
let closeMenu = document.querySelector(".close__menu__icon");

openMenu.addEventListener("click", ()=>{
  menuContainer.classList.add("menu__container__active");
})

closeMenu.addEventListener("click", ()=> {
  menuContainer.classList.remove("menu__container__active")
})