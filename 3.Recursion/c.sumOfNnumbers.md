## recursive method for printing sum of N numbers

> - 1,2,3 will sum to 6 , we will write a function in two way just simple recursion or backtrack , using backtrack , when ith value reaches lesser than 1 and then we return else we will keep adding i with sum and calling same function by decreasing i by 1 and keep passing the sum
> - let's see the function 

```js
function SumToN(i, sum){
  if(i < 1) {
    console.log(sum)
    return
  }
  SumToN(i-1, sum + i)
}

```

> - lets write a function that returns the sum, when summing 1,2
> - 2 + f(2-1) -> 1 + f(0) -> if equals to 0 return 0 , now it will go back to 1 + 0 -> it will go back -> 2 + 1 -> 3

```js
function SumToN(N){
  if(N===0){
    return 0
  }
  return N + SumToN(N-1)
}
```
