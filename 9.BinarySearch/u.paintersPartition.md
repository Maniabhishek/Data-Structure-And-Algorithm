```ts
// this problem is similar to the allocate books problem
// here we need to split array in such a way sum of max subarray is minimum
// so range here will be again , max value till sum of all the elements

function PaintersPartition(board: number[], painters: number){

    if(painters > board.length) return -1

    let maxPage = board[0]
    for(let i = 1; i < board.length; i++){
        maxPage = Math.max(maxPage, board[i])
    }

    let totalPage = 0
    for(let i = 0; i < board.length; i++){
        totalPage += board[i]
    }

    for(let boardCount = maxPage; boardCount <= totalPage; boardCount++){
        let numberOfStudent = PaintersPartitionHelper(board, boardCount)
        if(numberOfStudent === painters){
            return boardCount
        }
    }
    return -1
}

function PaintersPartitionHelper(board: number[], boardCount: number){
    let currentPaintersCount = 1;
    let currentBoardCount = 0;

    for(let i = 0; i < board.length; i++){
        currentBoardCount = currentBoardCount + board[i]
        if(currentBoardCount > boardCount){
            currentPaintersCount += 1
            currentBoardCount = board[i]
        }
    }
    return currentPaintersCount
}

export function CallPaintersPartition(){
    let books = [12,34,67, 90]
    books = [25, 46, 28, 49, 24]

    let studentCount = 2
    studentCount = 4
    console.log(PaintersPartition(books,studentCount))
}
```
