- Given n*m matrix, we need to find a row with maximum number of 1's , all the rows are in sorted order
- now that rows are in sorted order, and array contain only 0's and 1's , if we find the smallest index where 1 is then we can easily find out the number of 1s

```ts
function lowerBound(arr: number[], x: number){
    let low = 0;
    let high = arr.length - 1
    let ans = arr.length
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid] >= x){
            ans = mid
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
    return ans
}

function rowWithMaximumNumberOf1s(arr: number[][]){
    let count1s = -Infinity;
    let rowWithMax1s = 0
    let n = arr.length
    let m = arr[0].length 

    for(let i = 0; i < n; i++){
        let ithLowerBound = lowerBound(arr[i], 1)
        let numberOf1s = m - ithLowerBound

        if(numberOf1s > count1s){
            rowWithMax1s = i
            count1s = numberOf1s
        }
    }
    return rowWithMax1s
}

export function CallrowWithMaximumNumberOf1s(){
    const arr = [[0,0,0,0,1,1,1], [0,0,0,0,0,1,1], [0,0,1,1,1,1,1], [0,1,1,1,1,1,1], [0,0,0,0,0,0,1]]
    console.log(rowWithMaximumNumberOf1s(arr))
}
```
