- brute force implmentation will be generate all the subarray and check the XOR of each subarrays
- below code TC : O(n^2) SC: O(number of subarrays)

```ts
function SubarrayWithXOR_K(arr: number[], k: number){
    const res = []
    for(let i = 0; i < arr.length; i++){
        let xor = 0;
        for(let j = i; j < arr.length; j++){
            xor = xor^arr[j]
            if(xor === k){
                res.push([...arr.slice(i, j+1)])
            }
        }
    }
    console.log(res)
}
```
- this below approach is on keep storing the xor result while we traverse
- let's say if there is subarray from 0th to 5th index, its xor is res
- then lets say we take a subarray from 2 to 5th and its xor is k
- and 0 to 1st element has xor of x , then x^k = res <=> x^k^k = res ^ k (doing xor with k on both side)
- we get k^k is 0 , then x = res^k
- hence we know we want subarray with xor k , then we need to look for subarray with xor x i.e., res^k
- we start traversing and find the current xor find the x in the existing subarray till we traversed if exist then increase the count , if not then store the res in map

```ts
function SubArrayWithXor_Optimal(arr: number[], k: number){
    let res = 0;
    let count = 0;
    let map = {0:1}
    for(let i = 0; i < arr.length; i++){
        res = res ^ arr[i]
        let remainingXor = res^k
        if(map[remainingXor] != null) {
            count += map[remainingXor]
        }
        if(!map[res]){
            map[res] = 0
        }
        map[res] += 1 
    }

    console.log(count)
}

export function Call_SubarrayWithXOR_K() {
    SubArrayWithXor_Optimal([4,2,2,6,4], 6)
}
```
