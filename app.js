let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ol");

btn.addEventListener("click",function(){
   if(input.value != ""){
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    input.value = "";

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    i
   } 
    
})

ul.addEventListener("click",function (event) {
   if(event.target.nodeName === "BUTTON"){
    // let delbtn = document.querySelector(".delete");
    let par = event.target.parentElement;
   
    par.remove();
   }
    
})