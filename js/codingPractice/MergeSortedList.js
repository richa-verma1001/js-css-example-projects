console.log('MergeSortedLists');

arr1 = [1,3,5,7];
arr2 = [0,2, 6,8, 10, 12];
// Result: [0,1,2,3,4,5,6,7,8]
// Complexity : O(n)
mergeLists(arr1, arr2);
function mergeLists(arr1, arr2){

  if(arr1.length == 0 )
    return arr2;
  if(arr2.length == 0)
    return arr1;
  
  let result = []; 
  let i = 0;
  let j = 0;
  let count = 0;
  
  while(i < arr1.length || j < arr2.length) {
    if(arr1.length == 0){    
      result = [...result, ...arr2];
      break;
    }
    if(arr2.length == 0 ){    
      result = [...result, ...arr1];
      break;
    }

    if(arr1[i] < arr2[j]){
      result.push(arr1[i]);
      arr1.splice(i, 1);
    } else {
      result.push(arr2[j]);
      arr2.splice(j,1);
    }
    i = 0;
    j = 0;
    count++;
  }
console.log(result);
}

function isBalanced(s) {
    // Write your code here
    let arr = s.split('');
    let result = "YES";
    console.log(arr);
    while(arr.length!== 0){
        console.log(arr.length);
        let first = arr.splice(0,1)[0];
        let last = arr.splice(-1)[0];
        console.log(`Iterating first:${first} last: ${last}`);
        if(first !== last){
            result = "NO"
            return result;
        }                
    }
    console.log(result, 'result');
    return result;
}

isBalanced('{[()]}');

