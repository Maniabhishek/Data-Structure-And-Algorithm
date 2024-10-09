```ts
// brute force 
// [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
// after rotating we will get [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16, 12,8,4]]
// now let's see , (0,0) element is at (0,3) , (0,1) -> (1,3), (0,2)-> (2,3)... so on 
// thus on every i , j change, in update array we see , row index is j, col is n-1-i

// below has TC: O(n*m) and space complexity O(n*m)
function rotateMatrixBy90_Brute(arr: number[][]){
    const newArr = new Array(arr.length).fill(null).map(()=> new Array(arr[0].length))
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[0].length; j++){
            newArr[j][arr[0].length-1-i] = arr[i][j]
        }
    }
    console.log(newArr)
}

// how can we improve the above code , well, traversing throught the array is going to take O(n*m) , but can we reduce the space complexity
// yes we can do it 
// using transpose method
// in transpose method we convert rows to column and column to rows, once done then simply reverse all the rows
// example [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
// after transpose [[1,5,9,13], [2,6,10,14], [3,7,11,15],[4,8,12,16]]
// how to get this tranpose array 
// let's analyse , at (0,0) element is from (0,0) in orginal array , (0,1)-> (1,0), (0,2)-> (2,0), (0,3)->(3,0)
function rotateMatrixBy90_Optimal(arr: number[][]){
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i+1; j < arr[0].length; j++) {
            let temp =  arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
        }
    }

    for(let i =0 ; i < arr.length; i++){
        reverse(arr[i])
    }

    console.log(arr)
}

function reverse(arr: number[]){
    let left = 0
    let right = arr.length - 1
    while(left < right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
}

export function Call_rotateMatrixBy90_Brute(){
    const arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

    rotateMatrixBy90_Optimal(arr)
}


```
