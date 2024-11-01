- this is similar to the previous , the difference here is that once completing one tranaction (i.e., buy and sell), you cannot buy the very next day

```ts
// buy and sell stock with cooldown 
// this means cannot buy right after sell 
function BuyAndSell_Cooldown(prices: number[], buy: number, idx: number){
    if(idx >= prices.length) return 0

    if(buy){
        return Math.max(-prices[idx] + BuyAndSell_Cooldown(prices, 0, idx+1), BuyAndSell_Cooldown(prices, 1, idx+1))
    }else{
        return Math.max(prices[idx] + BuyAndSell_Cooldown(prices, 1, idx+2), BuyAndSell_Cooldown(prices, 0, idx+1))
    }
}

export function CallBuyAndSell_Cooldown(){
    const prices = [4,9,0,4,10]
    console.log(BuyAndSell_Cooldown(prices, 1, 0))
}

function BuyAndSell_Cooldown_memo(prices: number[], buy: number, idx: number, dp: number[][]){
    if(idx >= prices.length) return 0

    if(dp[idx][buy] !== -1) return dp[idx][buy]

    if(buy){
        return dp[idx][buy] = Math.max(-prices[idx] + BuyAndSell_Cooldown_memo(prices, 0, idx+1, dp), BuyAndSell_Cooldown_memo(prices, 1, idx+1, dp))
    }else{
        return dp[idx][buy] = Math.max(prices[idx] + BuyAndSell_Cooldown_memo(prices, 1, idx+2, dp), BuyAndSell_Cooldown_memo(prices, 0, idx+1, dp))
    }
}

export function CallBuyAndSell_Cooldown_memo(){
    const prices = [4,9,0,4,10]
    const dp: number[][] = new Array(prices.length).fill(null).map(()=> new Array(2).fill(-1))
    console.log(BuyAndSell_Cooldown_memo(prices, 1, 0, dp))
}

function BuyAndSell_Cooldown_Tab(prices: number[]){
    const dp: number[][] = new Array(prices.length + 2).fill(null).map(()=> new Array(2).fill(0))

    for(let idx= prices.length - 1; idx>=0 ; idx--){
        for(let buy = 0; buy <=1; buy++){
            if(buy === 1){
                dp[idx][buy] = Math.max(-prices[idx] + dp[idx+1][0], dp[idx+1][1])
            }else{
                dp[idx][buy] = Math.max(prices[idx] + dp[idx+2][1], dp[idx+1][0])
            }
        }
    }

    return dp[0][1]
}

export function CallBuyAndSell_Cooldown_Tab(){
    const prices = [4,9,0,4,10]
    console.log(BuyAndSell_Cooldown_Tab(prices))
}

// not doing space optimization further as we it n+2 which means we will have to keep track of 3 array 
``` 
