<img src="https://github.com/user-attachments/assets/5242ef3a-5452-40f8-8b1c-cdd5b2e64ae6" width=400 height=400>
<img src="https://github.com/user-attachments/assets/d12ad855-ab33-4303-83c7-355116c82511" width=400 height=400>



```ts

function Number_LIS(arr: number[]){
    const dp:number[] = new Array(arr.length).fill(1)
    const count: number[] = new Array(arr.length).fill(1)

    let max = 0
    let maxIdx = 0
    for(let i=1; i<arr.length; i++){
        for(let j = 0; j<i; j++){
            if(arr[j]<arr[i] && (1+dp[j] > dp[i])){
                dp[i] = 1+dp[j]
            }else if(arr[j]<arr[i] && (1+dp[j] === dp[i])){
                count[i] += count[j]
            }
        }

        if(dp[i] > max) {
            max = dp[i]
            maxIdx = i
        }
    }

    let numberOfLIS = 0
    for(let i = 0; i < arr.length; i++){
        if(dp[i] === max){
            numberOfLIS += count[i]
        }
    }

    console.log(numberOfLIS)
}

export function CallNumber_LIS(){
    const arr: number[] = [1,5,4,3,2,6,7,10,8,9]
    Number_LIS(arr)
}

```
