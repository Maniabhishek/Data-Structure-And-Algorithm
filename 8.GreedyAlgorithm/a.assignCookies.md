### Assigned Cookies
- two arrays are given with greed and a value array, greed represent the greed of a particular child, and that child can only be satisfied if it gets treat worth more than or equal to greed value , treat value is provided in value array

- Problem Statement: Given two arrays representing children’s green factor and cookie sizes, the goal is to maximise the number of content children.
- Each child i has a greed factor of g[i], which is the minimum size of a cookie that will make the child content. Each cookie j has a size of s[j]. If s[j] >= g[j], we can assign cookie j to child i, making the child content. Each child can only receive one cookie.



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
