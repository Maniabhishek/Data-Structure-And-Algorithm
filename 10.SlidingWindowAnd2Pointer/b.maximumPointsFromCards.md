- Maximum points you can obtain from the cards , you are given an array of cards with it points, and k denotes the number of cards you can pick from array
- you can either pick from from or back , picking from middle is not allowed
- for example [6,2,3,4,7,2,1,7,1] k = 4
- now you can pick 6,2,3,4 or from back , 1,7,1,2 or 6,1,2,7 (from front then back then front and then from back)
- find the the max points that can be acheived by picking k cards 

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
