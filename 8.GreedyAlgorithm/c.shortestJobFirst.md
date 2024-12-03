- shortest job first 
- scheduling policy that selects the waiting process with the smallest execution time to execute next

- [7,4,3,1,2]
- intuition is quiet simple take the first smallest process , its execution time will be 0
- 2nd process 2 which will start from 1th time, next is 3 which will start from 3rd , 
- next is 4 which will start from 6th 
- final process 7 will start from 10th as previous process will take 4 unit of time hence 6th + 4th 10th
- now sum all 0 + 1 + 3 + 6 + 10 = 20 avg will be 20/4 = 5

```ts

function shortestJobFirst(process: number[]){
    const sortedProcess = process.sort((a,b)=> a-b)

    let executionTime = 0
    let total = executionTime
    for(let i = 0; i < process.length; i++){
        total += executionTime
        executionTime += process[i]
    }

    return Math.floor(total / process.length)
}

export function CallShortestFirst(){
    console.log(shortestJobFirst([7,4,3,1,2]))
}

```
