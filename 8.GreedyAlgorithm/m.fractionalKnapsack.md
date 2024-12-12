- given an array of value, weight pair , we need to find the maximum value that we can carry in a bag with given capacity
- let's take an example [[100,20],[60,10], [100,50], [200,50]]
- if we take 100 with wt 20, wt left 90-20 70
- then 60,10 -> value = 100+60 , wt = 70 - 10 = 60
- 100, 50 -> value = 160+100 = 260 , wt = 60-50 = 10
- 200,50 -> now item wt is greater than capactiy of 10 (remaining), so we cannot take this whole wt, instead we can take some part of it
- so 50 wt value is 200 <=> 1 wt value is 200/50 <=> 4 thus remaining wt we have is 10 so we can take value of 10*4 = 40
- thus total value will be 260 + 40 = 300 our task is to maximize it
- let's say if start by taking the higher value first , here (200 , 50) , but what if its weight was 90 , so we could have taken only 200 , and that's wrong because we can still take higher than that thus this logic will not work
- what we can do is if we sort it based on per unit weight value , so item whose per unit weight value is higher should be considered first
- so [100,20] -> has 5 at index 1 [60,10] -> 6, [100, 50]-> 2, [200, 50] -> 4
- [[60, 10], [100,20], [200,50], [100, 50]]
- so if we start from the above sorted array
- [60,10] -> totalVal = 60 wtRemaining=90-10 = 80
- [100,20] -> totalVal = 60+100 = 160 , wtRemaining = 80-20 = 60
- [200,50] -> totalVal = 160+200 = 360, wtRemaining= 60-50 = 10
- [100, 50] -> now we cannot take whole 50 but fraction, 100/50 = 2 for 1 unit of wt , thus remaining wt is 10, value of 10 = 10 * 2 = 20
- hence totalVal = 360+20 = 380

```ts
type valueWeight = [number, number]
function fractionalKnapsack(arr: valueWeight[], weight: number){
    arr.sort((a,b)=> b[0]/b[1] - a[0]/a[1])
    let totalValue = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i][1] <= weight){
            totalValue += arr[i][0]
            weight -= arr[i][1]
        }else {
            let fractionalValue = arr[i][0]/arr[i][1] * weight
            totalValue += fractionalValue
            break;
        }
    }
    console.log(totalValue)
}

export function callfractionalKnapsack(){
    const knapsack: valueWeight[] = [[100,20],[60,10], [100,50], [200,50]]

    fractionalKnapsack(knapsack, 90)
}
```
