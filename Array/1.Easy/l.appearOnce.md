```ts
// we need to find the element that appear once in array , rest other appear twice
// [1,1,2,2,3,4,4,5,5] o/p: 3
// naive solution would be traverse through the array pick one element and again look for that element in that array and keep counting , if count remains === 1 then return that value
// other approach would be by using hashing you can use array for hashing , create any array with size of max number in array and traverse through the array and keep adding count of that element to respective index in new hash array
// traverse hash array which ever index  has 1 that will be your result 
//  now using array will have a problem when given array is very large , or it contains large number , we will end up creating a huge array 
// so for that we can use map now this will also have space complexity O(n/2 + 1), why n/2 + 1, because we will have n element all the element will appear twice , except one element

// now to avoid extra space complexity we can use XOR
function appearOnce(arr: number[]){
    let xor = 0;
    for(let i = 0; i < arr.length; i++){
        xor = xor^arr[i]
    }
    return xor
}

export function Call_appearOnce(){
    const arr = [1,1,2,2,3,4,4,5,5]
    console.log(appearOnce(arr))
}

```
