console.log('Max Sub Array');

const arr = [-2,-3,4,-1,-2,1,5,-3];
const arr2 = [-1,1,2,3,-6,4,5,6,7,-1];
const expectedOutput = [4,-1,-2,1,5];

maxContigousSum(arr2);

function maxContigousSum(arr){
  let max_so_far = arr[0];
  let total = 0;
  let subArrStart;
  let subArrEnd;
  let result = [];

  for(let i=0; i<arr.length; i++){
    total = arr[i];
    for(let j=i+1; j<arr.length; j++){
      total = total + arr[j];
      if(total > max_so_far) {
        // save this arrary
        subArrStart = i;
        subArrEnd = j;
        max_so_far = total;
      }
    }
  }
  for(let i=subArrStart; i<=subArrEnd; i++){
    result.push(arr[i]);
  }
  console.log(result);

}

