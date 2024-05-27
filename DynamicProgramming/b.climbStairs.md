- You are climbing a staircase. It takes n steps to reach the top.
- Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


## Solution
### How to know if it is a DP problem 
- whenever question asks to Count the total number of ways
- minmum or maximum output
- find all possible ways , best way ,
- if you see above points in the question , you tend to solve the problem using recursion

### How to think about a dynamic problem
- try to represent problem in terms of index
- do all possible stuffs on that index according to the problem statement
- sum of all stuff will give you the -> count all ways
- min of all stuff will give -> find min in problem
- max of all the stuff will give -> find max in problem

> lets try to out this in index , lets think of the stairs as in terms of index lets say if we have 3 stairs , then we need to find the total number ways we can reach on the 3rd stair with 1 and 2 steps , lets assume that we are representing stairs as indexes , 0,1,2,3,4...N, if we have recursion function f(n) then we need to find out number of ways to reach n from 0.

> in the below function we can say the base condition for reaching to 0 will be 1 and 1 will be 1
```ts
export function ClimbStairs(n: number): number{
    if(n === 0 || n === 1) return 1

    let l = ClimbStairs(n-1)
    let r = ClimbStairs(n-2)
    return l+r
}
```

- we can convert this above function using memoization , we will take dp array and store -1 at all indexes and keep storing as we keep getting the solutions
```ts
export function ClimbStairsMemoization(n: number, dp: number[]): number {
    console.log(dp)
    if(n === 0 || n === 1) return 1
    
    if(dp[n] !== -1 ) return dp[n]
    let l = ClimbStairsMemoization(n-1, dp)
    let r = ClimbStairsMemoization(n-2, dp)
    dp[n] = l + r
    return dp[n]
}

function CallClimbStairsMemoization(){
    let n = 4
    const dp: number[] = new Array(n + 1).fill(-1)
    const res = ClimbStairsMemoization(4, dp)
    console.log(res)
}
```
