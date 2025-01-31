<img width=400 height=400 src="https://github.com/user-attachments/assets/3afcdb1e-0862-44af-bca6-d9b8327600a1">

```ts
function kthElement(arr1: number[], arr2: number[], k: number){
    let n1 = arr1.length;
    let n2 = arr2.length

    if(n1 > n2 ) return kthElement(arr2, arr1, k)

    let left = k
    let low = Math.max(0, k-n2)
    let high = Math.min(k, n1)

    while(low <= high){
        let mid1 = Math.floor((low + high)/2)
        let mid2 = left-mid1

        let l1 = -Infinity
        let l2 = -Infinity

        if(mid1-1 >= 0){
            l1 = arr1[mid1-1]
        }

        if(mid2-1 >= 0){
            l2 = arr2[mid2-1]
        }

        let r1 = Infinity
        let r2 = Infinity

        if(mid1 < n1){
            r1 = arr1[mid1]
        }

        if(mid2  < n2){
            r2 = arr2[mid2]
        }

        if(l1 < r2 && l2 < r1){
            return Math.max(l1,l2)
        } else if (l1 > r2){
            high = mid1 - 1
        }else {
            low = mid1+1
        }
    }
    return 0
}

export function CallkthElement(){
    let arr1 = [2,3,6,7,9]
    let arr2 = [1,4,8,10,11]

    let k = 8

    console.log(kthElement(arr1, arr2, k))
}

```
