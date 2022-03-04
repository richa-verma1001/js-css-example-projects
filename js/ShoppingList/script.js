const addItemBtn = document.getElementById('addItem');
const deleteBtn = document.getElementById('delete');
const shoppingListEl = document.getElementById('shoppingList');
const searchEl = document.getElementById('userInput');
const clearAllBtn = document.getElementById('clearAll')

let shoppingList = JSON.parse(window.localStorage.getItem('shoppingList')) || [];

function addItem(e) {
    if(e.keyCode === 13){
        e.preventDefault();
        const item = e.target.value;
        e.target.value = '';
        createItem(item);
        shoppingList.push(item);
        setLocalStorage('shoppingList', shoppingList);
        
    }        
}

function createItem(item) {
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');
    itemEl.id = item;
    itemEl.innerHTML = `<h4 class="name">${item}</h4>
                        <button class="delete">
                            <i class="fas fa-remove"></i>
                        </button>`;    
    shoppingListEl.appendChild(itemEl);
    itemEl.addEventListener('mouseover', () => {
        itemEl.children[1].style = 'visibility:visible';
    });
    itemEl.addEventListener('mouseout', () => {
        itemEl.children[1].style = 'visibility:hidden';
    });
    
    const deleteEl = document.querySelector(`#${item}>button`);
    deleteEl.addEventListener('click', () => {
        deleteEl.parentElement.remove();
        shoppingList = shoppingList.filter( (listItem) => {
            return listItem !== item;
        });
        setLocalStorage('shoppingList', shoppingList);
    });

    // const listItemEl = document.querySelector(`#${item}>h4`);
    // listItemEl.addEventListener('onchange', (e) => {
    //     console.log('Time to save the changed content');
    //     console.log(listItemEl.parentElement);
       
    // });
    return itemEl;
}

function setLocalStorage(key, obj) {
    window.localStorage.setItem(key, JSON.stringify(obj));
}

function displayList() {
    console.log(`shopping list now is `);
    console.log(shoppingList);
    if(shoppingList.length == 0 ) {
        shoppingListEl.innerHTML = '';
    }
    shoppingList.forEach( (item) => {
        createItem(item);
    });
}
function reset() {
    console.log('attempting a reset');
    shoppingList = [];
    window.localStorage.removeItem('shoppingList');
    console.log(window.localStorage.getItem('shoppingList'));
    displayList();
}

displayList();
searchEl.addEventListener('keyup', addItem);
clearAllBtn.addEventListener('click', reset)
//addItemBtn.addEventListener('click', addItem);


