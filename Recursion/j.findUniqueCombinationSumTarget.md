> - Given a collection of candidate numbers and a target number, find all unique combinations in candidates where the candidate numbers sum to target
> - Each number in the candidates may only be used once in the combination.

<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/968c4b8e-cdc4-47a6-b9a9-abe22fe567ea" height=400 width=400>


```ts
export function findUniqueCombinationSumTarget(arr: number[], target: number, index: number, ds: number[], result: number[][]){
    if(target === 0){
        result.push([...ds])
        return
    }

    for(let i = index; i < arr.length; i++){
        if(i > index && arr[i] === arr[i - 1]) continue;
        if(arr[i] > target) break;
        ds.push(arr[i])
        findUniqueCombinationSumTarget(arr, target - arr[i], i + 1, ds, result)
        ds.pop()
    }
}
```
