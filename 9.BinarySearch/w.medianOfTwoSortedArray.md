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
