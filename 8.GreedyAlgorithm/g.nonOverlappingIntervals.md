- this problem is similar to the n meeting in one room 
- if we sort this interval based on end value , and which ever falls inside the interval , we will delete it 
```ts
type interval = [number, number]

function nonOverlappingIntervals(intervals: interval[]){
    intervals.sort((a,b)=> a[1]-b[1])

    let nonOverlappingIntervalsCount = 1
    let prevEndValue = intervals[0][1]
    const result: interval[] = [intervals[0]]
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] >= prevEndValue){
            nonOverlappingIntervalsCount++
            prevEndValue = intervals[i][1]
            result.push(intervals[i])
        }
    }

    console.log(result)
    return nonOverlappingIntervalsCount
}

export function CallnonOverlappingIntervals(){
    const intervals: interval[] = [[1,2],[3,4],[0,5],[5,7],[5,9],[7,9]]
    console.log(nonOverlappingIntervals(intervals))
}
```

```ts
function mergeOverlappingIntervals(intervals: interval[]){
    intervals.sort((a,b)=> a[0]-b[0])

    
    const result: interval[] = [intervals[0]]
    for(let i = 1; i < intervals.length; i++){
        const last = result[result.length-1]
        const current = intervals[i]
        if(last[1] >= current[0]){
            last[1] = Math.max(last[1], current[1])
        }else {
          result.push(intervals[i])  
        }
    }

    console.log(result)
    return result
}

export function CallnonOverlappingIntervals(){
    const intervals: interval[] = [[1,2],[3,4],[0,5],[5,7],[5,9],[7,9]]
    console.log(mergeOverlappingIntervals(intervals))
}
```
