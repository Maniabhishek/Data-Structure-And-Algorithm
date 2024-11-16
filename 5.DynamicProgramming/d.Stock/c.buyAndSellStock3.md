- similar question but we are allowed to do maximum 2 transaction means , 2 times buy and sell

```ts
// now this question is similar to the previous one , only difference is that we can only do 2 transaction
function BuyAndSellStock3(prices: number[], idx: number, buy: number, cap: number){
    if(cap === 0) return 0
    if(idx === prices.length) return 0

    if(buy){
        return Math.max(-prices[idx] + BuyAndSellStock3(prices, idx + 1, 0, cap), BuyAndSellStock3(prices, idx + 1, 1, cap))
    }else {
        return Math.max(prices[idx] + BuyAndSellStock3(prices, idx + 1, 1, cap - 1), BuyAndSellStock3(prices, idx + 1, 0, cap))
    }
}

export function CallBuyAndSellStock3(){
    const prices = [3,3,5,0,0,3,1,4]
    const cap = 2

    console.log(BuyAndSellStock3(prices, 0, 1, cap))
}

// convert to memoization , how many states do we have here , idx , buy and cap 
// value range for idx is 0...n-1 i.e, N 
// buy it can have either buy or sale i.e., 0 or 1 , thus 2 
// and cap value can 0,1,2 either it can 2 transaction or 1 or 0

function BuyAndSellStock3_Memo(prices: number[], idx: number, buy: number, cap: number, dp: number[][][]){
    if(cap === 0) return 0
    if(idx === prices.length) return 0

    if(dp[idx][buy][cap] !== -1) return dp[idx][buy][cap]
    if(buy){
        return dp[idx][buy][cap] = Math.max(-prices[idx] + BuyAndSellStock3_Memo(prices, idx + 1, 0, cap, dp), BuyAndSellStock3_Memo(prices, idx + 1, 1, cap, dp))
    }else {
        return dp[idx][buy][cap] = Math.max(prices[idx] + BuyAndSellStock3_Memo(prices, idx + 1, 1, cap - 1, dp), BuyAndSellStock3_Memo(prices, idx + 1, 0, cap, dp))
    }
}

export function CallBuyAndSellStock3_Memo(){
    const prices = [3,3,5,0,0,3,1,4]
    const cap = 2
    const dp: number[][][] = new Array(prices.length).fill(null).map(()=>new Array(2).fill(null).map(()=> new Array(cap+1).fill(-1)))
    console.log(BuyAndSellStock3_Memo(prices, 0, 1, cap, dp))
}


// instead of having one extra state we can take one variable as transactionNum using which if it is even then we will buy when odd we will sell , everytime we buy or sell we will increase the transactionNum once it reaches 2*totalAllowed we will return 0
function BuyAndSellStock3_Tabulation(prices: number[], cap: number){
    // we are doing prices.length + 1 as we can see one base condition is idx === prices.length thus we need one extra 
    const dp: number[][][] = new Array(prices.length+1).fill(null).map(()=>new Array(2).fill(null).map(()=> new Array(cap+1).fill(0)))

    for(let i = 0; i < Array.length; i++){
        for(let b = 0; b <=1; b++){
            dp[i][b][0] = 0
        }
    }

    // when index === n
    for(let b = 0; b <= 1; b++){
        for(let c = 0; c <= cap; c++){
            dp[prices.length][b][c] = 0
        }
    }

    for(let i = prices.length-1; i>=0; i--){
        for(let b=0; b<2 ; b++){
            // no need to compute for cap 0
            for(let c = 1; c <= 2 ; c++){
                if(b === 1){
                    dp[i][b][c] = Math.max(-prices[i] + dp[i + 1][0][c], dp[i + 1][1][c])
                }else {
                    dp[i][b][c] = Math.max(prices[i] + dp[i + 1][1][c-1], dp[i + 1][0][c])
                }
            }
        }
    }

    console.log(dp)
    return dp[0][1][2]
}

export function CallBuyAndSellStock3_Tabulation(){
    const prices = [3,3,5,0,0,3,1,4]
    console.log(BuyAndSellStock3_Tabulation(prices, 2))
}

```
