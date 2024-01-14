const img = document.querySelectorAll(".img")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

img.forEach(function(slide,index) {
    slide.style.left = `${index*100}%`
})
let ctr = 0;
next.addEventListener("click",()=>{
    ctr++;
    carousel();
})
prev.addEventListener("click",()=>{
    ctr--;
    carousel();
})
function carousel() {
    if (ctr===img.length) ctr = 0;
    if (ctr<0) ctr = img.length - 1;
    img.forEach(function(slide) {
        slide.style.transform = `translateX(-${ctr*100}%)`
    })
}