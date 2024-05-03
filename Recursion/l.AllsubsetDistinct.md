> - find all the distinct subset from the given array

```ts
export function subsetDistinct(arr: number[], idx: number, res: number[][], ds: number[]){
    res.push([...ds])

    for(let i = idx; i < arr.length; i++){
        if(i > idx && arr[i - 1] === arr[i]) continue
        ds.push(arr[i])
        subsetDistinct(arr, idx + 1, res, ds)
        ds.pop()
    }
}
```
