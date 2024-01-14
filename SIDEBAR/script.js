const img = document.querySelector(".img")
const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
const side = document.querySelectorAll(".side-item")
img.addEventListener("click",()=>{
    container.classList.remove("active")
    btn.classList.toggle("active");
})
btn.addEventListener("click",()=>{
    container.classList.toggle("active")
    btn.classList.toggle("active");
})
side.forEach(n=>n.addEventListener("click",()=>{
    container.classList.remove("active")
    btn.classList.remove("active");
}))
setInterval(() => {
    btn.classList.toggle("work")
}, 1000);