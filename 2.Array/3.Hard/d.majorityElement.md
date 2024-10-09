- find majority element appearing more than n/3
- the intution to solve this problem is similar to the problem of majority element with greater than n/2 elements, only difference is that we wont assign two same elements to two different variables
- now lets say we have array of 8 lements , then n/3 = 2 , greater than 2 i.e just greater will be 3 thus , 3 + 3 + 3 = 9 , 3,3,2 = 8 hence there can only be max 2 majority elments 

```ts
function MajorityElement(arr: number[]){
    let count1 = 0;
    let count2 = 0;
    let el1 = null
    let el2 = null

    for(let i = 0; i < arr.length; i++){
        if(count1 === 0 && arr[i] !== el2){
            count1 = 1
            el1 = arr[i]
        }else if(count2 === 0 && arr[i] !== el1){
            count2 = 1
            el2 = arr[i]
        }else if(arr[i] === el1){
            count1++
        }else if(arr[i] === el2){
            count2++
        }else {
            count1--
            count2--
        }
    }

    console.log(el1, el2)
}

export function Call_MajorityElement(){
    MajorityElement([1,1,1,3,3,2,2,2])
}

```
