```ts
// [2,4,6,8,8,8,11,13]
// we can solve it using the lower and upper bound 
// givenNum = 8 now our task is to find the first and last occurrence of given number, which in this case is [3,5]
// what is the lower bound of 8- it's 3, and uppper bound will be 6 and ans here will be 6-1 5
// but while finding lower bound in this case we can have one issue , when givenNumber is not present in the array 
// let's say we want to find first and last occurrence of 9 then lower bound will be 6 which is wrong , in this case we can check arr[lb] === givenNum or not 
// if not then return [-1,-1] as there are no occurrence of given number

function lowerBound(arr: number[], givenNum: number){
    let low = 0;
    let high = arr.length-1

    let ans = arr.length
    while(low <= high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid] >= givenNum){
            high = mid - 1
            ans = mid
        }else {
            low = mid+1
        }
    }
    return ans
}

function upperBound(arr: number[], givenNum: number){
    let low = 0;
    let high = arr.length-1

    let ans = arr.length
    while(low <= high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid] > givenNum){
            high = mid - 1
            ans = mid
        }else {
            low = mid+1
        }
    }
    return ans
}

function firstAndLastOccurrence(arr: number[], givenNum: number){
    const lb = lowerBound(arr, givenNum)
    if(lb === arr.length || arr[lb] !== givenNum) return [-1,-1]

    return [lb, upperBound(arr, givenNum) - 1]
}

export function CallfirstAndLastOccurrence(){
    const arr = [2,4,6,8,8,8,11,13]
    console.log(firstAndLastOccurrence(arr,14))
}

// the above code is using the lower bound and upper bound technique
// we can also solve it using simple binary search approach 
// let's say we want to find first and last occurrence of 8 in arr = [2,4,6,8,8,8,11,13]
// if we keep searching for 8 using binary, first mid value is 3 and arr[mid] is 8 hence we found one matching value 
// since we need the left most or smallest index that matches given number so we will move high to one left of mid
// similary move left to mid + 1 in case of finding last occurrence 

function firstOccurrence(arr: number[], givenNum: number){
    let low = 0
    let high = arr.length-1

    let ans = -1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid] === givenNum){
            ans = mid
            high = mid-1
        }else if(arr[mid] > givenNum){
            high = mid-1
        }else {
            low = mid+1
        }
    }

    return ans
}


function lastOccurrence(arr: number[], givenNum: number){
    let low = 0
    let high = arr.length-1

    let ans = -1
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid] === givenNum){
            ans = mid
            low = mid+1
        }else if(arr[mid] > givenNum){
            high = mid-1
        }else {
            low = mid+1
        }
    }

    return ans
}

export function CallfirstAndLastOccurrenceUsingBinarySearch(){
    const arr = [2,4,6,8,8,8,11,13]
    const f = firstOccurrence(arr, 8)
    const l = lastOccurrence(arr, 8)
    console.log([f,l])
}

```
