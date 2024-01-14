var actual;
document.querySelector(".SIMPLE").addEventListener("click",()=>{
    actual = ["red","white","orange","purple","green","indigo","grey"];
})
document.querySelector(".HEX").addEventListener("click",()=>{
    actual = ["#f46c6c","#bbb3ec","#bed6c5","#aaccb8","#99c1b2","#91bab3","#80b9ba"];
})
document.querySelector(".btn").addEventListener("click",()=>{
    let col = actual[Math.floor(Math.random()*7)];
    document.querySelector(".btn").innerHTML = " "
    document.querySelector(".btn").insertAdjacentHTML("afterbegin",`<span>${col.toUpperCase()}</span>`)
    document.body.style.backgroundColor = col;
})