- median of two sorted array
- naive approach
- arr1 = [2,3,4], arr2 = [1,3] after we merge these two array it becomes [1,2,3,3,4]
- arr1 = [1,3,4,7,10,12], arr2 = [2,3,6,15]

```ts
function findMedian(arr1: number[], arr2: number[]){
    const arr = new Array(arr1.length + arr2.length)

    let i = 0, j= 0;
    let k = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            arr[k] = arr1[i]
            i++
        }else {
            arr[k] = arr2[j]
            j++
        }
        k++
    }
    let el1Idx = Math.floor(arr.length/2)
    if(arr.length % 2 === 0){
        let el1 = arr[el1Idx]
        let el2 = arr[el1Idx- 1]
        return (el1+el2)/2
    }
    return arr[el1Idx]
}

export function CallfindMedian(){
    let arr1 = [2,3,4]
    let arr2 = [1,3]

    arr1 = [1,3,4,7,10,12]
    arr2 = [2,3,6,15]

    console.log(findMedian(arr1, arr2))
}
```

- now the above code has time complexity of O(N) and TC: O(N)
- [1,3,4,7,10,12] [2,3,6,15] in this example median is 4 and 6 (4+6/2 = 5) as it is even number 
- and in [2,3,4] [1,3] median is 3 as it is odd 
- in both the situtaion we only need two elements or one 
- if we combine the sorted array then we only need arr.length/2 and arr.length/2-1 index element
- so if we are able to figure out the element at n/2 and n/2-1 element , in case of it will be n/2 element is what we need 
- well this is simple to figure out by traversing in both the arrays


```ts
function findMedianSpaceOptimized(arr1: number[], arr2: number[]){
    let indexCount = -1

    let el1 = -1;
    let el2 = -1

    let el2Idx = Math.floor((arr1.length + arr2.length)/2)
    let el1Idx = el2Idx - 1

    let i = 0;
    let j = 0
    while(i < arr1.length && j < arr2.length){
        indexCount++

        let currentElement: number
        if(arr1[i] < arr2[j]){
            currentElement = arr1[i]
            i++
        }else {
            currentElement = arr2[j]
            j++
        }

        if(indexCount === el1Idx){
            el1 = currentElement
        }
        if(indexCount === el2Idx){
            el2 = currentElement
        }
    }

    if((arr1.length + arr2.length)%2 === 0){
        return (el1 + el2)/2
    }
    return el2
}

export function CallfindMedianSpaceOptimized(){
    let arr1 = [2,3,4]
    let arr2 = [1,3]

    arr1 = [1,3,4,7,10,12]
    arr2 = [2,3,6,15]

    console.log(findMedianSpaceOptimized(arr1, arr2))
}
```

<img width=400 height=400 src="https://github.com/user-attachments/assets/27b331bb-ea0b-4647-92b3-684c762cb909">
<img width=400 height=400 src="https://github.com/user-attachments/assets/2b045091-6675-4fa5-9ef5-79c65569054d">
<img width=400 height=400 src="https://github.com/user-attachments/assets/04b88ac0-aede-4231-9fad-1196376f2881">
<img width=400 height=400 src="https://github.com/user-attachments/assets/425a4a46-a87e-4d80-a66d-592a7c9fc61b">
<img width=400 height=400 src="https://github.com/user-attachments/assets/84cce1c7-c236-4200-9461-618413cf8a6a">
<img width=400 height=400 src="https://github.com/user-attachments/assets/d9fff567-9d78-4a89-964f-c62416072752">
<img width=400 height=400 src="https://github.com/user-attachments/assets/f9968a2a-0354-44c4-9bb1-76e02f59cb0b">
<img width=400 height=400 src="https://github.com/user-attachments/assets/f21d3c36-07d4-48bb-ac1f-7b7f71439120">
<img width=400 height=400 src="https://github.com/user-attachments/assets/32a43d67-9ecf-4c42-944e-237f68de7482">

```ts

function findMedianUsingBinarySearch(arr1: number[], arr2: number[]){
    let n = arr1.length + arr2.length 

    let firstHalf = Math.floor((n + 1)/2) // adding 1 for odd case scenario, if 5 elements then 3 on left side so l1 and l2 larger will be the answer

    if(arr1.length > arr2.length ) return findMedianUsingBinarySearch(arr2, arr1)

    let low = 0
    let high = arr1.length
    while(low <= high){
        let mid1 = Math.floor((high+ low)/2)
        let mid2 = firstHalf - mid1
        let r1 = Infinity
        let r2 = Infinity
        let l1 = -Infinity
        let l2 = -Infinity
        if(mid1-1 >= 0){
            l1 = arr1[mid1-1]
        }
        if(mid2-1 >= 0){
            l2 = arr2[mid2-1]
        }
        if(mid1 < arr1.length){
            r1 = arr1[mid1]
        }
        if(mid2 < arr2.length){
            r2 = arr2[mid2] 
        }

        if(l1 <= r2 && l2 <= r1){
            if(n %2 === 1) return Math.max(l1,l2)
            return (Math.max(l1,l2) + Math.min(r1, r2))/2
        }else if (l1 > r2){
            high =mid1 - 1
        }else {
            low = mid1 + 1
        }
    }
    return 0
}

export function CallfindMedianUsingBinarySearch(){
    let arr1 = [2,3,4]
    let arr2 = [1,3]

    // arr1 = [1,3,4,7,10,12]
    // arr2 = [2,3,6,15]

    console.log(findMedianUsingBinarySearch(arr1, arr2))
}

```
