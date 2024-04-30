## Find Combination of numbers sums to target

> - Given an array of distinct integers and a target integer , return a list of all unique combination of candidates, where the choosen numbers sum to target. You may return the combinations in any order.
> - The same number can be choosen from given array , an unlimited number of times. Two combinations are unique if the frequency of at least one of the choosen number is different
> -  eg., [2,3,6,7] target = 7 o/p [2,2,3] [7]
```ts
function findCombination(arr: number[], target: number, index: number, ds: number[], result: number[][]){
  if(index === arr.length){
        if(target === 0){
            result.push([...ds])
        }
        return
    }

    if(arr[index] <= target) {
        ds.push(arr[index])
        findCombination(arr, target - arr[index], index, ds, result)
        ds.pop()
    }

    findCombination(arr, target, index + 1, ds, result)
}

```
