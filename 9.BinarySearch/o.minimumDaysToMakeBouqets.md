- You are given 'n' roses and you are also given an array 'arr' where 'arr[i]' denotes that the 'ith' rose will bloom on the 'arr[i]th' day.
- You can only pick already bloomed roses that are adjacent to make a bouquet. You are also told that you require exactly 'k' adjacent bloomed roses to make a single bouquet.
- Find the minimum number of days required to make at least 'm' bouquets each containing 'k' roses. Return -1 if it is not possible.

-  let's take an example
-  n = 9, arr = [1,2,1,2,7,2,2,3,1] , k = 3 (number of rose to be used for making one bouqet), m = 2(number of bouqet)
-  with above example we are required to make 2 bouquets , each with 3 adjacent roses
-  all the roses will be ready in 7th days which is largest value in array
-  so we can start checking by 7, since we need to find the minimum number of days required to make bouqet
-  so check for 6 index 0,1,2,3 and 5,6,7 will be ready , so 6 < 7 so update ans 6
-  check with 5 days is it possible, again , index 0,1,2,3rd rose will be ready, and 5th 6th 7th and 8th will also be ready so again 5 < 6 so update ans as 5
-  now with 4, in 4 days also we will be able to make bouqets with 3 roses each
-  with 3 too.. so update ans as 3
-  what about 2 is it possible, no...  index 0th ,1 ,2,3 will be ready so we can make 1 bouqet but cannot make another one thus minimum answer will be 3 days 
```ts
function minimumDaysToMakeBouquets(rosesBloomDay: number[], k: number, m: number){
    let ans = -1

    let maxDay = rosesBloomDay[0]
    for(let i = 1; i < rosesBloomDay.length; i++){
        maxDay = Math.max(maxDay, rosesBloomDay[i])
    }

    let dayAfter = maxDay

    while(dayAfter > 0){
        if(ifPossibleToMakeMBouqet(rosesBloomDay, dayAfter, k, m)){
            ans = dayAfter
            dayAfter--
            continue
        }
        break
    }
    return ans
}

function ifPossibleToMakeMBouqet(rosesBloomDay: number[], dayAfter: number, k: number, m: number): boolean{
    let adjacentRoses = 0
    
    for(let i = 0; i < rosesBloomDay.length; i++){
        if(rosesBloomDay[i] <= dayAfter){
            adjacentRoses++
            if(adjacentRoses === k){
                m -= 1
                adjacentRoses = 0
            }
        }else {
            adjacentRoses = 0
        }
        if(m == 0) return true
    }

    if(m > 0 ) return false
}

export function CallminimumDaysToMakeBouquets(){
    const numberOfBouqets = 2
    const numberOfRosesInBouqet = 3
    let rosesBloomDay = [1,2,1,2,7,2,2,3,1]
    rosesBloomDay = [1,10,3,10,2]
    rosesBloomDay = [7,7,7,7,13,11,12,7]
    console.log(minimumDaysToMakeBouquets(rosesBloomDay, numberOfRosesInBouqet, numberOfBouqets))
}
```

- so with the above approach we are able to solve with tc : O(x) where x is the largest value in array
- so let's try to improve the time complexity 
- in above approach, we are taking the max first and from there we are decreasing the value and checking for each days whether is is possible to make m bouqets with k roses
- so 1,2,3,...to max value, 
- so instead of checking each value we can easily eliminate some value using binary search
- so we take the mid value and if it is possible then high = mid - 1 and otherwise low = mid + 1
```ts
function minimumDaysToMakeBouquetsUsingBinarySearch(rosesBloomDay: number[], k: number, m: number){
    let low = 1;
    let maxDay = rosesBloomDay[0]
    for(let i = 1; i < rosesBloomDay.length; i++){
        maxDay = Math.max(maxDay, rosesBloomDay[i])
    }
    let high = maxDay
    let ans = -1
    while(low <= high){
        let mid = Math.floor((low + high)/2)

        if(ifPossibleToMakeMBouqet(rosesBloomDay, mid, k, m)){
            ans = mid
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
    return ans
}

export function CallminimumDaysToMakeBouquetsUsingBinarySearch(){
    const numberOfBouqets = 2
    const numberOfRosesInBouqet = 3
    let rosesBloomDay = [1,2,1,2,7,2,2,3,1]
    rosesBloomDay = [1,10,3,10,2]
    rosesBloomDay = [7,7,7,7,13,11,12,7]
    console.log(minimumDaysToMakeBouquetsUsingBinarySearch(rosesBloomDay, numberOfRosesInBouqet, numberOfBouqets))
}
```
