### Given an array with 1's and 0's , k where k denotes number of 0's you can convert or consider it as 1 , thus our task is to find the max consecutive 1's present in array
- for example [1,1,1,0,0,0,1,1,1,1,0] and k = 2 here in this case if 4 and 5 are considered as 0 then max conecutive 1's will be 6

<img width=400 height=400 src"https://github.com/user-attachments/assets/f79f92e8-534e-4fef-8717-44f84ebcf504">


<img width=400 height=400 src"https://github.com/user-attachments/assets/a9755bff-d468-4829-b841-14c6486147bb">


```ts
function maxConsecutiveOnes_naive(arr: number[], k: number){
    let maxLen = 0

    for(let i = 0; i < arr.length; i++){
        let zeroCount = 0
        for(let j = i; j < arr.length; j++){
            if(arr[j] === 0){
                zeroCount++
            }
            maxLen = Math.max(maxLen, j-i+1)
            if(zeroCount >= 2){
                break
            }
        }
    }
    return maxLen
}

export function CallmaxConsecutiveOnes_naive(){
    const arr = [1,1,1,0,0,0,1,1,1,1,0]
    let k = 2
    console.log(maxConsecutiveOnes_naive(arr, k))
}

// Time complexity of the below code will be O(n) + O(n)(becasue we are also iterating inside but at max inside will run n times ) so O(2n)
function maxConsecutiveOnes_2Pointer(arr: number[], k: number){
    let l = 0;
    let r = 0;

    let zc = 0;
    let maxLen = 0;

    while(r < arr.length){
        if(arr[r] === 0){
            zc++
        }

        // if(zc <= 2){
        //     maxLen = Math.max(maxLen, r-l+1)
        // }else {
        //     while(arr[l] !== 0){
        //         l++
        //     }
        //     l++
        //     zc--
        // }
        // r++
        // or

        while(zc > k ){
            if(arr[l] === 0) zc--
            l++
        }
        
        if(zc <= k){
            maxLen = Math.max(maxLen, r-l+1)
        }
        r++
    }
    return maxLen
}

export function Call_maxConsecutiveOnes_2Pointer(){
    const arr = [1,1,1,0,0,0,1,1,1,1,0]
    let k = 2
    console.log(maxConsecutiveOnes_2Pointer(arr, k))
}

function maxConsecutiveOnes_2Pointer2(arr: number[], k: number){
    let l = 0;
    let r = 0;

    let zc = 0;
    let maxLen = 0;

    while(r < arr.length){
        if(arr[r] === 0){
            zc++
        }

        if(zc > k ){
            if(arr[l] === 0) zc--
            l++
        }
        
        if(zc <= k){
            maxLen = Math.max(maxLen, r-l+1)
        }
        r++
    }
    return maxLen
}

export function Call_maxConsecutiveOnes_2Pointer2(){
    const arr = [1,1,1,0,0,0,1,1,1,1,0]
    let k = 2
    console.log(maxConsecutiveOnes_2Pointer2(arr, k))
}
```
