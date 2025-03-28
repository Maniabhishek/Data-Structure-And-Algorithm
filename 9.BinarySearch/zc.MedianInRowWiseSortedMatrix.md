- given a matrix of n*m where n and m is odd
- matrix is sorted row wise, task is to find the median

<img width=400 height=400 src="https://github.com/user-attachments/assets/3442fa0f-dc94-4ab2-8c7d-abf154423b21">

<img width=400 height=400 src="https://github.com/user-attachments/assets/50317b24-2f07-439a-be15-d77f8cf1cd1e">

```ts
function medianOfRowWiseSorted(arr: number[][]){
    let n = arr.length
    let m = arr[0].length
    let min = arr[0][0]
    for(let i = 0; i< arr.length; i++){
        min = Math.min(min, arr[i][0])
    }

    let left = Math.floor((n*m)/2)

    let max = arr[0][m-1]
    for(let i = 0; i < n; i++){
        max = Math.max(arr[i][m-1], max)
    }

    let low = min
    let high = max

    while(low <= high){
        let mid = Math.floor((low+high)/2)

        let lessOrEqualCount = findHowManySmallerOrEqual(arr, mid)

        if(lessOrEqualCount <= left){
            low = mid + 1
        }else {
            high = mid - 1 
        }
    }
    return low
}

function upperBound(arr: number[], search: number){
    let low = 0; 
    let high = arr.length - 1
    let ans = arr.length
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid] > search){
            // may be an answer 
            // look for more smaller index on left
            high = mid - 1
            ans = mid
        }else {
            low = mid + 1
        }
    }
    return ans
}

function findHowManySmallerOrEqual(arr: number[][], target: number){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        count += upperBound(arr[i], target)
    }
    return count
}

export function CallmedianOfRowWiseSorted(){
    let mat = [[1,5,7,9,11],[2,3,4,5,10],[9,10,12,14,16]]
    console.log(medianOfRowWiseSorted(mat))
}   
```
