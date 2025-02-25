```ts
function maxPointsToObtainFromCards(cards: number[], k: number){
    let total = 0;
    for(let i = 0; i < k; i++){
        total += cards[i]
    }

    let left = k-1
    let n = cards.length
    let right = n-1

    let max = total
    while(right >= n-k){
        total = total - cards[left] + cards[right]

        max = Math.max(max, total)
        right--
        left--
    }
    return max
}

export function CallmaxPointsToObtainFromCards(){
    let arr = [6,2,3,4,7,2,1,7,1]
    let k = 4
    console.log(maxPointsToObtainFromCards(arr, k))
}
```
