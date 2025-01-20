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
