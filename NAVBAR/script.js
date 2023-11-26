const hamburger = document.querySelector(".hamburger")
const list = document.querySelectorAll(".list")

hamburger.addEventListener("click",()=>{
    list.forEach(n=>n.classList.toggle("active"))
    hamburger.classList.toggle("active")
})

list.forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active")
    list.forEach(n=>n.classList.remove("active"))
}))