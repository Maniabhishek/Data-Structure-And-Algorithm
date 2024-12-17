### Assigned Cookies
- two arrays are given with greed and a value array, greed represent the greed of a particular child, and that child can only be satisfied if it gets treat worth more than or equal to greed value , treat value is provided in value array

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
