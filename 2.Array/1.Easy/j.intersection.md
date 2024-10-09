```ts
// find array intersection
// A = [1,2,2,3,3,4,5,6]
// B = [2,3,3,5,6,6,7]

function Intersection(arr1: number[], arr2: number[]){
    // creating this array to keep a check if the arr2 element is taken for intersection in order to ignore the repetition 
    const vis: number[] = new Array(arr2.length)
    const arr: number[] = []
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            // if elements in both array are equal and arr2 element is not visited then push this as intersection
            if(arr1[i] === arr2[j] && vis[j] !== 1){
                vis[j] = 1
                arr.push(arr1[i])
                break
            }

            if(arr[j] > arr[i]) {
                break
            }
        }
    }
    console.log(arr)
}

function IntersectionOptimal(arr1: number[], arr2: number[]){
    let i = 0;
    let j = 0;

    const newArr = []
    while(i < arr1.length && j < arr1.length){
        if(arr1[i] === arr2[j]){
            newArr.push(arr1[i])
            i++
            j++
        }else if(arr1[i] < arr2[j]){
            i++
        }else {
            j++
        }
    }

    console.log(newArr)
}

export function call_Intersection(){
    const arr1 = [1,2,2,3,3,4,5,6]
    const arr2 = [2,3,3,5,6,6,7]

    Intersection(arr1, arr2)
}
```
