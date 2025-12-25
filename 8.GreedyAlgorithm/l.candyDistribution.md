- given a rating of each child based on that we need to distribute the candys
- with two conditions first is each child must have at least one candy
- and each child with higher rating must get more than its neighbours
- the first apporach will be by traversing the from left and keep comparing from the left element, if greater then , assign one more than previous otherwise 1
- and then will do same operations while traversing from right

```ts
function candyDistributionTotal(arr: number[]){
    const left = new Array(arr.length)
    const right = new Array(arr.length)
    left[0] = 1;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > arr[i-1]){
            left[i] = left[i-1] + 1
        }else{
            left[i] = 1
        }
    }

    right[arr.length-1] = 1
    for(let i = arr.length-2; i >= 0; i--){
        if(arr[i] > arr[i+1]){
            right[i] = right[i+1] + 1
        }else{
            right[i] = 1
        }
    }

    let total = 0
    for(let i = 0; i < arr.length; i++){
        total += Math.max(left[i], right[i])
    }
    return total
}

export function CallcandyDistributionTotal(){
    console.log(candyDistributionTotal([0,2,4,3,2,1,1,3,5,6,4,0,0]))
}
```

- let's improve it further

```ts 
function candyDistributionTotal2(arr: number[]){
    let total = 1
    let i = 1
    while(i < arr.length){
        if(arr[i] === arr[i-1]){
            total += 1
            i++
            continue
        }

        let peak = 1
        while(i < arr.length && arr[i] > arr[i-1]){
            peak += 1
            total += peak
            i++
        }

        let down = 1
        while(i < arr.length && arr[i] < arr[i-1]){
            total += down
            down++
            i++
        }

        if(down > peak){
            total += down-peak
        }
    }
    return total
}

export function CallcandyDistributionTotal2(){
    console.log(candyDistributionTotal2([0,2,4,3,2,1,1,3,5,6,4,0,0]))
}
```
