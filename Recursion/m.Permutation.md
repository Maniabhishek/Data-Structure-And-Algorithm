- find all the permutation of a string or a number
- for eg., we can have an array [1,2,3] we can have total 6 permuation for this array

```ts
function permutation(arr: number[], ds: number[], res: number[][], isTaken: boolean[]){
    if(ds.length === arr.length){
        res.push([...ds])
        return
    }

    for(let i = 0; i < arr.length; i ++){
        if(!isTaken[i]){
            ds.push(arr[i])
            isTaken[i] = true
            permutation(arr, ds, res, isTaken)
            ds.pop()
            isTaken[i] = false
        }
    }
}
```
