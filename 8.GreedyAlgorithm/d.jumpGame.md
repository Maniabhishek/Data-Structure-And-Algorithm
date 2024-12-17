<img src="https://github.com/user-attachments/assets/321cc4c4-6c26-4c03-88f0-840686b8bdb5" width=400 >


```ts
function jumpGame(arr: number[]){
    let max = 0

    for(let i = 0; i < arr.length; i++){
        if(i > max) return false
        max = Math.max(i + arr[i], max)
    }

    return true
}

function Call_JumpGame(){
    console.log(jumpGame([1,2,3,1,1,0,2,5]))
}

```
