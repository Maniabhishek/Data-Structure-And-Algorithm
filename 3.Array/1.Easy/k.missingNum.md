```ts
// we need to find the missing number from array 
// eg., [1,2,4,5,6] result is 3
// let solve it brute force way

function missing(arr: number[], n: number){
    for(let i = 1; i <=n ; i++){
        let flag = 0
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === i) {
                flag = 1
            }
        }
        if(flag === 0) {
            return i
        }
    }
    return -1
}

function missingBetter(arr: number[], n: number){
    let nums = new Array(n+1)
    for(let i = 0; i < arr.length; i++){
        nums[arr[i]] = 1
    }

    let missingNum = -1
    for(let i = 1; i < nums.length; i++){
        if(nums[i] == null){
            missingNum = i
        }
    }
    return missingNum
}

// optimal solution
function missingNumOptimum(arr: number[], n: number){
    // find total sum up to n
    let sum = (n*(n+1))/2

    let arrSum = 0
    for(let i = 0; i < arr.length; i++){
        arrSum += arr[i]
    }
    return sum - arrSum
}

// lets solve it using XOR 
function missingNumUsingXOR(arr: number[], n: number){
    let xor1 = 0
    let xor2 = 0
    for(let i = 0; i < arr.length; i++){
        xor1 = xor1^arr[i]
        xor2 = xor2^(i+1)

    }
    xor2 = xor2^n
    return xor1^xor2
}

export function call_missingNum(){
    console.log(missingNumUsingXOR([1,2,3,4,6], 6))

}
```
