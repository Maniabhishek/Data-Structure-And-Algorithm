> - You are given an array of positive integers and you have to tell how many different ways of selecting the elements from the array are there such that the sum of chosen elements is equal to the target number

### explanation
- since we need to find the total number of ways , or total number of susets that equals target number , this problem is similar to the previous one

```ts
function NumberOfSubsets(arr: number[], target: number, idx: number){
    if(target === 0) return 1
    if(idx === 0) return arr[0] === target ? 1 : 0

    const not_take = NumberOfSubsets(arr, target, idx-1)
    let take = 0
    if(arr[idx] <= target){
        take = NumberOfSubsets(arr, target- arr[idx], idx-1)
    }

    return not_take + take 
}

export function CallNumberOfSubsets(){
    console.log('first')
    const arr: number[] = [1,2,2,3]
    const total = NumberOfSubsets(arr, 3, arr.length-1)
    console.log(total)
}

```
