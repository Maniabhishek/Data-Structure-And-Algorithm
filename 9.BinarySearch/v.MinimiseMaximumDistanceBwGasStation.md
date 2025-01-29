<img width=400 height=400 src="https://github.com/user-attachments/assets/381c3c9f-0e17-41e6-bd53-09ada8394a6c">

<img width=400 height=400 src="https://github.com/user-attachments/assets/c42376b5-d85e-46fe-b129-afbf309fec24">

```ts
function minMaxDisBtwGasStation(gasStation: number[], k: number){
    let howMany = new Array(gasStation.length - 1).fill(0)
    for(let i = 1; i <= k; i++ ){
        let maxDistance = -1
        let maxIdx = -1

        for(let j = 0; j < howMany.length; j++){
            let diff = gasStation[j+1] - gasStation[j]
            // exact difference after placing gas station in between
            let exactDiff = diff/(howMany[j]+1)

            if(exactDiff > maxDistance){
                maxDistance = exactDiff
                maxIdx = j
            }
        }
        howMany[maxIdx]++
    }

    let max = -1
    // find the max distance from each gas station
    for(let i = 0; i < howMany.length; i++){
        let distance = (gasStation[i+1] - gasStation[i])/(howMany[i] + 1)
        max = Math.max(max, distance)
    }
    return max
}

export function CallMinMaxDisBtwGasStation(){
    let gasStation = [1,13,17,23]
    let k = 5
    console.log(minMaxDisBtwGasStation(gasStation, k))
}

```
