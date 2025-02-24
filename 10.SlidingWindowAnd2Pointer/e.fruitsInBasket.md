### Fruits In Basket
- given an array of type of fruits denoted by number , different number denotes different type, you are given k basket and , your task is to put those fruits in basket , each basket will be assigned one type of fruits , thus we need to find the maximum number of fruits we can store

> example : [3,3,3,1,2,1,1,2,3,3,4] k = 2 , 2 basket are given , if take 1st 4 3,3,3,1 two type can't take 2 as it will be of different type, and can only be taken consecutive

> if you see , we can say we need to find the consecutive max subarray with max type = k

-  so the brute force approach will be simple explained in the below image:

![image](https://github.com/user-attachments/assets/a7913f6e-04b5-44b8-9546-e3cd231fa9e9)



```ts
function fruitsInBasket(arr: number[], maxType: number){
    let maxLen = 0
    for(let i = 0; i < arr.length; i++){
        let typeMap = {}
        let typeCount = 0
        for(let j = i; j < arr.length; j++){
            if(!typeMap[arr[j]]){
                typeCount++
                typeMap[arr[j]] = true
            }

            if(typeCount > maxType){
                break
            }

            maxLen = Math.max(maxLen, j-i+1)
        }
    }
    return maxLen
}

export function Call_fruitsInBasket(){
    let arr = [3,3,3,1,2,1,1,2,3,3,4]
    let k = 2;
    console.log(fruitsInBasket(arr, k))
}
```

![image](https://github.com/user-attachments/assets/92e9964b-fc83-480a-8d8d-93c14874087b)

![image](https://github.com/user-attachments/assets/d6a53b5d-9fc0-48fc-be3a-10c34ec47b0d)


```ts
function fruitsInBasket2Pointers(arr: number[], maxType: number){
    let l = 0;
    let r = 0;

    const typeMap = {}
    let maxLength = 0
    while(r < arr.length){
        if(!typeMap[arr[r]]){
            typeMap[arr[r]] = 0
        }
        typeMap[arr[r]]++
        while(Object.keys(typeMap).length > maxType){
            typeMap[arr[l]]--
            if(typeMap[arr[l]] === 0){
                delete typeMap[arr[l]]
            }
            l++
        }

        if(Object.keys(typeMap).length <= maxType){
            maxLength = Math.max(r-l+1, maxLength)
        }
        r++
    }
    return maxLength
}

export function Call_fruitsInBasket2Pointers(){
    let arr = [3,3,3,1,2,1,1,2,3,3,4]
    let k = 2;
    console.log(fruitsInBasket2Pointers(arr, k))
}
```



```ts
function fruitsInBasket2Pointers2(arr: number[], maxType: number){
    let l = 0;
    let r = 0;

    const typeMap = {}
    let maxLength = 0
    while(r < arr.length){
        if(!typeMap[arr[r]]){
            typeMap[arr[r]] = 0
        }
        typeMap[arr[r]]++
        if(Object.keys(typeMap).length > maxType){
            typeMap[arr[l]]--
            if(typeMap[arr[l]] === 0){
                delete typeMap[arr[l]]
            }
            l++
        }

        if(Object.keys(typeMap).length <= maxType){
            maxLength = Math.max(r-l+1, maxLength)
        }
        r++
    }
    return maxLength
}

export function Call_fruitsInBasket2Pointers2(){
    let arr = [3,3,3,1,2,1,1,2,3,3,4]
    let k = 2;
    console.log(fruitsInBasket2Pointers2(arr, k))
}
```
