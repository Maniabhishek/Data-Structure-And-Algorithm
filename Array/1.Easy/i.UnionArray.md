- you will be given two sorted array which can contain duplicate as well , you need to return sorted union array with unique values
- ex: arr1= [1,1,1,2,5,6,7,8,9] , arr2= [3,4,5,6,7,8,10]
- result: [1,2,3,4,5,6,7,8,9,10]

```ts
// brute force 
// TC: for first insertion in sets will take O(n1log(n1)) and 2nd insertion will take O(n2log(n2)) and iteration can take O(n1+n2) if all the elements in both the array is unique
function unionBruteForce(arr1: number[], arr2: number[]){
    const set = new Set()

    for(let i = 0; i < arr1.length; i++){
        set.add(arr1[i])
    }

    for(let i = 0; i < arr2.length; i++){
        set.add(arr2[i])
    }

    const newArr = new Array()

    for(const item of set){
        newArr.push(item)
    }
    console.log(newArr.sort((a,b)=> a-b))
}

function union(arr1: number[], arr2: number[]){
    let i = 0
    let j = 0

    let newArr = new Array()

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            if(newArr.length === 0 || newArr[newArr.length-1] !== arr1[i]){
                newArr.push(arr1[i])
            }
            i++
            j++
        }else if(arr1[i] < arr2[j]) {
            if(newArr.length === 0 || newArr[newArr.length-1] !== arr1[i]) {
                newArr.push(arr1[i])
            }
            i++
        }else {
            if(newArr.length === 0 ||  newArr[newArr.length-1] !== arr2[j]){
                newArr.push(arr2[j])
            }
            j++
        }
    }

    while(i < arr1.length){
        newArr.push(arr1[i])
        i++
    }

    while(j < arr2.length){
        newArr.push(arr2[j])
        j++
    }
    console.log(newArr)
}

export function Call_Union(){
    const arr1= [1,1,1,2,5,6,7,8,9]
    const arr2= [3,4,5,6,7,8,10]

    union(arr1, arr2)
}
```
