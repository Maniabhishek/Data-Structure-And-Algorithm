- arrival and departure time of trains are given, 
- arrival and departure of ith train are arrival[i] and dep[i]
- our task is to find the minimum number of platform required in order to accomodate all the trains
- any train, whose timing intersects will need two different platform
- if we sort both the arrival and departure 
- then we check if arrival is less than or equal to departure that means platoform is required
- if departure is smaller then reduce the count that means platform is empty another train can come take the same place

```ts
function minPlatform(arrival: number[], dep: number[]){
    arrival.sort()
    dep.sort()
    let count = 0
    let maxCount = 0
    let i = 0
    let j = 0
    while(i < arrival.length){
        if(arrival[i] <= dep[j]){
            count++
            i++
        }else{
            count--
            j++
        }

        maxCount = Math.max(count, maxCount)
    }
    return maxCount
}

export function callminPlatform(){
    const arrival = [900,945,955,1100,1500,1800]
    const dep = [920, 1200,1130,1150,1900,2000]

    console.log(minPlatform(arrival, dep))
}
```
