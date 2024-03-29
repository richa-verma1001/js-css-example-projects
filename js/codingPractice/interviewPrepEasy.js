console.log('Warmupp');

function reverseString(s){
  return s.split('').reverse().join('');
}

const reversed = reverseString('abicd*&^');
// console.log(reversed);

function firstNonRepeatingChar(s) {
  for(let i=0; i<s.length; i++){
    const thisChar = s[i];
    const lastIndexOfChar = s.lastIndexOf(thisChar);
    if(lastIndexOfChar == i){
      return thisChar;
    }else{
      const regex = new RegExp(thisChar, "g");
      s = s.replace(regex, '');
      i--;
      // console.log(s);
    }
  }
}
const data = "aacabbbcdeeff";
// console.log(firstNonRepeatingChar(data));

function twoSum(arr, target){

}

// practice 

function binarySearch(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  while(first <= last) {
    let midpoint = Math.floor((first+last) / 2);
    if(target == arr[midpoint])
      return midpoint;
    else if(target < arr[midpoint]){
      last = midpoint-1;
    } else {
      first = midpoint + 1;
    }
  }
  return -1;
}
//console.log(binarySearch([2,3,6,9,34],36));

function merge(arr1, arr2){
  console.log('Executing merge');
  // base cases 
  if(arr1.length == 0)
    return arr2;
  if(arr2.length == 0)
    return arr1;  

  while(arr2.length !== 0 || !arr2){
    const curr = arr2[0];
    for(let i=0; i<arr1.length; i++){      
      if(curr < arr1[i]){
        // arr1.unshift(curr); // insert arr2 item into arr1
        arr1.splice(i,0,curr);
        arr2.shift();
        break;
      }
    }
  }
  console.log(arr1);
  return arr1;
}
const arr1 = [5,6,15];
const arr2 = [1,9,12];
merge(arr1, arr2);


var reverseList = function(head) {
    if(head == null || head.next == null)
        return head;
    let prev = null;
    let curr = head;

    while(head !== null){
        head = head.next;
        curr.next = prev;
        prev = curr;
        curr = head;
    }
    return prev;
    
};