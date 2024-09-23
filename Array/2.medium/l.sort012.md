```ts
// so the simplest approach would be doing sorting which will take nlog(n)
// another approach can be using count of 0's, 1's and 2's, and then start replacing in the original array this will have O(2N) TC and SC: O(1)
// the other approach will be using Dutch National Flag Algorithm 

function sort012(arr: number[]){
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while(mid <= high){
        if(arr[mid] === 0){
            swap(arr, low, mid)
            low++
            mid++
        }else if(arr[mid] === 1){
            mid++
        }else {
            swap(arr, mid, high)
            high--
        }
    }
}

function swap(arr: number[], l: number, r: number){
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
}

export function Call_sort012(){
    const arr = [1,1,2,2,2,0,0,0,1,2,0]
    sort012(arr)
    console.log(arr)
}

```
