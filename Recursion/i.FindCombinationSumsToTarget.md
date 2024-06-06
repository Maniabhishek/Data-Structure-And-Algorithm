## Find Combination of numbers sums to target

<img src="https://github.com/Maniabhishek/Data-Structure-And-Algorithm/assets/31520295/29233912-9b12-4aea-9c72-a38214c48793" width=400 height=400>

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
