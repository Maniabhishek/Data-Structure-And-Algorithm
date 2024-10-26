```ts
function assignCookies(greed: number[], val: number[]){
    let l = 0;
    let r = 0;
    greed.sort((a,b)=> a-b)
    val.sort((a,b)=> a-b)

    while(l < greed.length && r < val.length){
        if(val[r]>=greed[l]){
            l++
            r++
        }else {
            r++
        }
    }
    return l
}

export function call_assignCookies(){
    console.log(assignCookies([1,5,3,3,4],[4,2,1,2,1,3]))
}
```
