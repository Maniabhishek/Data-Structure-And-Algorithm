- You are the owner of a Shipment company. You use conveyor belts to ship packages from one port to another. The packages must be shipped within 'd' days.
- The weights of the packages are given in an array 'weights'. The packages are loaded on the conveyor belts every day in the same order as they appear in the array. The loaded weights must not exceed the maximum weight capacity of the ship.
- Find out the least-weight capacity so that you can ship all the packages within 'd' days.

### Solution
- let's take an example
- weighs = [5,4,5,2,3,4,5,6], days = 5 , so we need to find the least cpacity to deliver within 5 days
- if we sum up all the array value we will get 34 , and if ship's capacity is 35 we can ship it in only 1 day , but we need to find the least capacity to deliver it within 5 days
- so we got the max value
- could there be minimum value as well , if we take 1 , is it possible to ship any weight no, thus max value in array will be the minimum capcity so that ship can carry all the weights
- hence range will be [max, sumOfAllWeights] , in this case [6, 34]
- so we can iterate through, 6,7,8... 34
- check how many days for each capacity will take the moment we get the value lesser than 5 days , will be the answer

```ts
function findCapacity(arr: number[], withinDays: number){
    let maxCapacity = arr.reduce((a,b)=> a+b)

    for(let i = 1; i <= maxCapacity; i++){
        const daysTaken = findDaysWithGivenCapacity2(arr, i)
        if(daysTaken !== -1 && daysTaken <= withinDays){
            return i
        }
    }
    return -1
}

function findDaysWithGivenCapacity(arr: number[], capacity: number){
    let day = 1
    let currentCapacity = capacity
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > capacity) return -1
        if(arr[i] <= currentCapacity){
            currentCapacity -= arr[i]
        } else {
            day++
            currentCapacity = capacity
            currentCapacity -= arr[i]
        }
    }
    return day
}
// or 
function findDaysWithGivenCapacity2(arr: number[], capacity: number){
    let day = 1
    let load = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i]> capacity) return -1
        if(load + arr[i] > capacity){
            day++
            load = arr[i]
        } else {
            load += arr[i]
        }
    }
    return day
}

export function CallfindCapacity() {
    let arr = [5,4,5,2,3,4,5,6]
    let withinDays = 5
    console.log(findCapacity(arr, withinDays))
}

```

- above code we haven't added the range from max to sum, but 1...max , it will be btter if we add range [max , sumOfArr]
- still above code has TC: O(SumOFAllArray*N)
- we can still improve the TC by using binary search, as we have range so definetly we can eliminate some range using it

```ts
```
