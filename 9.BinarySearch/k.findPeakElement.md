```ts
// we need to find the peak element where arr[i] > arr[i-1] && arr[i]> arr[i+1]
// brute force approach is to check linearly for every element
function findPeakElement(arr: number[]){
    for(let i = 0; i < arr.length; i++){
        if(i===0 && arr[0]>arr[1]) {
            return i
        }else if(i === arr.length - 1 && arr[arr.length-1]>arr[arr.length-2]){
            return i
        }else if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            return i
        }
    }
}

export function callFindPeakElement(){
    const arr = [1,2,3,4,5,6]
    console.log(findPeakElement2(arr))
}

// we can improve the above condition
function findPeakElement2(arr: number[]){
    for(let i=0; i < arr.length; i++){
        if((i === 0 || arr[i] > arr[i-1] ) && (i === arr.length-1 || arr[i] > arr[i+1])){
            return i
        }
    }
}
```

![image](https://github.com/user-attachments/assets/ab25370e-1991-433b-810c-eca9b1637b84)

![image](https://github.com/user-attachments/assets/230f7a68-7c70-41a1-81bf-06d7b9893ea3)

```ts
// the above code has time complexity of O(n)
// since we need to search and some part of the array is sorted so we can think of binary search in order to reduce the time complexity
function findPeakElementUsingBinarySearch(arr: number[]){
    let low = 1
    let high = arr.length-2
    
    // handle edge condition
    if(arr[0]>arr[1]) {
        return 0
    }

    if(arr[arr.length - 1] > arr[arr.length-2]){
        return arr.length - 1
    }

    while(low <= high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]){
            return mid
        }else if(arr[mid] > arr[mid-1]){ // check which side of peak we are on
            low = mid+1
        }else {
            high = mid - 1
        }
    }
    return -1
}

export function callfindPeakElementUsingBinarySearch(){
    let arr = [1,2,3,1,5,4]
    console.log(findPeakElementUsingBinarySearch(arr))
}



```
