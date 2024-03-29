console.log('Search Algorithms');
// Types of search 
// 1. Linear 2. Binary 3. BFS 4. DFS 5. Hash

// Types of sorting algorithms
// 1. Bubble 2. Insertion 3.Selection 4. Merge 5. Quick Sort
// Binary Search

const input = [5,6,7,8,9];
const input2 = [2,1,4,3,5];
const input3=[5,1,6,10,3];

// Merge Sort 


// Quick Sort

// ---------------------------------------------------------
// Inserton Sort: Insert items in the right place by shifting O(n2)
console.log(insertionSort(input3));
function insertionSort(input){  
  console.log(input, 'input');
  if(input.length == 0 || input.length == 1)
    return input;

  let result = [];
  for(let i=0; i<input.length; i++){
    let insert = input[i];
    if(result.length == 0){
      result.push(insert);      
    } else {
      for(let j=0; j<result.length; j++){
        if(insert < result[j]){
          result.unshift(insert);
          break;
        } 
      }
      result.push(insert);
    }    
  }
  return result;
}
// ---------------------------------------------------------------
// Bubble Sort: bubble/move the big number to the end of the array
function bubbleSort(input){
  // let max = 0;
  for(let i=0; i<input.length-1; i++){
    if(input[i] > input[i+1]){
      let temp = input[i];
      input[i] = input[i+1];
      input[i+1] = temp;
      i=0;
    }
  }
  console.log(input);
  return input;
}
//bubbleSort(input3);

// ----------------------------------------------------

//Linear Search : Goes through every element in array to find it O(n)

// -----------------------------------------------------
// Binary Search : O(logn)
// console.log(binarySearch(input, 5));
function binarySearch(input, searchElem){
  // binary seach sections the array in halfs and searches 
  // one half at a time. Needs array to be sorted. 
  // let data = input.sort( (a,b) => a -b);
  let data = input;  
  let left = 0;
  let right = data.length - 1;

  while(left <= right){
    let midPoint = Math.ceil((left+right) / 2);
    if(searchElem === data[midPoint]) 
      return midPoint;
    if(searchElem > data[midPoint]){
      // use right half of array
      left = midPoint+1;
    } else {
      // user left half of array
      right = midPoint - 1;
    }
  }  
  return -1;
}