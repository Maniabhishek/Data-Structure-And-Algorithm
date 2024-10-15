- the problem statement is similar to the last problem of countInversion, 
- we will be given array [40,25,19,12,9,6,2] , we need to find all the pairs wehere right element is greater than twice of the element
- e.g.,5th element is 6 , on the right we have 2 on 6th index , where 6 > 2*2 hence similary , (9,2) is one of the pair, 9 > 2*2 (9,6) is not the pair as 9 is not greter the 2*6
- so the naive way to solve this problem is using the brute force technique
- iterate through the array and compare each element

```ts
function reversePairs(arr: number[]){
    let count = 0
    let res = []
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j ++){
            if(arr[i] > arr[j]*2){
                count +=1
                res.push([arr[i], arr[j]])
            }
        }
    }
    console.log(res)
    console.log(count)
}
```
- as above is the solution which has time complexity of O(n^2)
- let's take two sorted array [6,13,25,35,40] [1,2,3,5,8,9,14,20,23]
- so what we did in countInversion was if 6 > 1 then all the element after that will be greater than 1 thus simply we add count of all element after the current element
- but here in let's if we compare 6 with 3 , 6 > 2*3 false but elements after 13 are greater so we go on to missing these elements count 
- so we need to find a different way , let's say we simply compare elements after elements in first array 
- 6 ..  6 > 2*1 , 6 > 2*2 6 > 2*3 false then stop
- 13 .. 13 > 2*1, 13> 2*2, 13> 2*3, 13> 2*5, 13>2*8 false 
- 25..  25> 2*1, 25> 2*2, 25 > 2*3, 25> 2*5, 25>2*8, 25>2*9, 25>2*14 false
- 35 .. 35> 2*1, 35 > 2*2, 35>2*3 , 35 > 2*5 ,35>2*8, 35>2*9,35>2*14 35>2*20 false
- we can observe a pattern elements with which 6 is greater than twice is common for next elements
- thus we can optimize the code , we can compare 6 is greater than 2*1 and 2*2 but not 2*3 so stop there , count is 2
- next element is 13 so we dont need to compare again with 1 and 2 it will obviously be greater than those element 
- 13 > 2 * 3 , 13 > 2*5, 13 > 2*8 false so stop there and count will be 4 as 2nd pointer is on 8 number of elments before are 4 so add count of 4
```ts
function reversePairsUsingMergeSort(arr: number[]){

    console.log(mergeSort(arr , 0, arr.length-1))
}

function mergeSort(arr: number[], low: number, high: number): number{
    let count = 0
    if(low >= high) return count
    let mid = Math.floor((low + high)/2)

    count += mergeSort(arr, low, mid)
    count += mergeSort(arr, mid+1, high)
    count += merge(arr, low, mid, high)
    return count
}

function merge(arr: number[], low: number, mid: number, high: number){
    let llength = mid-low+1
    let rlength = high-mid

    let larray = new Array(llength)
    let rarray = new Array(rlength)

    let count = 0
    for(let i= 0; i < llength; i++){
        larray[i] = arr[low+i]
    }
    for(let i= 0; i < rlength; i++){
        rarray[i] = arr[mid + 1 + i]
    }

    let left = 0;
    let right = 0;

    // we can sepearate this logic if we want logic is below
    while(left < llength && right < rlength) {
        if(larray[left] > 2 * rarray[right]) {
            right++
        }else {
            left++
            count += right
        }
    }
    while(left < llength){
        count += right
        left++
    }

    left = 0;
    right = 0;
    let k = low
    while(left < llength && right < rlength) {
        if(larray[left] < rarray[right]){
            arr[k] = larray[left]
            left++
        }else {
            arr[k] = rarray[right]
            right++
        }
        k++
    }

    while(left < llength){
        arr[k] = larray[left]
        left++
        k++
    }

    while(right < rlength){
        arr[k] = rarray[right]
        right++
        k++
    }

    return count
}

function countPairs(arr: number[], low: number, mid: number, high: number){
    let right = mid+1
    let count = 0
    for(let i = low; i <= high; i++){
        while(right <= high && arr[i] > 2*arr[right]){
            right++
        }
        count += right-(mid+1)
    }
    return count
}

export function call_reversePairs(){
    const arr = [40,25,19,12,9,6,2]
    reversePairsUsingMergeSort(arr)
    console.log(arr)
}

```
