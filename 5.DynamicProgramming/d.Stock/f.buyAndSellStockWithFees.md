- now the difference here is that, on each transaction (buy and sell) there is a fees associated with it

```ts
// best time to buy and sell stock with transaction fee
function BuyAndSellWithFee(prices: number[], idx: number, buy: number, fee: number){
    if(idx === prices.length) return 0

    if(buy === 1){
        return Math.max(-prices[idx] + BuyAndSellWithFee(prices, idx+1, 0, fee), BuyAndSellWithFee(prices, idx+1, 1, fee) )
    }else {
        return Math.max(prices[idx] + BuyAndSellWithFee(prices, idx+1, 1, fee) - fee, BuyAndSellWithFee(prices, idx+1, 0, fee) )
    }
}

export function CallBuyAndSellWithFee(){
    const prices = [1,3,2,8, 4,9]
    console.log(BuyAndSellWithFee(prices, 0, 1, 2))
}
```
