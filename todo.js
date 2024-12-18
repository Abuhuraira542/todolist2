
let item1=[];
function printli(){
    let li ="";
    for(let i=0; i < item1.length; i++){
        li +=`<li>${item1[i]}
        <button onclick="deleteitem(${i})">Delete</button>
        </li>`
    }
    document.getElementById("list").innerHTML=li
}
function additem() {
    let uservalue= document.getElementById("input1").value;
    item1.push(uservalue)
    printli()
}
function deleteitem(id){
    item1.splice(id , 1);
    printli()
}
