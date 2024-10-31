- here the difference is transaction can be done k times
- this time we will use transaction number for counting the transaction , and when transaction is divisible by 2 then we can by or else sell and transaction count becomes 2 times k then we stop
- k is number of transaction allowed, 1 complete transaction means , sell and buy one after other
- so last problem we solved for 2 transaction , so can we use the same previous solution by small modification yes we can
- previously we were taking buy as indicator buy or sell, here in this case we can use tranactionNum as indication when it is even it means buy or when it is odd then it means sell

```ts
function BuyAndSellStock4(prices: number[], idx: number, transactionNum: number, k: number){
    if(transactionNum === 2 * k) return 0
    if(idx === prices.length) return 0

    // buy
    if(transactionNum %2 === 0){
        return Math.max(-prices[idx] + BuyAndSellStock4(prices, idx + 1, transactionNum + 1, k), BuyAndSellStock4(prices, idx+1, transactionNum, k))
    }else {
        return Math.max(prices[idx]+ BuyAndSellStock4(prices, idx+1, transactionNum+1, k), BuyAndSellStock4(prices, idx+1, transactionNum, k))
    }
}

export function CallBuyAndSellStock4(){
    const prices = [3,3,5,0,0,3,1,4]
    console.log(BuyAndSellStock4(prices, 0, 0, 2))
}


function BuyAndSellStock4_memo(prices: number[], idx: number, transactionNum: number, k: number, dp: number[][]){
    if(transactionNum === 2 * k) return 0
    if(idx === prices.length) return 0

    if(dp[idx][transactionNum] !== -1) return dp[idx][transactionNum]

    // buy
    if(transactionNum %2 === 0){
        return dp[idx][transactionNum] = Math.max(-prices[idx] + BuyAndSellStock4(prices, idx + 1, transactionNum + 1, k), BuyAndSellStock4(prices, idx+1, transactionNum, k))
    }else {
        return dp[idx][transactionNum] = Math.max(prices[idx]+ BuyAndSellStock4(prices, idx+1, transactionNum+1, k), BuyAndSellStock4(prices, idx+1, transactionNum, k))
    }
}

export function CallBuyAndSellStock4_memo(){
    const prices = [3,3,5,0,0,3,1,4]
    const k = 2
    const dp = new Array(prices.length).fill(null).map(()=> new Array(k).fill(-1))
    console.log(BuyAndSellStock4_memo(prices, 0, 0, k, dp))
}

//tabulation
function BuyAndSellStock4_Tab(prices: number[], k: number){
    const dp:number[][] = new Array(prices.length + 1).fill(null).map(()=> new Array(k*2+1).fill(0))

    // since all the indexes are already initialized with 0 so no need to initialize
    for(let i = prices.length - 1; i >= 0; i-- ){
        for(let t = 2*k - 1; t>=0; t--){
            if(t %2 === 0){
                dp[i][t] = Math.max(-prices[i] + dp[i + 1][t+1], dp[i+1][t])
            }else {
                dp[i][t] = Math.max(prices[i]+ dp[i+1][t+1], dp[i+1][t])
            }
        }
    }
    console.log(dp)
    return dp[0][0]
}

export function CallBuyAndSellStock4_Tab(){
    const prices = [3,3,5,0,0,3,1,4]
    const k = 2
    console.log(BuyAndSellStock4_Tab(prices, k))
}

function BuyAndSellStock4_TabSO(prices: number[], k: number){
    let after:number[] = new Array(k*2+1).fill(0)

    // since all the indexes are already initialized with 0 so no need to initialize
    for(let i = prices.length - 1; i >= 0; i-- ){
        const curr = new Array(k*2+1).fill(0)
        for(let t = 2*k - 1; t>=0; t--){
            if(t %2 === 0){
                curr[t] = Math.max(-prices[i] + after[t+1], after[t])
            }else {
                curr[t] = Math.max(prices[i]+ after[t+1], after[t])
            }
        }
        after = curr
    }

    return after[0]
}

export function CallBuyAndSellStock4_TabSO(){
    const prices = [3,3,5,0,0,3,1,4]
    const k = 2
    console.log(BuyAndSellStock4_Tab(prices, k))
}

```
