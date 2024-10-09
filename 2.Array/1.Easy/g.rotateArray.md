```ts
// rotate array by k times to the left
// so store all the elements that needs to be rotated let's say [1,2,3,4] if k is 2 then sore 1,2 is seperate array
// once we have stored then we can start storing elements equal or after kth index from 0th index 
// now store temp array 
// TC: O(k) + O(N) + O(K) and SC: O(k)

function rotateArrayByK(arr: number[], k: number){
    let n = arr.length
    k = k%n
    let temp = new Array(k)

    let i = 0
    for(i = 0; i < k; i++){
        temp[i] = arr[i]
    }

    let j = 0;
    while(i < n){
        arr[j] = arr[i]
        j++
        i++
    }

    for(let i = 0; i < k; i++){
        arr[j] = temp[i]
        j++
    }
    console.log(arr)
}

export function Call_rotateArrayByK(){
    const arr = [1,2,3,4,5,6]
    rotateArrayByK(arr, 8)
}

// let's try and optimize it further by removing extra space complexity
// [1,2,3,4,5,6,7] k = 3
// lets reverse 0 to k-1th element and k to n element we get [3,2,1,7,6,5,4] 
// now again reverse the whole resultant array [4,5,6,7,1,2,3]

function reverseArray(arr: number[], start: number, end: number){
    while(start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++;
        end--;
    }
}

function rotateArrayByKOptimized(arr: number[], k: number){
    // reverse 0 to k-1th elemnt
    k = k % arr.length
    reverseArray(arr, 0, k-1)
    reverseArray(arr, k, arr.length-1)
    reverseArray(arr, 0, arr.length-1)
    console.log(arr)
}

export function Call_rotateArrayByKOptimized(){
    const arr = [1,2,3,4,5,6,7]
    rotateArrayByKOptimized(arr, 8)
}
```
