- you are given an array of denominations
- let's says price of lemon is 5 
- and denominations are: 5, 10, 20

- intuition is if 5 denomination comes then we can sell it 
- if 10 comes then we can only sell if we 5 denominations
- if 20 comes then there are two scenarios , either we need to have one 10 and one 5 , or three 5's , 1st check for 10 and 5 if its there then continue otherwise check for three 5's 

```ts
function lemonadeChanges(arr: number[]){
    let five = 0
    let ten = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 5){
            five += 1
        }else if(arr[i] === 10){
            if(five){
                five -= 1
                ten += 1
            }else {
                return false
            }
        }else {
            if(ten && five){
                ten -= 1
                five -= 1
            }else if(five >= 3){
                five -= 3
            }else {
                return false
            }
        }
    }
    return true
}

export function call_lemonadeChanges(){
    console.log(lemonadeChanges([5,5,5,20,5,10]))
}
```
