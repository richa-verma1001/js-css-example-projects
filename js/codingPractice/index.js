console.log('LOADED');

let bookCollection = []; 

function fetchData() {
  // Replace 'data.json' with the path to your JSON file
  fetch('books.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the JSON data here
      console.log(data);
      bookCollection = data;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
fetchData();


const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function arrayFns() {
  return contacts.map( ({firstName}) => `${firstName}Solid`)
  // console.table(contacts);
}

console.table(contacts);
console.table(arrayFns());


function lookUpProfile(name, prop){
  const contact = contacts.filter( (contact) => {
    return contact.firstName == name;
  });
  console.log(contact[0]);

  if (contact[0] !== null && contact[0] !== undefined )
    return contact[0].hasOwnProperty(prop) ? contact[0][prop] : "No Such Property";
  return "No Such Contact";
}

const print = lookUpProfile("Bob", "number");

let result = [];

function recurseList(n) { 
    if(n == 0)
      return 0;
    else{
      return `${recurseList(n-1)} ${n}`;
    }      
}

function recurseListArray(n) { 
    if(n === 0)
      return [];
    else {
      result = recurseListArray(n-1);
      result.push(n);
      return result;
      // return [...recurseList(n-1), n];
    }      
}

console.log(recurseListArray(10), 'arrayList');

function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum)
    return [startNum];
  else {
    const arr = rangeOfNumbers(startNum, endNum-1);
    arr.push(endNum);
    return arr;
  }
}

console.log(rangeOfNumbers(2,2));