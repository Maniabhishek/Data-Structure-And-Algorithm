 <img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/688fb307-b7f4-416a-b7f2-c3b1e61b3c69" width=400 height=400>

```js
export function Subsequences(arr: number[]){
    let result: number[][] = []
    let seq: number[] = []
    getAllSubsequences(arr, 0, result, seq)
    console.log(result)
}

function getAllSubsequences(arr: number[], idx: number, result: number[][], seq: number[]){
    if(idx >= arr.length){
        result.push([...seq])
        return
    }

    seq.push(arr[idx])
    getAllSubsequences(arr, idx + 1, result, seq)
    seq.pop()
    getAllSubsequences(arr, idx + 1, result, seq)
}
```
> - the above logic is to take or not take the 1st function call (before this function call we are pushing element to array ) will pick and then after the base condtion matches it returns and after that it will pop so index remains at 2 (assuming array is of length 3) so element at index 2 will be last index and it will popped out and then 2nd function call with index + 1 i.e., 3 will match the base condition and thus array will pick 1st and 2nd element and not the 3rd one, and this keeps going on  
