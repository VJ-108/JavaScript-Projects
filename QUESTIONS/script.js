const img = document.querySelectorAll(".img")
const ans = document.querySelectorAll(".ans")
document.body.addEventListener("click",e=>{
    if (e.target == document.body)
        ans.forEach(p=>p.classList.remove("active"))
})
img.forEach(n=>n.addEventListener("click",()=>{
    document.querySelector(`.ans${n.id}`).classList.toggle("active");
    ans.forEach(p=>{
        if (p.classList[0]!=`ans${n.id}`)
            p.classList.remove("active")
    })
}))