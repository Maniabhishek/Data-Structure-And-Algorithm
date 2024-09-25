```ts
// the problem statement is to rearrange the array elements in such a way where positive and negative elments are stored alternatively
// fist poitive then negative then positive then negative and so on....
// the brute force way is to take two array of n/2 and store +ve and -ve elements 
// now that we know positive elements will come at even position and -ve elements will be at odd positions
// so now traverse half of time and keep placing +ve and -ve values at even and odd positions
// the above approach will have O(2N) TC and SPC: O(N)
// so to improve this solution 
// we know positive will go to even and -ve will go to odd
// so just iterate through the array , if given element is positive or negative place it at it first positive or negative indexes


function rearrangeArrayElements(arr: number[]){
    let oddIdx = 1
    let eventIdx = 0
    let newArr = new Array(arr.length)
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            newArr[oddIdx] = arr[i] 
            oddIdx += 2
        } else {
            newArr[eventIdx] = arr[i]
            eventIdx += 2
        }
    }
    console.log(newArr)
}

export function Call_rearrangeArrayElements(){
    rearrangeArrayElements([1,2,3,-1,-2,-3])
}
```
