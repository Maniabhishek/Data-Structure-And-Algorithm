> - find all the distinct subset from the given array

<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/ffa064e1-7eaa-4285-9f23-72aef5d29261" width="500" height="500">
<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/e663883c-569f-4594-8059-1d76950441b2" width="500" height="500">

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
