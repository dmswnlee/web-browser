const listItem = document.querySelector('.list-item');
const listForm = document.querySelector('.list-form');
const listInput = document.querySelector('.list-input');
const addBtn = document.querySelector('.add-btn');

const LISTS = "Lists";

let newLists = [];

function saveList() {
    localStorage.setItem(LISTS, JSON.stringify(newLists));
}

function deleteList(e) {
    const li = e.target.parentElement.parentElement;
    li.remove();
    newLists = newLists.filter((list) => list.id !== parseInt(li.id));
    saveList()
}

function painList(newList) {
    const li = document.createElement('li');
    li.id = newList.id;
    const span = document.createElement('span');
    span.innerText = newList.text;
    const button = document.createElement('button');
    button.innerHTML = '<i class=" fas fa-solid fa-trash"></i>';
    button.addEventListener('click', deleteList)
    li.appendChild(span);
    li.appendChild(button);
    listItem.appendChild(li);
}


function handleSubmit(e){
    e.preventDefault();
    const newList = listInput.value;
    listInput.value = '';
    const newListObj = {
        text: newList,
        id: Date.now(),
    }
    newLists.push(newListObj);
    painList(newListObj)
    saveList()
}

listForm.addEventListener('submit', handleSubmit)

const saveLists = localStorage.getItem(LISTS);

if(saveLists !== null){
    const parseList = JSON.parse(saveLists);
    newLists = parseList;
    parseList.forEach(painList);
}
