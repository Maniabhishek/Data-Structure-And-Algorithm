export function moveElementToEnd(array: number[], toMove: number) {
  // Write your code here.
  let toMoveIdx = 0;
  for(let i = 0; i < array.length; i++){
    let currentNum = array[i]
    if (currentNum === toMove ){
      continue
    }else{
      let temp = array[i]
      array[i] = array[toMoveIdx]
      array[toMoveIdx] = temp
      toMoveIdx++
    }
  }
  return array;
}
