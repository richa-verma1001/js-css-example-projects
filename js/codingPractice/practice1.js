console.log('PRACTIhttps://www.youtube.com/watch?v=r_hYR53r61MCE1');

const arr = [10, 2, 3, 1, 0 , 8, 6, 7, 89, 12]

console.log(arr.length);

// Sort ascending
console.log(arr.sort( (a, b) => a - b));

//sort descending
console.log(arr.sort( (a, b) => b - a)); 

var merge = function(nums1, m, nums2, n) {
    nums1.splice(-m);
    nums1 = [...nums1, ...nums2].sort( (a,b) => a - b );
};

const nums1 = [1,2,3,0,0,0];
const nums2 = [2, 5, 6];
const m = 3; 
const n = 3;
merge(nums1, m, nums2, n);

function plusMinus(arr) {
    // Write your code here
    const arrLength = arr.length;
    const positive = arr.filter( (item) => item > 0);
    const negative = arr.filter( (item) => item < 0);
    const zero = arr.filter( (item) => item ==0);

    
    console.log(Number(positive.length/arrLength).toFixed(6));
    console.log(Number(negative.length/arrLength).toFixed(6));
    console.log(Number(zero.length/arrLength).toFixed(6));
}

plusMinus([1,1,0,-1-1]);


function miniMaxSum(arr) {
    // Write your code here
    let max, min = 0;
    const sortedArr = arr.sort( (a,b) => a - b);
    
    max = arr.slice(0,4).reduce( (acc, curr ) => {return acc + curr}, 0);
    min = arr.slice(-4).reduce( (acc, curr ) => {return acc + curr}, 0);
    console.log(`${max} ${min}`);
}

miniMaxSum([1,2,3,4,5]);

function timeConversion(s) {
    // Write your code here
    console.log(s);
    let [hour, min, sec] = [...s.split(':')];
    console.log(hour);
    console.log(min);
    console.log(sec);

    const regex = /am|pm/gi;
    const match = sec.match(regex);
    console.log(match);

    if(match[0].toLowerCase() === 'pm'){
      sec = sec.replace(regex,'');
      s = `${12+parseInt(hour)}:${min}:${sec}`;
    }  
    return s;
}
timeConversion('07:05:45AM');

function lonelyinteger(a) {
  const lookup = {};
  let unique = '';
  for(let i=0; i<a.length; i++){
    
    const num = a[i];
    
    if(lookup[num] !== undefined){
      lookup[num] = lookup[num]+1;
    } else {
      lookup[num] = 1;
      unique = num;
    }
  }
  return unique == '' ? 'Not Found' : unique;

}
console.log(lonelyinteger([1,2,3,1,2,3,4,4]));

function diagonalDifference(arr) {
    // Write your code here
  let sum1 = 0;
  let sum2 = 0;
  for(let i=0; i<arr.length; i++){
    sum1 = sum1 + arr[i][i];
    sum2 = sum2 + arr[(arr.length-1)-i][i];
  }
  console.log('diagonalDifference');
  console.log(sum1);
  console.log(sum2);
  return Math.abs(sum1 - sum2);
}

console.log(diagonalDifference([[11,2, 4],[4, 5,6],[10, 8, -12]]));
// 11 2 4
// 4 5 6
// 10 8 -12

function countingSort(arr) {
    // Write your code here
    let frequenceyArr = new Array(100).fill(0);
    console.log(frequenceyArr);
    for(let i=0; i<arr.length; i++){
      // arr[i] // value
      frequenceyArr[arr[i]] = frequenceyArr[arr[i]]+1;
    }
    console.log(frequenceyArr);
    return frequenceyArr;
}

countingSort(['63', '25', '73', '1', '98', '73', '56', '84', '86', '57', '16', '83', '8', '25', '81', '56', '9', '53', '98', '67', '99', '12', '83', '89', '80', '91', '39', '86', '76', '85', '74', '39', '25', '90', '59', '10', '94', '32', '44', '3', '89', '30', '27', '79', '46', '96', '27', '32', '18', '21', '92', '69', '81', '40', '40', '34', '68', '78', '24', '87', '42', '69', '23', '41', '78', '22', '6', '90', '99', '89', '50', '30', '20', '1', '43', '3', '70', '95', '33', '46', '44', '9', '69', '48', '33', '60', '65', '16', '82', '67', '61', '32', '21', '79', '75', '75', '13', '87', '70', '33'])

