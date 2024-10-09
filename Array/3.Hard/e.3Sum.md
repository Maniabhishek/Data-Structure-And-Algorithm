- the problem statement is to store all the unique triplets that sum to 0
- the brute force soulution will be to run it in three loops and keep checking if the all indexes element sum equals to zero
- if it equals to zero then sort these element and store it in set in order to have all the unique triplets
- time complexity will be O(n^3)  + log(number of triplets)
- space complexity: 2 * O(no of triplets)

- let's improve this solution
- arr[i] + arr[j] + arr[k] = 0, so in the previous brute force solution we were iterating 3 times now what if we assume run two loops and get the sum of arr[i] + arr[j] then the third element will be 0-(sum of other two)
- but the below soution will have the duplicate element as well


```ts

function Three_Sum(arr: number[]){
    const resSet = new Set()
    for(let i = 0; i < arr.length; i++){
        let set = new Set()
        for (let j = i + 1; j < arr.length; j++){
            let third = - ( arr[i] + arr[j] )
            if(set.has(third)){
                const newRes = [arr[i], arr[j], third]
                newRes.sort((a,b)=> a-b)
                resSet.add([...newRes])
            }
            set.add(arr[j])
        }
    }
    console.log(resSet)
}

// optimal solution is to sort the arrays , and loop through the pointer , and after this pointer we can take two pointer one right after i , and another in the last element
// TC: n(Log(n)) + n^2 SC: O(number of triplets)
function Three_Sum_Optimal(arr: number[]){
    let i = 0
    const res = []
    arr.sort((a,b)=> a-b)
    while(i < arr.length){
        let left = i+1
        let right = arr.length-1

        while(left < right){
            let sum = arr[i] + arr[left] + arr[right]
            if(sum === 0) {
                res.push([arr[i] , arr[left] , arr[right]])
                let currentLeft = arr[left]
                left++
                while(arr[left] === currentLeft){
                    left++
                }

                let currentRight = arr[right]
                right--
                while(arr[right] === currentRight){
                    right--
                }
            }else if (sum < 0) {
                let currentLeft = arr[left]
                left++
                while(arr[left] === currentLeft){
                    left++
                }
            }else {
                let currentRight = arr[right]
                right--
                while(arr[right] === currentRight) {
                    right--
                }
            }
        }
        let currentElement = arr[i]
        i++
        while(currentElement === arr[i]){
            i++
        }
    }
    console.log(res)
}

export function Call_ThreeSum(){
    // Three_Sum([1,2,-1,2,-1,2,3,2,2,-1,-1,2,-3])
    Three_Sum_Optimal([1,2,-1,2,-1,2,3,2,2,-1,-1,2,-3])
}

```
