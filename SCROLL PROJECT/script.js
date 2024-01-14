const hamburger = document.querySelector(".hamburger")
const nav_item = document.querySelectorAll(".nav-item")
const navbar = document.querySelector(".navbar")
const arrow = document.querySelector(".arrow");
const footer = document.querySelector(".footer");
const menu = document.querySelector(".menu");
const list = document.querySelectorAll(".list");

footer.innerHTML = `<div>Copyright &copy; Backroads Travel Tours Company ${new Date().getFullYear()}, All Rights Reserved</div>`

setInterval(() => {
    arrow.classList.toggle("active")
}, 1000);

hamburger.addEventListener("click",()=>{
    nav_item.forEach(n=>n.classList.toggle("active"))
    navbar.classList.toggle("active")
    
    // const menuheight = menu.getBoundingClientRect();
    // const nav_itemheight = nav_item.getBoundingClientRect().height;
    // if (menuheight===0){
    //     menu.style.height = `${nav_itemheight}px`
    // }else{
    //     menu.style.height = 0;
    // }
})

nav_item.forEach(n=>n.addEventListener("click",()=>{
    nav_item.forEach(n=>n.classList.remove("active"))
    navbar.classList.toggle("active")
}))

window.addEventListener("scroll",()=>{
    const scrollheight = window.scrollY;
    const navheight = navbar.getBoundingClientRect().height;
    if (scrollheight>navheight){
        navbar.classList.add("scroll")
        list.forEach(n=>n.classList.add("scroll"))
    }else{
        navbar.classList.remove("scroll")
        list.forEach(n=>n.classList.remove("scroll"))
    }
    if (scrollheight>500){
        arrow.classList.add("show")
    }else{
        arrow.classList.remove("show")
    }
})