function caesarCipher(s, k) {
    // Write your code here
  //fromCharCode
  //charCodeAt
  // 97-122 (A - Z) : 65-90 (a-z): 25 chars
  let sArr = s.split('');
  const sLength = s.length;
  const Z_ASCII = 122;
  const z_ASCII = 90;
  let result = sArr.map( (letter) => {
    
    const charCode = letter.charCodeAt(0);
    
    if(charCode >= Z_ASCII-k+1 && charCode <= Z_ASCII){
      // charCode + k == 
    }
    const charCipher = String.fromCharCode(charCode+k);
    return charCipher;
  });
  console.log(result.join(''));
}
caesarCipher('Richa',3);

//LL
// function contains(item, LL) {
//   const first = LL.first;
//   const last = LL.last;
//   const curr = first;
//   const index = 0;

//   if(LL.isEmpty())
//     return false; // -1
  
//   while(curr!==last){
//     if(item === curr)
//       return true; // return index
//     curr = curr.next; // index++;
//   }
// }

// function void deleteFirst(item, LL) {
//   const first = LL.first;
//   const node = new Node(item);
//   node.next = first.next;
//   first.next = null;
//   first = node; 
// }

// function void removeLast(LL) {
//   let last = LL.last;
//   let first = LL.first;
//   let curr = first; 
//   let prev = curr;
  
//   if(isEmpty()){
//     throw Exception 'NoElementExists';
//     return;
//   } else if (first == last){
//     first = last = null;
//     return;
//   } 
  
//   while(curr.next !== null) {
//     prev = curr;
//     curr = curr.next; 
//   }
//   prev.next = null;
//   last = prev;
// }

// [2,3,1,2,5,4,66,89,0,9,34,45,23,6]
// linear sort: Complexity: O(n2)
sortArr([2,3,1,2,5,4,66,89,0,9,34,45,23,6]);
function sortArr(arr){

  if(arr.length === 0 || arr.length === 1 )
    return;
  console.log(arr.length, 'length');
  let complexity = 0;
  for(let i=0; i<arr.length; i++){
    for(let j=i+1;j<arr.length; j++){
      if(arr[i] > arr[j]){
        //swap
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        complexity++;
        // console.log(arr);
      }
    }
  }
  console.log(arr);
  console.log(complexity, 'complexity'); //27 needs for above array for sorting with linear sort
}

bubbleSort([2,3,1,2,5,4,66,89,0,9,34,45,23,6]);
function bubbleSort(arr){
  let complexity = 0;
  //check base case
  if(arr.length === 0 || arr.length === 1 )
    return; 
  // start algorithm
  for(let i=0;i < arr.length; i++){
    for(let j=i+1; j<arr.length; j++) {
      if(arr[i] > arr[j]){
        //swap
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        complexity++;
      }
  }

  }
  console.log(arr);
  console.log(complexity, 'complexity');
}

//mergeSort([5,3,1,7,4,2]);

reverseLL([5,4,1,9]);
function reverseLL(arr){
  // account for base cases 
  console.log(arr, 'input');

  let LL = createLL(arr);
  // Connect List 
  connectLL(LL);   // Now we have a LL! 
  // Reverse it 
  let myLL = LL[0];
  console.log(myLL);
  // add to array then pop stack 
  let revArr = new Array();
  console.log(revArr);
  while(myLL.value){
    revArr.push(myLL.value);
    myLL = myLL.next;
  }

  console.log(revArr, 'revArr');

}

function createNode(val, nextItem){
  let node = { 
    value: val,
    next: nextItem
  }
  return node;
}

function createLL(arr){
  let result = arr.map( (item, index, array) => {
    return createNode(item,"");
  });
  // console.log(result);
  return result;
}

function connectLL(arr){
  arr.forEach( (item, index, array) => {
    //update next node in each item to point to next elem
    item.next = array[index+1];
  })
  console.log(arr);
}




// function sortArr(arr){
  // cover base cases 
    // arr.length == 0 or arr.length == 1 
  //// Start Algo 
  //start with first element 
  // compare to next, if small ? do nothing : swap
  // if no swap needed, move to next element 
// }



function binarySearch(arr, elem) {

}

binarySearch([2,3,1,2,5,4,66,89,0,9,34,45,23,6], 6);