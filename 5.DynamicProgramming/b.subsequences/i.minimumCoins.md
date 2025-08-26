- We are given an array Arr with N distinct coins and a target. We have an infinite supply of each coin denomination. We need to find the number of ways we sum up the coin values to give us the target.


```ts
function minimumCoins(coins: number[], target: number, idx){
    if(idx === 0){
        if(target % coins[idx] === 0) {
            return target/coins[idx]
        }else {
            // why 1e8 , look we need to find the minimum number of coins , and in function below we are adding 1 everytime , so any moment this function returns from this else condition, which means this will never make coin change thus we need to eliminate the call hence add maximum value , we could have reuturned Infinty as well but since we are adding 1 + 1 and addition of infinity could cause overflow error
            return 1e8
        }
    }

    const not_take = minimumCoins(coins, target, idx-1)

    let take = Infinity
    if(target >= coins[idx]){
        take = 1 + minimumCoins(coins, target - coins[idx], idx)
    }

    return Math.min(not_take,take)
}

export function Call_minimumCoins(){
    const coins = [1,2,3]
    console.log(minimumCoins(coins, 7, 2))
}
```
