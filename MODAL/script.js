const btn = document.querySelector(".btn")
const del = document.querySelector(".delete")
const title = document.querySelector(".title")
const content = document.querySelector(".content")

btn.addEventListener("click",()=>{
    title.classList.toggle("active");
    content.classList.toggle("active");
})
del.addEventListener("click",()=>{
    title.classList.toggle("active");
    content.classList.toggle("active");
})  