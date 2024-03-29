console.log('Read from file');

getData();
function getData(){
  fetch('../data.json')
  .then( (res) => res.json())
  .then( data => console.log(data))
  .catch( (e) => console.log(e));
}



// const fetchData = new Promise( (resolve, reject) => {
  
  
// });