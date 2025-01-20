```ts
function nthRootOfInteger(num: number, root: number){
    let low = 1;
    let high = num;

    let ans = -1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        const resultant = findPower(mid, root)
        if(resultant === num){
            return mid
        }else if(resultant < num) {
            low = mid + 1
        }else {
            high = mid - 1
        }
    }
    return ans
}

function findPower(num: number, power: number): number{
    let ans = 1
    for(let i = 1; i <= power; i++){
        ans = ans*num
    }
    return ans
}

function findPower2(num: number, power: number){
    let ans = 1;

    while(power > 0){
        console.log(power)
        if(power % 2 === 1){
            ans = num * ans
            power = power - 1
        }else {
            num = num * num
            power = power/2
        }
    }
    return ans
}

export function callNthRootOfInteger(){
    console.log(nthRootOfInteger(25,2))
}

```
