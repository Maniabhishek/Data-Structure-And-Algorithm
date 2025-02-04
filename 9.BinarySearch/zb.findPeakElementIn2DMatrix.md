- we have solved finding peak in an array where we used the technique of increasing and decreasing slope
- we can use the same idea here as well

![image](https://github.com/user-attachments/assets/4830221d-829a-4ba0-8259-5b28fdc08875)

![image](https://github.com/user-attachments/assets/501ada60-6c90-442d-9b14-af16fc0460cc)

![image](https://github.com/user-attachments/assets/21e614a0-1535-4f44-bd5b-daf5bb792037)


```ts
function findPeakElementIn2D(arr: number[][]){
    let low = 0;
    let high = arr[0].length - 1

    while(low <= high){
        let mid = Math.floor((low+high)/2)
        let row = findMaxValueInCol(arr, mid)

        let left = mid-1 >= 0 ? arr[row][mid-1] : -1
        let right = mid + 1 < arr[0].length ? arr[row][mid+1] : -1

        if(arr[row][mid] > left && arr[row][mid] > right){
            return [row, mid]
        }else if(arr[row][mid] < left){
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
    return [-1,-1]
}

function findMaxValueInCol(arr: number[][], col: number){
    let maxValue = -1
    let index = -1

    for(let i = 0; i < arr.length; i++){
        if(arr[i][col] > maxValue){
            maxValue = arr[i][col]
            index = i
        }
    }
    return index
}

export function CallfindPeakElementIn2D(){
    let arr = [[1,2,5,1,4,5],[2,9,3,2,3,2],[1,7,6,0,1,3],[3,6,2,3,7,2]]
    console.log(findPeakElementIn2D(arr))
}

```
