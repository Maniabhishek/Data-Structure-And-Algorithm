```ts
// TC: O(n^2)

function longestConsecutiveSequence_brute(arr: number[]){
    let max_count = -Infinity

    for(let el of arr){
        let currentCount = 0
        while(LinearSearch(arr, el)){
            currentCount += 1
            el += 1
        }
        max_count = Math.max(currentCount, max_count)
    }
    return max_count
}

function LinearSearch(arr: number[], el: number): boolean{
    for(const ele of arr){
        if(el === ele){
            return true
        }
    }
    return false
}

// better approach 
// we will sort the array 
// once array is sorted then we can iterate through the array and keep checking last smaller value is equal current num -1 then we increase the count and update last smaller 
// if current element is not equal to the last smaller then update the count to 1 and last smaller as current num

function longestConsecutiveSequence_better(arr: number[]){
    arr.sort((a, b)=> a-b)

    let last_smaller = -Infinity
    let max = 0
    let currentCount = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i]-1 === last_smaller){
            currentCount++;
            last_smaller = arr[i]
        }else if(arr[i] !== last_smaller){
            last_smaller = arr[i]
            currentCount = 1
        }
        max = Math.max(currentCount, max)
    }
    return max
}

// we will simply put all the elements in a set 
// and then we will iterate over set , if a value smaller the curent elment is present then continue as this element will not be the starting point if it is part of longest consecutive subsequence
// if the val-1 is not present in the set then this could be the starting point now keep checking all the element greater than 1 until element is not found
function longestConsecutiveSequence_optimal(arr: number[]){
    const newSet = new Set<number>()

    for(const el of arr){
        newSet.add(el)
    }

    let max_count = 0

    for(const val of newSet){
        let prevValue = val-1
        if(newSet.has(prevValue)){
            continue
        }else {
            let currentCount = 1
            let nextVal = val+1
            while(newSet.has(nextVal)){
                currentCount +=1
                nextVal += 1
            }
            max_count = Math.max(currentCount, max_count)
        }
    }
    return max_count
}

export function Call_longestConsecutiveSequence_brute(){
    const arr = [3,4,5,2,1,11,12,13,14,15,16,17,6]
    console.log(longestConsecutiveSequence_optimal(arr))
}
```
