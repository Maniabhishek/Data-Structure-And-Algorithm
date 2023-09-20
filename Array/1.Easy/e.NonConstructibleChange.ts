/*

  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you cannot  create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).
  for example if you have coins [1,2,5] then you will not be able to make change of 4
*/

function nonConstructibleChange(coins: number[]) {
  // Write your code here.
  coins = coins.sort((a,b)=> a-b)
  let currentChange = 0
  for(let coin of coins) {
    if(coin > (currentChange+1)) {
      return currentChange+1
    }
    currentChange += coin
  }
  return currentChange + 1;
}
