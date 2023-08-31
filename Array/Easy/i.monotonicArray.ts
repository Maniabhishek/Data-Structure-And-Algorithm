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
    if((array[1] - array[0]) > 0) isNonIncreasing = false
    if((array[1] - array[0]) < 0) isNonDecreasing = false
  }
  return isNonIncreasing || isNonDecreasing
}
