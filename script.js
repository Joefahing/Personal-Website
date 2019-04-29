var menu = document.querySelector(".menu");
var overlay = document.querySelector(".overlay");

menu.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    overlay.classList.toggle('menu-open');
})

document.querySelector(".overlay ul").addEventListener("click", ()=>{ 
    menu.classList.remove("active");
    overlay.classList.remove("menu-open");
});