const review = ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nobis sapiente a impedit facere accusamus dolorem et sit ratione autem quo esse incidunt harum ipsum corporis inventore, facilis repudiandae beatae quam blanditiis suscipit eligendi","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae perferendis quasi architecto eum dolor eligendi quaerat ipsam, impedit illo, earum quis ut pariatur ratione autem temporibus enim quidem doloribus corporis aliquid atque. Consequuntur, repellendus?","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, est aperiam ratione magnam explicabo iste officia eius, numquam architecto nam deleniti quo error dignissimos eos, porro laborum illo. Mollitia, dolorum. Lorem ipsum, dolor sit amet consectetur adipisicing elit"]

let curritem = 0;
const id = document.getElementById("person")

window.addEventListener("DOMContentLoaded",()=>{
    showperson(curritem);
})
function showperson(person){
    const item = review[person];
    id.textContent = item;
}
document.querySelector(".previous").addEventListener("click",()=>{
    if (curritem==0){
        curritem=2;
    }
    else{
        curritem--;
    }
    showperson(curritem);
})
document.querySelector(".next").addEventListener("click",()=>{
    if (curritem==2){
        curritem=0;
    }
    else{
        curritem++;
    }
    showperson(curritem);
})