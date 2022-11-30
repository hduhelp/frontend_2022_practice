function displayItems(){
    const sudoList = document.querySelector('.list-wrapper');

    const items = fetch('../static/todo.json');

    items.then( response => {
        const jsonPromise = response.json();
        jsonPromise.then( json => {
            for (let i=0; i<json['todoList'].length; i++) {
                let item = document.createElement('div');
                let content = document.createElement('span');
                let deletes = document.createElement('img');
                item.className = 'items';
                content.className = 'content';
                deletes.className = 'delete';
                deletes.src = "../src/assets/images/delete.svg";
                content.innerHTML = json['todoList'][i];
                sudoList.appendChild(item);
                item.appendChild(content);
                item.appendChild(deletes);

                deletes.setAttribute('onclick', 'Delete(this);');
            }
        });
    });
}

function Delete(e){
    e = e || window.event;
    const deleted = e.parentNode;
    deleted.parentNode.removeChild(deleted);

}

function Create(){
    addBox.style.setProperty('display', 'flex');
    rootBox.style.setProperty('filter', 'blur(1.6rem)');
}

function Cancel(){
    addBox.style.setProperty('display', 'none');
    rootBox.style.setProperty('filter', 'blur(0)');
    inputText.value = '';
}

function Submit(){
    addBox.style.setProperty('display', 'none');
    rootBox.style.setProperty('filter', 'blur(0)');
    
    if (inputText.value != ''){
        let item = document.createElement('div');
        let content = document.createElement('span');
        let deletes = document.createElement('img');
    
        item.className = 'items';
        content.className = 'content';
        deletes.className = 'delete';
        deletes.src = "../src/assets/images/delete.svg";
        content.innerHTML = inputText.value;
    
        todoList.appendChild(item);
        item.appendChild(content);
        item.appendChild(deletes);
    
        deletes.setAttribute('onclick', 'Delete(this);');
        
        inputText.value = '';
    
    } else {
        alert("提交内容不能为空！");
    }
}

function Sorrow(){
    if (nut==1) {
        html.style.setProperty('filter', 'grayscale(1)');
        nut = 0;
    } else {
        html.style.setProperty('filter', 'grayscale(0)');
        nut = 1;
    }
}

/* init window */
displayItems();
alert('建议90%缩放比查看');

const html = document.querySelector('html');
const sorrow = document.querySelector('.condolences')
const rootBox = document.querySelector('.root');
const todoList = document.querySelector('.list-wrapper');
const createNew = document.querySelector('.create');
const addBox = document.querySelector('.add-wrapper');
const inputText = document.querySelector('.new');
const cancelButton = document.querySelector('.cancel');
const submitButton = document.querySelector('.submit');
let nut = 1;

createNew.addEventListener('click', Create);
cancelButton.addEventListener('click', Cancel);
submitButton.addEventListener('click', Submit);
sorrow.addEventListener('click', Sorrow);