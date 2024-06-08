<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/530886ad-974d-432e-8d40-efd3a6ece67b" width=400 height=400 />
<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/b6acae28-d55c-48c9-ad84-32b2f94f3f17" width=400 height=400 />

```ts
function MaxSumNonAdjacent(arr: number[], index: number): number{
    if(index === 0) return arr[0]
    if(index < 0) return 0

    let pick = arr[index] + MaxSumNonAdjacent(arr, index - 2)
    let not_pick = MaxSumNonAdjacent(arr, index - 1)

    return Math.max(pick, not_pick)
}

export function CallMaxSumNonAdjacent(){
    const arr: number[] = [2,1,4,9]

    const res = MaxSumNonAdjacent(arr, 3)
    console.log(res)
}
```
