- two sorted array will be given , our task is to sort the all the elements store in the same array , but without using extra space
- simplest approach is using two pointer on both the side and take one extra array, and comparing both side , but this approach will use an extra memory space
- another inutuition is without using extra memory space is by using two pointers again but this time on the left array we will start from biggest element that is from the end 
- and for right array we will start from the smallest value that is from the 0th element 
- this is to ensure that smallest value remain on the left side and largest values remains on the right side
- TC: O(minimum of length of one of the array) + O(nlog(n)) + O(mlog(m)
- SC: O(1)
```ts
function merge2Sorted_Optimal(arr1: number[], arr2: number[]) {
    let left = arr1.length-1
    let right = 0

    while(left >=0 && right < arr2.length) {
        if(arr1[left] > arr2[right]){
            let temp = arr1[left]
            arr1[left] = arr2[right]
            arr2[right] = temp
            left--
            right++
        }else {
            break
        }
    }

    arr1.sort((a,b)=> a-b)
    arr2.sort((a,b)=> a-b)

    console.log(arr1, arr2)
}
```
- below solution is using shell sort which uses the technique of gap
- we will take length of both the arrays and find the gap by dividing by 2 until gap is 1
- place first pointer on 0 on left array ,and 2nd pointer will be at x gap distance
- then keep swapping left and right if left is greater than right element
```ts
export function merge2SortedArray_Optimal2(arr1: number[], arr2: number[]){
    let n = arr1.length
    let m = arr2.length
    let gap = n+m
    let totalLen = n + m
    while(gap > 1){
        gap = Math.ceil(gap/2)
        console.log(gap)
        let left = 0
        let right = 0 + gap
        while(right < totalLen){
            // there will be three scenarios left and right can be either side left on left array and right on right array
            // 2nd will be left start on the right side
            // 3rd will be both the pointer is on left array
            if(left < n && right >= n){
                swapIfGreater(arr1, arr2, left, right - n)
            }else if(left >= n){
                swapIfGreater(arr2,arr2, left-n, right - n)
            }else {
                swapIfGreater(arr1, arr1, left, right)
            }
            left++
            right++
        }
        console.log(arr1,arr2)
    }
    console.log(arr1, arr2)
}

function swapIfGreater(arr1: number[], arr2: number[], left: number, right: number){
    if(arr1[left] > arr2[right]){
        let temp = arr1[left]
        arr1[left] = arr2[right]
        arr2[right] = temp
    }
}

export function Call_merge2Sorted(){
    let arr1 = [1,3,5,7]
    let arr2 = [0,2,4,6,8,9]
    merge2SortedArray_Optimal2(arr1, arr2)
}

```
