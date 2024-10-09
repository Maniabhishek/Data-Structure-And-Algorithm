```ts
function findSecondLargest(arr: number[]){
    let largest = -Infinity;
    let slargest = -Infinity
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            slargest = largest
            largest = arr[i]
        }else if(arr[i] > slargest && arr[i] < largest) {
            slargest = arr[i]
        }
    }
    console.log('largest: ', largest)
    console.log('slargest: ', slargest)
}

function findSecondSmallest(arr: number[]){
    let smallest = Infinity
    let ssmallest = Infinity

    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] < smallest) {
            ssmallest = smallest
            smallest = arr[i]
        }else if(arr[i] < ssmallest && arr[i] > smallest){
            ssmallest = arr[i]
        }
    }

    console.log(smallest)
    console.log(ssmallest)
}

export function Call_findSecondLargest(){
    findSecondLargest([10,2,5,3,6,9])
    findSecondSmallest([10,2,5,3,6,9])
}

// check if sorted
function checkIfSorted(arr: number[]){
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i-1]){
            return false
        }
    }
    return true
}

export function Call_checkIfSorted(){
    console.log(checkIfSorted([9,2,3,4,5,4]))
}

//remove duplicates from in-place sorted array
// to solve it the naive way would be using the set and keep adding in the set once all unique element is placed in set then we can traverse through set and keep storing element in array and can return the next index value as index is starting from 0 so next value will be the length
// better solution will by using two pointer 
function removeDuplicates(arr: number[]){

    // initialize first pointer to 0
    let i = 0;

    // traverse thorugh array starting from 1
    for(let j = 1; j < arr.length; j++){
        // if element at 2nd pointer is not equal to element at 1st pointer then we have found new unique element and store it at next index of 1st pointer
        if(arr[j] !== arr[i]) {
            i++
            arr[i] = arr[j]
        }
    }
    console.log(arr)
    return i+1
}

export function Call_removeDuplicates(){
    console.log(removeDuplicates([1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5]))
}
```
