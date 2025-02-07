- task is to find the single element in sorted array
- it is guaranteed to that there will be one element that exist only once and rest other exist twice
- since the array is sorted any element whose left and right are not equal then it means it appears only once
- just handle the edge case when i = 0 and i = arr.length-1

```ts
function findSingleElement(arr: number[]): number{
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            if(arr[0] !== arr[1]){
                return arr[0]
            }
        }else if(i === arr.length - 1){
            if(arr[i] !== arr[i-1]){
                return arr[i]
            }
        }else {
            if(arr[i] !== arr[i-1] && arr[i] !== arr[i+1]){
                return arr[i]
            }
        }
    }
}
// the above condition can easily be written as if((i === 0 || arr[i]!== arr[i-1]) && (i === n - 1 || arr[i]!== ar[i+1])) return arr[i]
export function callFindSingleElement(){
    const arr = [1,1,2,2,3,4,4,5,5,6,6]
    console.log(findSingleElement(arr))
}

```

- above code will run in O(n) , let's improve the TC by using binary search
- what we do in binary search is , we try to eliminate the one half every time
- let's observe what can we find here
- example : [1,1,2,2,3,3,4,5,5]
- 1,1 is at (even , odd) index
- 2,2 is at again (even, odd) index
- 3,3 is at again (even, odd) index
- 4 as we know is single element which is at even index
- after this the pattern changes 5,5 is at (odd, even)
- so if (even odd) then we can for sure say that single element is not on this part of array will alway lie on the right side so low = mid+1
- and if we are at (odd even) then single element has to be on the left side mid thus high = mid-1


```ts
//using binary search 
function findSingleElementUsingBinarySearch(arr: number[]){
    let low = 1;
    let high = arr.length-2

    // handle the edge case in order to make the code more readable and eleminate complex conditions
    if(arr[0] !== arr[1]) return arr[0]
    if(arr[arr.length-1] !== arr[arr.length - 2]) return arr[arr.length - 1]

    while(low <= high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid] !== arr[mid+1] && arr[mid] !== arr[mid-1]) return arr[mid]

        if((mid%2 === 0 && arr[mid] === arr[mid+1]) || ( mid%2=== 1 && arr[mid] === arr[mid - 1])){
            low = mid+1
        }else {
            high = mid - 1
        }
    }
}

export function CallfindSingleElementUsingBinarySearch(){
    const arr = [1,1,2,2,3,3,4,5,5]

    console.log(findSingleElementUsingBinarySearch(arr))
}

```
