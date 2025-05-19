> Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.

- the question is to find the element that appears more than n/2 times
- simplest way to find the majority of the element is the brute force, iterate through the array take each element and keep counting in another interation from 0 till the end
- better approach: another way by using map keep counting each element and storing the count value in map now this will TC: O(NLogN) SC: O(N) in worse condition
- optimal approach: we can further optimize the code using moores voting algorithm


Example 1:
Input Format: N = 3, nums[] = {3,2,3}
Result: 3
Explanation: When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution. 

Example 2:
Input Format:  N = 7, nums[] = {2,2,1,1,1,2,2}
Result: 2

```ts

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
