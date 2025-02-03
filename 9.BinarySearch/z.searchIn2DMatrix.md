- you are given 2D Matrix in a sorted order, task is to find a number in 2D matrix
- example: [[1,2,3,4], [15,16,17,18], [29,30,31,32]]
```ts
function searchIn2D(arr: number[][], search: number){
    let low = [0,0]
    let high = [arr.length-1, arr[0].length - 1]

    while(low[0] <= high[0] && low[1] <= high[1]){
        let mid = [Math.floor((low[0] + high[0])/2), Math.floor((low[1] + high[1])/2)]
        if(arr[mid[0]][mid[1]] === search){
            return mid
        }else if(arr[mid[0]][mid[1]] > search){
            let col = arr[0].length-1
            let row = mid[0]
            if(mid[1]-1>= 0) {
                col = mid[1] - 1 
            }else {
                row = mid[0] - 1
            }
            high = [row, col]
        }else {
            let row = mid[0]
            let col = 0

            if((mid[1]+1) < arr[0].length){
                col = mid[1] + 1
            }else {
                row = mid[0] + 1
            }

            low = [row, col]
            
        }
    }
    return [-1,-1]
}

export function CallsearchIn2D(){
    let arr = [[1,2,3,4], [15,16,17,18], [29,30,31,32]]
    console.log(searchIn2D(arr, 31))
}
```

<img width=400 height=400 src="https://github.com/user-attachments/assets/7f307993-7880-432e-a7ac-7405a0259d0b">
<img width=400 height=400 src="https://github.com/user-attachments/assets/88514c4c-e00f-48cd-90a1-825deaeffc31">

```
function searchIn2DByFlatteningTechnique(arr: number[][], target: number){
    let n = arr.length
    let m = arr[0].length 
    let high = n*m - 1
    let low = 0

    while(low <= high){
        let mid = Math.floor((low+high)/2)
        let row = Math.floor(mid/m)
        let col = mid % m
        if(arr[row][col] === target){
            return true
        }else if(target > arr[row][col] ){
            low = mid + 1
        }else {
            high = mid - 1
        }
    }
    return false
}

export function CallsearchIn2DByFlatteningTechnique(){
    let arr = [[1,2,3,4], [15,16,17,18], [29,30,31,32]]
    console.log(searchIn2DByFlatteningTechnique(arr, 35))
}
```

