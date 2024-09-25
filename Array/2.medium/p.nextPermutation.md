```ts
function nextPermutation(arr: number[]){
    let index = -1
    for(let i = arr.length-2; i>=0; i--){
        if(arr[i] < arr[i+1]){
            index = i
            break
        }
    }
    if(index === -1) {
        reverseArr(arr, 0, arr.length-1)
        console.log(arr)
        return
    }

    let i = arr.length-1
    while(i >= 0){
        if(arr[index] < arr[i]){
            swap(arr, index, i)
            break
        }
        i--
    }

    reverseArr(arr, index+1, arr.length-1)
    console.log(arr)
}

function reverseArr(arr: number[], left: number, right: number){
    if(left >= right) {
        return
    }

    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    reverseArr(arr, left+1, right-1)
}

function swap(arr: number[], left: number, right: number){
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}

export function Call_nextPermutation(){
    nextPermutation([4,5,3,2,1])
}
```
