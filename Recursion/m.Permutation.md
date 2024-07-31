- find all the permutation of a string or a number
- for eg., we can have an array [1,2,3] we can have total 6 permuation for this array
- all the permutation can start from each of the element , it can start from 1.. , 2.. 3.. now let's say if it starts from 1 then next element can 2 or 3 let's try all the possible way

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

<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/0cd987e5-6158-49cb-a715-4f51d553964d" width="400" height="400">


> - permutation without using extra space , we will use swapping technique in order to improve the complexity

```ts
export function SwapPermutation(arr: number[], idx: number, res: number[][]){
    if(idx >= arr.length){
        const ds: number[] = []
        for(let i = 0; i < arr.length; i++){
            ds.push(arr[i])
        }
        res.push([...ds])
        return
    }

    for(let i = idx; i < arr.length; i++){
        swap(arr, i, idx)
        SwapPermutation(arr, idx + 1, res)
        swap(arr, i, idx)
    }
}

function swap(arr: number[], i: number, j: number){
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
```
