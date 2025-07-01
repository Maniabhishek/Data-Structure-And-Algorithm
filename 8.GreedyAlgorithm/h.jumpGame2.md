- task is to find the minimum number of jump required to reach the last index
- TC: O(N^N) exponential
- SC : O(N) auxilliary space


```ts
function JumpGame2(arr: number[], idx: number, jump: number){
    if(idx >= (arr.length - 1)) return jump

    let min  = Infinity

    for(let i = 1; i <= arr[idx]; i++){
        min = Math.min(min, JumpGame2(arr, idx+i, jump+1))
    }

    return min
}

export function CallJumpGame2(){
    const arr = [2,3,1,4,1,1,1,2]
    console.log(JumpGame2(arr, 0, 0))
}
```
```ts
function JumpGame2RangeApproach(arr: number[]){
    let l = 0;
    let r = 0;
    let jump = 0
    while(r < arr.length-1){
        let farthest = 0
        for(let i = l; i <= r; i++){
            farthest = Math.max(farthest, i + arr[i])
        }
        r = farthest
        l = r+1
        jump += 1
    }

    return jump
}


export function CallJumpGame2RangeApproach(){
    const arr = [2,3,1,4,1,1,1,2]
    console.log(JumpGame2RangeApproach(arr))
}

```
