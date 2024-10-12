- the problem statement is to find the missing element and repeating element from an array 
- array contains the element 1..to n , if array has length of 6 then array should contain elements 1,2,3,4,5,6 but the given array will have one missing and repeating element
- for example [4,2,6,3,1,1]
- simplest approach to find the solution is by using brute force techinque
- traverse from 1 to n and find count of each element 
- but the above solution will have TC: O(n^2)
- another approach can be by using hashing use array as hashing and keep sotring each element count in array at respective index in new array
- using hashing , this approach will have TC: O(N) SC: O(N)

- [4,2,6,3,1,1]
- optimal solution: lets let's find the sum from 1...N which will be n(n+1)/2 and then find the sum of elements of array and subtract these two
- [4,2,6,3,1,1]  4+2+6+3+1+1 -(1+2+3+4+5+6) we will left with 1-5 now 1 - 5 is nothing but one repeating and another missing element
- so let's say x is the repeating element and y is the missing element 
- so we can write x - y = -4 so inorder to find the x and y we need another equation
- let's find another equation 
- just square all the elements and substract
- (4^2 + 2^2 + 6^2 + 3^2 + 1^2 + 1^2) - (1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2) <=> 1^2 - 5^2 = -24
- x^2 - y^2 = -24 <=> (x-y)(x+y) = -24
```ts
function findMissingAndRepeating(arr: number[]){
    let n = arr.length
    let sm = (n*(n+1))/2
    let s2m = n*(n+1)*(2*n+1)/6

    let sm2 = 0
    let s2m2 = 0
    for(let i = 0; i < arr.length; i++){
        sm2 += arr[i]
        s2m2 += arr[i]*arr[i]
    }
    let sum = sm2 - sm
    let sumSquare = s2m2 - s2m
    console.log(sum, sumSquare)

    let missingElement = ((sumSquare/sum) - sum)/2
    let repeatingElement = sum + missingElement
    console.log(missingElement, repeatingElement)
}
```
- yet to be implemented
```ts
function findMissingAndRepeating_Xor(arr: number[]){
    let xor = 0
    let xorn = 0
    for(let i = 1; i <=arr.length; i++){
        xor = xor^arr[i-1]
        xorn = xorn^i
    }


    console.log(xor, xorn)
}

export function Call_findMissingAndRepeating(){
    findMissingAndRepeating_Xor([4,3,2,5,1,1])
}
```
