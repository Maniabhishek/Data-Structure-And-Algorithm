- You are given a strictly increasing array 'vec' and a positive integer 'k'.
- Find the 'kth' positive integer missing from 'vec'.
- Example :
- Input: vec = [2,4,5,7] , k = 3 Output: 6
- Explanation : 
- In the given example, first missing positive integer is 1 second missing positive integer is 3, and the third missing positive integer is 6. Hence the answer is 6.

```ts


function findKthMissingElement(arr: number[], k: number){
    let maxValue = arr[0]
    for(let i = 1; i < arr.length; i++){
        maxValue = Math.max(maxValue, arr[i])
    }

    let missingCount = 0
    for(let i = 1; i < maxValue; i++){
        if(checkIfFound(arr, i) < 0) {
            missingCount++
            if(missingCount === k){
                return i
            }
        }
    }
}

function checkIfFound(arr: number[], search: number){
    let low = 0;
    let high = arr.length - 1
    while(low <= high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid] === search){
            return mid
        }else if(arr[mid] > search){
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
    return -1
}

export function CallfindKthMissingElement(){
    let arr = [2,3,5,7]
    arr = [2,3,4,7,11]
    let kthMissingElement = 3
    kthMissingElement = 5
    console.log(findKthMissingElement(arr,kthMissingElement ))
}

```

- the above solution has time complexity O(maxValue*log(n))
- instead we can simply use the brute force to solve this with o(n) time complexity
- let's see an example [5,6,7,9,11] k=4
- so 4th missing element, if you notice 4 is less than 1st element , 1,2,3,4, then 4th value is obviously 4 , if k = 3 , then 3rd missing value is 3
- what about the 5th missing element, 5 is not less than 5 then we move to next increase k by 1  = 6
- 6 again not greater then k then k = 7
- 7 again not greater than k then k = 8
- 9 greater than 8 and 5th missing element is 8 k value is 8 return this value

```ts
function findKthMissingElementBruteForce(arr: number[], k: number){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] <= k){
            k++
        }else {
            break
        }
    }
    return k
}

export function callfindKthMissingElementBruteForce(){
    let arr = [2,3,5,7]
    arr = [2,3,4,7,11]
    let kthMissingElement = 3
    kthMissingElement = 5
    console.log(findKthMissingElementBruteForce(arr,kthMissingElement ))
}


```


- since the array is sorted we can still improve the code and try to get the time complexity as O(log(n))
- [2,3,4,7,11] , k=5
- 1,2,3,4,5,6,7,8,9,10,11, so 5th missing element is 9
- if there was no missing element in array then it would have been [1,2,3,4,5]
- since there are some missing element in array thus we have array as [2,3,4,7,11]
- so at index 0th value is 2 but if no value was not missing, 1 would have been there thus 2 - 1 = 1 missing value
- at index 1 value is 3 actual value if no value was missing 2 thus 3-2 =1 missing
- similarly at index 3 with value 7 , actual value at index 3 should have been 4 , so missing value is arr[idx] - (idx+1) = 7 - 4 = 3
- [2,3,4,7,11]
- [1,1,1,3,6] number of missing element at each index which is been calculated by arr[idx] - (idx+1)
- low = 0, high = arr.length-1 = 4
- mid = 2
- missing value at mid  arr[mid] - (mid+1) = 4 - (2+1) = 1
- k = 5 5 > 1 thus value will be on the right side 
- so low = mid + 1
- had it been smaller do high = mid-1
- so at one point when loop breaks high become smaller than low
- in this case high = 3 , low = 4
- high is at 3 , so there are 3 numbers missing at index 3, which element do we have to find 5th right 
- so , 5-3 = 2 two after the current high element will be the missing number arr[high] + (k-missing)
- hence arr[high] + k-missing could be the formula but , still arr[could also be negative in some scenario
- so we need to come up with better formula
- arr[high] + k - misssing ... what is missing it is nothing but missing number of value at that index (which is high index)
- thus missing = arr[high] - (high+1)
- hence we can write -> arr[high] + k - misssing = arr[high] + k - (arr[high] - (high+1)) <=> k + high + 1 <=> high + k + 1 
- or high + 1 is -> low we can also write low + k

```ts
function kthMissingElementUsingBS(arr: number[], k: number){
    let low = 0;
    let high = arr.length - 1

    while(low <= high){
        let mid = Math.floor((low+high)/2)

        // number of missing element at mid
        let missing = arr[mid] - (mid + 1)
        if(missing < k){
            low = mid + 1
        }else {
            high = mid - 1
        }
    }
    return high + k + 1
}

export function CallkthMissingElementUsingBS(){
    let arr = [2,3,5,7]
    arr = [2,3,4,7,11]
    let kthMissingElement = 3
    kthMissingElement = 5
    console.log(kthMissingElementUsingBS(arr, kthMissingElement))
}
```
