3 - 3,6,9
5 - 5,10,15,20,25
7 - 7,14      
const arr = [{id:3,value:`<div id="3" class="item">
            <img src="spaghetti-2931846_640.jpg" class="img">
            <div class="info">
                <h3 class="title">Oatmeal <div class="price">$10.0</div></h3>
                <div class="content">
                    Lorem ipsum dolor sit amet consectetur adipisi elit. Ut, rerum aliquam mollitia iste assumenda voluptatum
                </div>
            </div>
        </div>`},{id:6,value:`<div id="6" class="item">
        <img src="spaghetti-2931846_640.jpg" class="img">
        <div class="info">
            <h3 class="title">Toasts <div class="price">$10.0</div></h3>
            <div class="content">
                Lorem ipsum dolor sit amet consectetur adipisi elit. Ut, rerum aliquam mollitia iste assumenda voluptatum
            </div>
        </div>
    </div>`},{id:9,value:`<div id="9" class="item">
    <img src="spaghetti-2931846_640.jpg" class="img">
    <div class="info">
        <h3 class="title">Eggs <div class="price">$10.0</div></h3>
        <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisi elit. Ut, rerum aliquam mollitia iste assumenda voluptatum
        </div>
    </div>
</div>`},{id:5,value:`<div id="5" class="item">
<img src="spaghetti-2931846_640.jpg" class="img">
<div class="info">
    <h3 class="title">Masala Bhindi <div class="price">$10.0</div></h3>
    <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisi elit. Ut, rerum aliquam mollitia iste assumenda voluptatum
    </div>
</div>
</div>`},{id:10,value:`<div id="10" class="item">
<img src="spaghetti-2931846_640.jpg" class="img">
<div class="info">
    <h3 class="title">Chana Kulcha <div class="price">$10.0</div></h3>
    <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisi elit. Ut, rerum aliquam mollitia iste assumenda voluptatum
    </div>
</div>
</div>`},{id:15,value:`<div id="15" class="item">
<img src="spaghetti-2931846_640.jpg" class="img">
<div class="info">
    <h3 class="title">Egg Curry <div class="price">$10.0</div></h3>
    <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisi elit. Ut, rerum aliquam mollitia iste assumenda voluptatum
    </div>
</div>
</div>`},{id:20,value:` <div id="20" class="item">
<img src="spaghetti-2931846_640.jpg" class="img">
<div class="info">
    <h3 class="title">Shahi Paneer <div class="price">$10.0</div></h3>
    <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisi elit. Ut, rerum aliquam mollitia iste assumenda voluptatum
    </div>
</div>
</div>`},{id:25,value:` <div id="25" class="item">
<img src="spaghetti-2931846_640.jpg" class="img">
<div class="info">
    <h3 class="title">Dal Makhani <div class="price">$10.0</div></h3>
    <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisi elit. Ut, rerum aliquam mollitia iste assumenda voluptatum
    </div>
</div>
</div>`},{id:7,value:`<div id="7" class="item">
<img src="spaghetti-2931846_640.jpg" class="img">
<div class="info">
    <h3 class="title">Chocolate Shake <div class="price">$10.0</div></h3>
    <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisi elit. Ut, rerum aliquam mollitia iste assumenda voluptatum
    </div>
</div>
</div>`},{id:14,value:` <div id="14" class="item">
<img src="spaghetti-2931846_640.jpg" class="img">
<div class="info">
    <h3 class="title">Vanilla Special <div class="price">$10.0</div></h3>
    <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisi elit. Ut, rerum aliquam mollitia iste assumenda voluptatum
    </div>
</div>
</div>`}]
window.addEventListener("DOMContentLoaded",()=>{
    menu.innerHTML = ""
    arr.forEach(p=>{
        menu.innerHTML += p.value;
    })
})
const btn = document.querySelectorAll(".btn")
const menu = document.querySelector(".menu")
// arr.forEach(n=>console.log(n.value))
btn.forEach(n=>{
    n.addEventListener("click",()=>{
        menu.innerHTML = ""
        if (n.id=="all"){
            arr.forEach(p=>{
                menu.innerHTML += p.value;
            })
        }
        if (n.id=="breakfast"){
            arr.forEach(p=>{
                if (p.id % 3 == 0 && p.id != 15)
                menu.innerHTML += p.value;
            })
        }
        if (n.id=="lunch"){
            arr.forEach(p=>{
                if (p.id % 5 == 0)
                menu.innerHTML += p.value;
            })
        }
        if (n.id=="shakes"){
            arr.forEach(p=>{
                if (p.id % 7 == 0)
                menu.innerHTML += p.value;
            })
        }
    })
})