```ts
function assignCookies(greed: number[], value: number[]){
    const sortedGreed = greed.sort((a,b)=> a-b)
    const sortedValue = value.sort((a,b)=> a-b)

    let g = 0
    let v = 0
    while (v < value.length){
        if(sortedGreed[g] <= sortedValue[v]){
            g = g + 1
        }
        v = v + 1 
    }

    return g
}

export function Call_AssignCookies(){
    console.log(assignCookies([1,5,3,3,4], [4,2,1,2,1,3]))
}

```
