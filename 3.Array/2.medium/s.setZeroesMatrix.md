```ts
// you are given an n*m matrix which contains 0's at some indexes , wherever 0 is found make that entire rows and columns as zero

// brute force , the approach is to traverse through the matrix and the moment we find a zero , make that row and coumn as -1 
// once we have completed the iteration we can traverse thorugh it again and will make all -1 as 0's
// this approach has TC: O(n*m)*(n+m) + n*m
function setZeroes_Brute(arr: number[][]){
    let n = arr.length
    let m = arr[0].length
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(arr[i][j] === 0){
                markRows(i, arr)
                markCols(j, arr)
            }
        }
    }

    // set all -1 as 0's
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(arr[i][j] === -1) arr[i][j] = 0
        }
    }
}

function markRows(row: number, arr: number[][]){
    let m = arr[0].length
    for(let i = 0; i < m; i++){
        if(arr[row][i] !== 0){
            arr[row][i] = -1
        }
    }
}

function markCols(col: number, arr: number[][]){
    let n = arr.length
    for(let i = 0; i < n; i++){
        if(arr[i][col] !== 0){
            arr[i][col] = -1
        }
    }
}

// better approach we will take a column array and row array , now traverse through the matrix whenever 0 is encountered we will mark that row array and column array as 0
// now again traverse through the array, if either row or col has zero mark it as 0

function setZeroes_Better(arr: number[][]){
    let n = arr.length
    let m = arr[0].length
    const rows: number[] = new Array(n)
    const cols: number[] = new Array(m)

    for(let i = 0; i < n ; i++){
        for(let j = 0; j < m ; j++){
            if(arr[i][j] === 0){
                rows[i] = 0
                cols[j] = 0
            }
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(rows[i]=== 0 || cols[j] === 0){
                arr[i][j] = 0
            }
        }
    }
}

export function Call_setZeros_Brute(){
    const arr = [[1,1,0,1,1],[1,1,1,0,1], [1,1,1,1,1],[0,1,1,1,1]]
    setZeroes_Better(arr)
    console.log(arr)
}
```

### We can still optimize this as it is taking extra space
