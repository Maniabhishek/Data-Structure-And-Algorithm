```ts
// the question is to find the element that appears more than n/2 times
// simplest way to find the majority of the element is the brute force, iterate through the array take each element and keep counting in another interation from 0 till the end
// better approach: another way by using map keep counting each element and storing the count value in map now this will TC: O(NLogN) SC: O(N) in worse condition
// optimal approach: we can further optimize the code using moores voting algorithm

function majorityElement(arr: number[]){
    let el = arr[0]
    let count = 1

    for(let i = 1; i < arr.length; i++){
        if(count === 0){
            el = arr[i]
            count++
        }else if(arr[i] === el){
            count++
        }else {
            count--
        }
    }

    count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === el){
            count++
        }
        if(count > arr.length/2) {
            return el
        }
    }
    return -1
}

export function Call_majorityElement(){
    console.log(majorityElement([3,5,4,2,2,3,3,2,2,2,4,4,2,2,2,2]))
}
```
