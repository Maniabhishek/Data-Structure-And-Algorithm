### BuyAndSell Stock as many times you can (find max profit)
- you can do as many transaction you want , but 1st you have buy and then sell , sell can not be performed before buy , buy then sell
-  we can buy and sell, as many times i can , let's say if i buy 1st stock , and sell at some other day , but if we had bought the next day we could have got better profit , thus we can try all possible way , we can buy or not buy the 1st day stock
- thus represent the problem in terms of index f(arr, i, buy), this means at i we can either buy or we dont look for other options
- do all the stuff on this index in this case we can buy or we dont , OR we can sell or we dont
- return min, max or sum
```ts
function BuyAndSellStock2(arr: number[], idx: number, buy: number){
    if(idx === arr.length) return 0

    let profit = -Infinity

    if(buy){
        profit = Math.max(-arr[idx] + BuyAndSellStock2(arr, idx + 1, 0), BuyAndSellStock2(arr, idx + 1, 1) )
    }else {
        profit = Math.max(arr[idx] + BuyAndSellStock2(arr, idx + 1, 1), BuyAndSellStock2(arr, idx+1, 0))
    }
    return profit
}

export function CallBuyAndSellStock2(){
    const arr = [7,1,5,3,6,4]

    console.log(BuyAndSellStock2(arr, 0, 1))
}

function BuyAndSellStock2Memoization(arr: number[], idx: number, buy: number, dp: number[][]){
    if(idx === arr.length) return 0

    if(dp[idx][buy] !== -1) return dp[idx][buy]

    let profit = -Infinity

    if(buy){
        profit = Math.max(-arr[idx] + BuyAndSellStock2(arr, idx + 1, 0), BuyAndSellStock2(arr, idx + 1, 1) )
    }else {
        profit = Math.max(arr[idx] + BuyAndSellStock2(arr, idx + 1, 1), BuyAndSellStock2(arr, idx+1, 0))
    }
    return dp[idx][buy] = profit
}

export function CallBuyAndSellStock2Memoization(){
    const arr = [7,1,5,3,6,4]

    const dp= new Array(arr.length).fill(null).map(()=> new Array(2).fill(-1))

    console.log(BuyAndSellStock2Memoization(arr, 0, 1, dp))
}

// tabulation...
function BuyAndSellStock_Tabulation(arr: number[]){
    // creating array of n+1 because in the previous recursive problem the base condition was i === length then 0 so we have had to create one extra row and aldo if you notice the code dp[idx+1], which indicates you need to next row value , thus if you had not taken and started from last row you would have got index out of bound
    const dp = new Array(arr.length+1).fill(null).map(()=> new Array(2).fill(0))
    
    for(let i = arr.length-1; i>= 0; i--){
        for(let buy = 0; buy <=1; buy++){
            if(buy === 0){// can buy
                dp[i][buy] = Math.max(-arr[i] + dp[i+1][1], dp[i+1][0])
            }else {
                dp[i][buy] = Math.max(arr[i] + dp[i+1][0], dp[i+1][1])
            }
        }
    }
    
    console.log(dp[0][0])
}

console.log(BuyAndSellStock_Tabulation([7,1,5,3,6,4]))
```
