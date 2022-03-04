const addUserBtn = document.getElementById('addUser');
const doubleMoneyBtn = document.getElementById('doubleMoney');
const showMillionaireBtn = document.getElementById('showMillionaire');
const sortRichestBtn = document.getElementById('sortRichest');
const allWealthBtn = document.getElementById('allWealth');
const resetBtn = document.getElementById('reset');
const mainNode = document.querySelector('.main>ul');
const RANDOM_USER = 'https://randomuser.me/api';
let users = [];
console.log(mainNode);



async function addUser() {
    const res = await fetch(RANDOM_USER);
    const data = await res.json();
    const user = data.results[0];
    const multiplier = Math.random().toFixed(1)*10;
    const wealth = Math.random()*1000 * Math.pow(10, multiplier);
    user.wealth = wealth.toFixed(2);
    users.push(user);
    displayUsers();
}

function doubleMoney() {
    let result = users.map( (user) => {
        user.wealth = user.wealth * 2;
        return user;
    });
    displayUsers();
}

function sortByRichest() {
    users = users.sort( (a, b) =>(b.wealth - a.wealth) );
    displayUsers();
}

function totalWealth() {
    let total = 0;
    users.forEach( (user) => {
        total = total + user.wealth;
    });
    
    const userNode = document.createElement('li');
    userNode.classList.add('total')
    userNode.innerHTML = `<h4>Total Wealth:</h4>
        <p>$ ${Number.parseFloat(total).toFixed(2)}</p>`;
    mainNode.appendChild(userNode);
}

function showMillionaires() {
    let result = users.filter( (user) => {
        return user.wealth >= 1000000;
    });
    displayUsers(result);
}

// function formatMoney() {

// }

function displayUsers(providedUsers = users) {
    mainNode.innerHTML = '';
    providedUsers.forEach( (user) => {
        const userNode = document.createElement('li');
        userNode.innerHTML = `<h4>${user.name?.first} ${user.name?.last}</h4>
        <p>$ ${user.wealth}</p>`;
      mainNode.appendChild(userNode);
    });
}

function reset() {
    users = [];
    displayUsers();
}

addUserBtn.addEventListener('click', addUser);
doubleMoneyBtn.addEventListener('click', doubleMoney);
sortRichestBtn.addEventListener('click', sortByRichest);
showMillionaireBtn.addEventListener('click', showMillionaires);
allWealthBtn.addEventListener('click', totalWealth);
resetBtn.addEventListener('click', reset);



