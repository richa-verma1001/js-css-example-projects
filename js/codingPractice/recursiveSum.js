console.log('Recursive sum');

function digitalRoot(n) {
  // let nStr = new String(n);
  let digits = getDigits(n);
  let sum = 0;
  let sumLength = getLength(n);

  while(sumLength >=2){
    for(let i=0; i<digits.length; i++){
      sum = sum + parseInt(digits[i]);
    }
    sumLength = getLength(sum); 
    digits = getDigits(sum);
    if(sumLength >= 2){
      sum = 0
    } 
  }
  return sum;     
  
}
function getLength(num) {
  return length = num.toString().length;
}
function getDigits(num) {
  return new String(num).split('');
}

//console.log(digitalRoot(2421));


function simpleArraySum(ar){
  if(ar.length == 0)
    return 0;
  else{
    let firstPart = ar.splice(0,ar.length-1);
    console.log(firstPart);
    let lastElem = ar;
    console.log(lastElem);
    return simpleArraySum(firstPart) + lastElem[0];
  }     
}

// let sum = simpleArraySum([1,2,3,4,5,-1]);
// console.log(sum);


function camelcase(s) {
    // Write your code here
    const regex = /([a-zA-Z][a-z]+)/g;
    let result = s.match(regex);
    console.log(result);
}

camelcase('oneTwoThreeFFour');

function pangrams(s) {
 let alphabet = 'abcdefghijklmnopqrstuvwxyz';

 let sArr = s.toLowerCase().split('');
 sArr = sArr.filter( (letter) => {
    return letter.charCodeAt() >=97 && letter.charCodeAt() <=122;
 });
 console.log(sArr);
 sArr = sArr.sort( (a,b) => a.charCodeAt() - b.charCodeAt() );
 console.log(sArr);
 let sSet = new Set(sArr);
 
 sSet = Array.from(sSet).join('');
 console.log(sSet);
 console.log(alphabet);
 return sSet.includes(alphabet) ? true : false;
}
//console.log(pangrams('The quick brown fox over the lazy dog and this is another dog.'));

function checkPalindrome(s){
  let revS = s.split('').reverse().join('');
  console.log(s);
  console.log(revS);
  return s === revS ? true : false;
}
console.log(checkPalindrome('abcba'));

