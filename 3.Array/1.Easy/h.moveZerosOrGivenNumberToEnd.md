
 > You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.


  The function should perform this in place (i.e., it should mutate the input
  array) and doesn't need to maintain the order of the other integers.

sampleInput = [2, 1, 2, 2, 2, 3, 4, 2]
sampleOutput = [1, 3, 4, 2, 2, 2, 2, 2]

the simplest approach to solve this problem is to take an array and store all the elements other than toMove in new array , now in the original array start copying elements from new Array into original array and once all the elements from new array are copied , replace next all elements in original array by toMove value 

TC: O(n), SC: O(1)
```ts
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
```
