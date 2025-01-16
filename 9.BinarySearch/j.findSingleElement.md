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

export function callFindSingleElement(){
    const arr = [1,1,2,2,3,4,4,5,5,6,6]
    console.log(findSingleElement(arr))
}

```
