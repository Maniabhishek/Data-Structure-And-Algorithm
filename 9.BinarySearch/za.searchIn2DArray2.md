<img width=400 height=400 src="https://github.com/user-attachments/assets/65e912c8-f3b6-49f1-a2cf-483707485554">

<img width=400 height=400 src="https://github.com/user-attachments/assets/d6842431-648b-4ad5-8eb9-4bf3760db47a">


```ts
function searchIn2DMatrix(arr: number[][], target: number){
    let row = 0;
    let col = arr[0].length-1

    while(row < arr.length && col >= 0){
        if(arr[row][col] === target){
            return [row,col]
        }else if (arr[row][col] > target){
            col--
        }else {
            row++
        }
    }
    return [-1,-1]
}  

export function CallsearchIn2DMatrix(){
    let arr = [[1,4,7,11,15],[2,5,8,12,19], [3,6,9,16,22], [10,13,14,17,24],[18,19,23,26,30]]
    console.log(searchIn2DMatrix(arr, 14))
}

```
