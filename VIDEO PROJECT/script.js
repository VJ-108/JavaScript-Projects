const btn = document.querySelector(".switch")
const checkbox = document.querySelector(".checkbox")
const vid = document.getElementById("myVideo")
const preloader = document.querySelector(".preloader")
btn.addEventListener("click",()=>{
    // document.body.style.backgroundColor = "red"
    if (checkbox.checked == false) vid.pause()
    else vid.play()
})
// console.log(checkbox.checked);
window.addEventListener("load",()=>{
    preloader.classList.add("hide-preloader")
})