- we need to maximize the profit , if we buy any stock on any day then if we sell days after buying ,it has to be maximum
- so if we sell on ith day then we just have buy the stock on 0...i-1th day (it should be minimum in order to maximize it)
```ts
function BuyAndSell(arr: number[]){
    let minBuyingPrice = arr[0]
    let maxProfit = -Infinity
    for(let i = 1; i < arr.length; i++){
        const sellingPrice = arr[i]
        const profit = sellingPrice - minBuyingPrice
        maxProfit = Math.max(maxProfit, profit)
        minBuyingPrice = Math.min(minBuyingPrice, arr[i])
    }

    return maxProfit
}

export function CallBuyAndSell(){
    const arr: number[] = [7,1,5,3,6,4]
    console.log(BuyAndSell(arr))
}
```
