> An array is monotonic if it is either monotone increasing or monotone decreasing. An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j]. Given an integer array nums, return true if the given array is monotonic, or false otherwise.
```ts
export function isMonotonic(array: number[]) {
  // Write your code here.
  if(!(array.length > 1)) return true
  const incOrDec = array[0] > array[array.length - 1] ? "dec" :"inc"
  
  if(incOrDec === "inc"){
    for(let i = 1 ; i < array.length ; i++){
      if(array[i] < array[i-1]){
        return false
      }
    }
  }else {
    for(let i = 1 ; i < array.length ; i++){
      if(array[i] > array[i-1]){
        return false
      }
    }
  }
  return true;
}


// another way
function isMonotonic(array: number[]) {
  let isNonIncreasing = true;
  let isNonDecreasing = true;

  for(let i = 1; i < array.length; i++ ){
    if(array[i] > array[i-1]) isNonIncreasing = false
    if(array[i] < array[i-1]) isNonDecreasing = false
  }
  return isNonIncreasing || isNonDecreasing
}
```
