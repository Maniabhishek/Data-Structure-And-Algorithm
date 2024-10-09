- those who cannot remember the past are tend to repeat it

let's understand the Dynamic programming by solving fibonacci problem

- 0,1,1,2,3,5,8
- the above list is nothing but fibonacci list , as in the list except the first two all the other number is derived from the sum of the previous two
- so if we need to find the 3rd one just add 1st and 2nd and so on
- the recursive solution is
```js
function Fibonacci(n){
  if(n === 1 || n === 0) {
      return n
  }

  return Fibonacci(n-1) + Fibonacci(n - 2)
}
```

- if we draw a recursion tree we will see,  we will be solving subproblem multiple times in recursion , so what we will do we will store the solution of the previous problem and this is called as memoization
- so to remember the solution of the previous problem we need to store it somewhere in the map or table
- so 1st we will create the array to store solution i.e., dp array and then we will check before calling recursion method if the solution already exists or not if exists then we will return there itseld and in next step we will store the solution in dp array

```ts
export function fibnocci(n){
    const dp: number[] = new Array(n + 1).fill(-1)
    const ans = solve(n, dp)
    console.log(ans)
}

function solve(n: number, dp: number[]){
    if(n === 1 || n === 0) return n

    if(dp[n] !== -1) return dp[n]

    dp[n] = solve(n-1, dp) + solve(n-2, dp)

    return dp[n]
}
```
- ts will be : if we analyze we will see we are just calling n times as for other recusrion we are able to solve and store for subproblems so Time Complexity will be O(N)
- and space complexity will be O(N) is for stack space recursion and O(N) for the array so space complexity is O(N) + O(N)

- now lets solve this problem using tabulation
- tabulation will follow the approach of bottom up where base case comes first and followed by required ans where as in above approach of memoization it followed top down approach

```ts
export function fibonacciTabulation(n: number, dp: number[]){
    dp[0] = 0
    dp[1] = 1

    for(let i = 2; i<=n ; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}
```

- as we see in the above solution we have stored the base condition and then we are trying to fill the array at remaining position using the same reursion approach
- its time complexity is O(N) and space complexity O(N)

can we optimize it further , yes we can remove array , 
- to find the solution we only need previous 2 values , so instead of storing it we can just store it in variables and can end up finding the solution so in every step prev2 = prev and prev = curri

```ts
export function fibonacciTabulationUsingVar(n: number){
    let prev = 1
    let prev2 = 0

    for(let i = 2; i<=n ; i++){
        let curri = prev + prev2
        prev2 = prev
        prev = curri
    }
    return prev
}
```
