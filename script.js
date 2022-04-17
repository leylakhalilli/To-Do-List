const clear = document.querySelector('.clear');
const enter = document.querySelector('#plus_button');
const input = document.querySelector('input');
const inputBox = document.querySelector('#inputBox');
const flex = document.querySelector('#flex');
const plus = document.querySelector('#plus');

clear.addEventListener('click', (event) => {
    if (input.value != "") {
        input.value = "";
    }
    else {
        alertify.alert("Please enter the value")
    }
})
flex.addEventListener('mouseover', (event) => {
    flex.style.backgroundColor = '#9953F1';
    plus.style.backgroundColor = '#AA68FE';
    flex.addEventListener('mouseout', (event) => {
        flex.style.backgroundColor = '#833AE0';
        plus.style.backgroundColor = '#9953F1';

    })
})

const List = document.createElement('div');
List.classList.add('List');
const ul = document.createElement('ul');
ul.style.position = 'relative';
List.append(ul);
const box = document.querySelector('.box')
box.insertBefore(List, inputBox);


enter.addEventListener('click', (event) => {
         createInput();
         input.value = "";
   
})

function createInput() {
    const li = document.createElement('li');
    const newInput = document.createElement('input')
    newInput.value = input.value;
    newInput.classList.add('newInput')
    let img = document.createElement('img');
    img.src = "ToDoImg/delete.svg";
    img.classList.add('clearItem');
    li.append(newInput)
    li.append(img);
    ul.append(li);
    img.style.boxSizing = 'border-box';
    List.style.display = 'block';
    img.addEventListener('click', (e) => {
        li.firstChild.value = '';
        li.style.display = 'none';
        const first = ul.firstChild;
        if (li == ul.firstChild) {
            List.style.display = 'none';
        }
    })
}
// ---------------------------------------------------------
let arr = [];
let a = 1;
const sorting = document.getElementById('sortingIcon');
sorting.addEventListener('click', (event) => {

    if (a == 1) {
        const items = document.getElementsByTagName('li');
        for (let i = 0; i < items.length; i++) {
            console.log(items[i])
            arr.push(items[i].firstChild.value);
        }
        arr.sort();
        for (let i = 0; i < items.length; i++) {
            items[i].firstChild.value = arr[i];
        }
        a = 0;
    }

    else if (a == 0) {
        const items = document.getElementsByTagName('li');
        arr.reverse();
        for (let i = 0; i < items.length; i++) {
            items[i].firstChild.value = arr[i];
        }
        a = 1;
    }
})
