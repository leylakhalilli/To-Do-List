
const button = document.querySelector('.add');
let form = document.querySelector("form")
let todos = document.getElementById("todos");
let ToDo = document.querySelector(".ToDo");
let sort=document.querySelector(".filter");
let img=document.querySelector(".filter");
let input=document.querySelector("input")


form.addEventListener("submit", e => { 
    todos.innerHTML += `
<div id="todo">
<input class="myInput" type="text" name="todo" ">
<img  class="clear" src="ToDoImg/delete.svg" alt="">
</div>

`
let input = document.querySelectorAll('.myInput'); 
    input.forEach(findItem)
    e.preventDefault() 

})


let firstInput = document.querySelector(".myInput");
firstInput.addEventListener("blur", (_) => {
    firstInput.setAttribute("value", firstInput.value)

});

function findItem(item) {
    item.addEventListener("keyup", (_) => {
        item.addEventListener("blur", (_) => {
            item.setAttribute("value", item.value)
        });
    });

}
ToDo.addEventListener('click', deleteTodo)
function deleteTodo(e) {
    if(e.target.className=="clear"){
       
        e.target.parentElement.remove();
    }
    
}

sort.addEventListener("click",sortTodo);
let arr = [];
let result;


let index=0;
function sortTodo(e){
let input=document.querySelectorAll(".myInput");    
let arr=[]; 
input.forEach(item=>{
    arr.push(item.value.trim());
})
if(index==0){
    img.src="ToDoImg/Group 73.png";
    arr.sort((a,b)=>{
        if(a>b){
            return 1;
        }else if (a<b){
            return -1;
        }else { 
            return 0;
        }

    })
    index++;

}else {
    img.src="ToDoImg/Group 91.png";
    arr.sort((a,b)=>{ 
        if(a>b){
            return -1;
        }else if (a<b){
            return 1;
        }else {
            return 0;
            
        }
        

    })
    index--;
}

todos.innerHTML=""
arr.forEach(item=>{
todos.innerHTML+=`
<div id="todo">
<input class="myInput" type="text" name="todo" value="${item}" ">
<img  class="clear" src="ToDoImg/delete.svg" alt="">
</div>
`
}
    )
    let inputs=document.querySelectorAll(".myInput");
     inputs.forEach(findItem)
}