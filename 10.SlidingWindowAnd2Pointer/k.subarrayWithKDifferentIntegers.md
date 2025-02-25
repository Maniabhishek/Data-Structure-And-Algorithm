### you are given an array of integers , with k where k denote number of distinct integers in subarray, so our task is to find the total number of subarrays which have k distinct integers

![image](https://github.com/user-attachments/assets/66a8208d-3aeb-4877-9f26-f49c7c908720)

![image](https://github.com/user-attachments/assets/fda5be4d-8159-4df3-a3d9-594db87656e0)


```ts
function subarrayWithKDifferentIntegers(arr: number[], k: number){
    let l = 0;
    let r = 0;

    let map = {}
    let count = 0
    while(r < arr.length){
        if(!map[arr[r]]){
            map[arr[r]] = 0
        }

        map[arr[r]]++

        while(Object.keys(map).length > k){
            map[arr[l]]--
            if(map[arr[l]] === 0){
                delete map[arr[l]]
            }
            l++
        }

        if(Object.keys(map).length <= k){
            count += r-l+1
        }
        r++
    }
    return count
}

export function CallsubarrayWithKDifferentIntegers(){
    let arr = [1,2,1,3,4]
    let k = 3
    console.log(subarrayWithKDifferentIntegers(arr, k) - subarrayWithKDifferentIntegers(arr, k-1))
}


```
