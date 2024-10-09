> -  write a function that returns the sum of all the possible subset of given array.

 - to solve this problem, as we see we need to create the combination, so always go with pick not pick solution using recursion

```ts
export function SubsetSum1(arr: number[], index: number,res: number[], sum: number){
    if(index >= arr.length){
        res.push(sum)
        return
    }

    sum += arr[index]
    SubsetSum1(arr, index+1, res, sum)

    sum -= arr[index]
    SubsetSum1(arr, index + 1, res, sum)
}

```
