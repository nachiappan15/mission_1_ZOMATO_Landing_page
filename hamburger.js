var hamburger = document.getElementById("clickable");
hamburger.addEventListener("click" , ()=>{
    var nav_menu = document.getElementById("hidden__menu");
    nav_menu.classList.toggle("show")
})