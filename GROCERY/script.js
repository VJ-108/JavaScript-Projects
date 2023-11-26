const clr = document.querySelector(".clr")
const list = document.querySelectorAll(".list")
const sub = document.querySelector(".submit")
const items = document.querySelector(".items")
const text = document.getElementById("text")
const msg = document.querySelector(".msg")
let num = 0;
let t = 1
let editele;
arr = []
list.forEach(() => { num++ })
clr.addEventListener("click", () => { items.innerHTML = ""; clr.innerHTML = "" })
sub.addEventListener("click", () => {
    if (t==0){
        editele.innerHTML = `${text.value.charAt(0).toUpperCase() + text.value.slice(1)}<div class="buts"><button 
        class="but edit-btn"><img src="button.png" class="img" ></button><button class="but delete-btn"><img src="delete (1).png" class="img"></div></button>`
        msg.innerHTML = ""
        msg.innerHTML = "Item is Edited"
        msg.classList.add("edited");
        setTimeout(() => {
            msg.innerHTML = ""
            msg.classList.remove("edited")
        }, 1000);
        t = 1;
        text.value = ""
    }
    else if ((text.value != "") && (t==1)) {
        items.innerHTML += `<div class="list">${text.value.charAt(0).toUpperCase() + text.value.slice(1)}<div class="buts"><button 
        class="but edit-btn"><img src="button.png" class="img" ></button><button class="but delete-btn"><img src="delete (1).png" class="img"></div></button></div>`
        arr.push(`<div class="list">${text.value.charAt(0).toUpperCase() + text.value.slice(1)}<div class="buts"><button class="but edit-btn"><img src="button.png" class="img" ></button><button class="but delete-btn"><img src="delete (1).png" class="img"></div></button></div>`)
        console.log(arr);
        let whole = "";
        arr.forEach(n=>whole+=n)
        localStorage.setItem("",whole)
        text.value = ""
        num++;
        msg.innerHTML = ""
        msg.innerHTML = "Item Added To The List"
        msg.classList.add("add");
        setTimeout(() => {
            msg.innerHTML = ""
            msg.classList.remove("add")
        }, 1000);
    }
    else{
        msg.innerHTML = ""
        msg.innerHTML = "Enter a valid Input"
        msg.classList.add("error");
        setTimeout(() => {
            msg.innerHTML = ""
            msg.classList.remove("error")
        }, 1000);
    }
})
text.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        if (t==0){
            editele.innerHTML = `${text.value.charAt(0).toUpperCase() + text.value.slice(1)}<div class="buts"><button 
            class="but edit-btn"><img src="button.png" class="img" ></button><button class="but delete-btn"><img src="delete (1).png" class="img"></div></button>`
            msg.innerHTML = ""
            msg.innerHTML = "Item is Edited"
            msg.classList.add("edited");
            setTimeout(() => {
                msg.innerHTML = ""
                msg.classList.remove("edited")
            }, 1000);
            t = 1;
            text.value = ""
        }
        else if ((text.value != "") && (t==1)) {
            items.innerHTML += `<div class="list">${text.value.charAt(0).toUpperCase() + text.value.slice(1)}<div class="buts"><button class="but edit-btn"><img src="button.png" class="img" ></button><button class="but delete-btn"><img src="delete (1).png" class="img"></div></button></div>`
            arr.push(`<div class="list">${text.value.charAt(0).toUpperCase() + text.value.slice(1)}<div class="buts"><button class="but edit-btn"><img src="button.png" class="img" ></button><button class="but delete-btn"><img src="delete (1).png" class="img"></div></button></div>`)
            console.log(arr);
            let whole = "";
            arr.forEach(n=>whole+=n)
            localStorage.setItem("",whole)
            text.value = ""
            num++;
            msg.innerHTML = ""
            msg.innerHTML = "Item Added To The List"
            msg.classList.add("add");
            setTimeout(() => {
                msg.innerHTML = ""
                msg.classList.remove("add")
            }, 1000);
        }
        else{
            msg.innerHTML = ""
            msg.innerHTML = "Enter a valid Input"
            msg.classList.add("error");
            setTimeout(() => {
                msg.innerHTML = ""
                msg.classList.remove("error")
            }, 1000);
        }
    }
})
setInterval(() => {
    if (window.matchMedia("(max-width: 1280px)").matches)
        sub.innerHTML = ""
    else sub.innerHTML = "SUBMIT"
}, 10);
setInterval(() => {
    if (num > 3) clr.innerHTML = "Clear all items"
    else clr.innerHTML = ""
}, 10);
setInterval(() => {
    if (num > 0) {
        const editBtns = document.querySelectorAll(".edit-btn");
        const deleteBtns = document.querySelectorAll(".delete-btn");
        editBtns.forEach(edit => {
            edit.addEventListener("click", (e) => {
                t = 0;
                editele = e.currentTarget.parentElement.parentElement;
                console.log(editele.innerText);
                text.value = editele.innerText
            });
        });
        deleteBtns.forEach(del => {
            del.addEventListener("click", (e) => {
                const ele = e.currentTarget.parentElement.parentElement;
                items.removeChild(ele)
                num--;
                msg.innerHTML = ""
                msg.innerHTML = "Item Deleted from the List"
                msg.classList.add("error");
                setTimeout(() => {
                    msg.innerHTML = ""
                    msg.classList.remove("error")
                }, 1000);
            });
        });
    }
}, 1000);