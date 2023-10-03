/*
two arrays will be passed , we need to find the smallest difference between two numbers,
one from first array and another from second array , returned array will have 1st element from 1st array and 2nd from 2nd array 
*/



function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  // Write your code here.
  let arrOneIdx = 0;
  let arrTwoIdx = 0;
  let closestValue = Infinity
  arrayOne = arrayOne.sort((a,b)=> (a-b))
  arrayTwo = arrayTwo.sort((a,b)=> (a-b))
  let current = Infinity
  let result: number[] = [-1,-1]
  while( arrOneIdx < arrayOne.length && arrTwoIdx < arrayTwo.length) {
    let firstNum = arrayOne[arrOneIdx];
    let secondNum = arrayTwo[arrTwoIdx];
    if(firstNum < secondNum){
      current = secondNum - firstNum
      arrOneIdx++
    }else if(firstNum > secondNum) {
      current = firstNum - secondNum
      arrTwoIdx++
    }else {
      return [firstNum, secondNum]
    }
    
    if(current < closestValue){
      closestValue = current
      result = [firstNum, secondNum]
      
    }
  }
  
  return result;
}
