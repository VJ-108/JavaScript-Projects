var number = document.querySelector(".number").innerHTML
// document.querySelector(".btn1").addEventListener("click",()=>{
//     number--;
//     document.querySelector(".number").innerHTML = number
// })
// document.querySelector(".btn2").addEventListener("click",()=>{
//     number=0;
//     document.querySelector(".number").innerHTML = number
// })
// document.querySelector(".btn3").addEventListener("click",()=>{
//     number++;
//     document.querySelector(".number").innerHTML = number
// })
document.querySelectorAll(".btn").forEach(n=>{
    n.addEventListener("click",()=>{
        if (n.innerHTML=="DECREASE"){
            number--;
        }
        if (n.innerHTML=="RESET"){
            number=0;
        }
        if (n.innerHTML=="INCREASE"){
            number++;
        }
        document.querySelector(".number").innerHTML = number
    })
})