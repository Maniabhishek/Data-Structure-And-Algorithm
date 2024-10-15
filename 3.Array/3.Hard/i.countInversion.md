- you will be provided an array of integers
- eg., [5,3,2,4,1] , now our task is to find all the pairs of element where left element is greater than right , i.e., a[i] > a[j]
- here we can see the pairs are (5,3), (5,2), (5,4) , (5,1) , (3,2) , (3,1), (2,1), (4,1) total 8 pairs , this is the result what we need to return

- the brute for technique would be traversing the array and find all the smaller than selected elements
- the below code has TC: O(n^2) SC: O(1)

```ts
function CountInversion(arr: number[]){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        const selectedElement = arr[i]
        for(let j = i+1; j < arr.length; j++){
            if( selectedElement > arr[j]){
                count++
            }
        }
    }
    console.log(count)
}

function countInversion(arr: number[]){
    let count = mergeSortHelper(arr, 0, arr.length-1)
    console.log(count, arr)
}
```

- this below problem solves using merge sort helper 
- since merge sort uses the technique of divide and conquer 
- so we can take advantage of it 
- every time we merge the array we compare elements and if left array has greater element than right , since we know element on both the side are sorted 
- so let's we have [2,3,5] [1,4] then 2 > 1 this element after 2 will also be greater than 1 hence take count as 3 
- now move forward now we will compare 2 with 4, 2 is smaller hence now increment move left pointer forward , goes to 3, 3 < 1 thus move left pointer forward 
- 5 > 4 yes then after 5 we dont have any element thus increase count by 1 
- count formula will be count += leftArray.length - i

```ts
function mergeSortHelper(arr: number[], low: number, high: number) {
    let count = 0;
    if(low >= high) return count
    let mid = Math.floor((low+high)/2)
    count += mergeSortHelper(arr, low, mid)
    count += mergeSortHelper(arr, mid+1, high)

    count += merge(arr, low, mid, high)
    return count
}

function merge(arr: number[],low: number, mid: number, high: number){
    let llength = mid-low+1
    console.log(arr.slice(low, mid+1), arr.slice(mid+1, high+1))
    let rlength = high-mid
    console.log(llength, rlength)
    let larray = new Array(llength)
    let rarray = new Array(rlength)

    for(let i = 0; i < llength; i++) {
        larray[i] = arr[low + i]
    }

    for(let j = 0; j < rlength; j++ ) {
        rarray[j] = arr[mid+1+j]
    }


    let k = low
    let i = 0
    let j = 0
    let count = 0
    while(i < llength && j < rlength) {
        if(larray[i] > rarray[j]) {
            arr[k] = rarray[j]
            j++
            count += (larray.length - i)
        }else {
            arr[k] = larray[i]
            i++
        }
        k++
    }

    while(i < llength) {
        arr[k] = larray[i]
        i++
        k++
    }

    while(j < rlength) {
        arr[k] = rarray[j]
        j++
        k++
    }
    console.log("------------------",count)
    
    return count
}

export function Call_CountInversion(){
    const arr = [5,3,2,4,1]
    countInversion(arr)
}
```
