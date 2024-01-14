const btn = document.querySelectorAll(".btn")
const info = document.querySelector(".info")

const arr = [{id: 'home',value:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quidem non vel labore officiis iusto quisquam a suscipit rerum fugiat quia obcaecati maiores, fugit qui animi ad nemo libero omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque odio possimus iusto magni et illo earum necessitatibus optio maxime voluptate. Molestias quis aspernatur maiores laboriosam, perspiciatis eius ratione. Quis, ratione.'},{id:'about',value: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quidem non vel labore officiis iusto quisquam a suscipit rerum fugiat quia obcaecati maiores, fugit qui animi ad nemo libero omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque odio possimus iusto magni'},{id:'section',value:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quidem non vel labore officiis iusto quisquam a suscipit rerum fugiat quia obcaecati maiores, fugit qui animi ad nemo libero omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque odio possimus iusto magni et illo earum necessitatibus optio maxime voluptate. Molestias quis aspernatur maiores laboriosam, perspiciatis eius ratione. Quis, ratione.Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quidem non vel labore officiis iusto quisquam a suscipit rerum fugiat quia obcaecati maiores, fugit qui animi ad nemo libero omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque odio possimus iusto magni'}]

btn.forEach(n=>n.addEventListener("click",()=>{
    info.innerHTML = ""
    btn.forEach(n=>n.classList.remove("active"))
    n.classList.add("active");
    arr.forEach((p)=>{
        if (n.id==p.id) info.innerHTML = p.value;
    })
}))