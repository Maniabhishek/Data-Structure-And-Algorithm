- A monkey is given ‘n’ piles of bananas, where the 'ith' pile has ‘a[i]’ bananas. An integer ‘h’ is also given, which denotes the time (in hours) in which all the bananas should be eaten.
- Each hour, the monkey chooses a non-empty pile of bananas and eats ‘m’ bananas. If the pile contains less than ‘m’ bananas, then the monkey consumes all the bananas and won’t eat any more bananas in that hour.
- Find the minimum number of bananas ‘m’ to eat per hour so that the monkey can eat all the bananas within ‘h’ hours.


![image](https://github.com/user-attachments/assets/dfbf8b77-c3a8-4ce8-aa6e-4eb478ede8d2)

![image](https://github.com/user-attachments/assets/52c88545-cbfa-48fc-8a3f-00b33ac85786)


```ts
function kokoEatingBananas(pilesOfBananas: number[], withinHours: number){
    let low = 1;
    let maxPiles = pilesOfBananas[0]
    for(let i = 1; i < pilesOfBananas.length ; i++){
        maxPiles = Math.max(pilesOfBananas[i], maxPiles)
    }
    let high = maxPiles
    let ans = Infinity
    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let totalTimeToFinish = calculateTime(pilesOfBananas, mid)
        if(totalTimeToFinish > withinHours){
            low = mid+1
        }else {
            ans = Math.min(ans, mid)
            high = mid - 1
        }
    }
    return ans
}

function calculateTime(pilesOfBananas: number[], bananaPerHr: number){
    let totalTime = 0
    for(const banana of pilesOfBananas){
        totalTime += Math.ceil(banana/bananaPerHr)
    }
    return totalTime
}

export function callkokoEatingBananas(){
    const arr = [3,6,7,11]
    console.log(kokoEatingBananas(arr, 8))
}

```
