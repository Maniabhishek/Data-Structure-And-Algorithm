### We are given two strings ‘S1’ and ‘S2’. We need to convert S1 to S2. The following three operations are allowed:
- Deletion of a character.
- Replacement of a character with another one.
- Insertion of a character.
####We have to return the minimum number of operations required to convert S1 to S2 as our answer.

### Edit Distance 
- given string s1 = "horse" s2 = "ros"
- replace h with r rorse ros
- delete r rose
- delete e ros and we get ros
- so if we follow match and not match technique
- horse <-> ros , f(i, j) convert 0...i to 0...j
- compare e and s if match f(i-1, j-1) if it doesn't match then what all can we do, we can either replace, insert , delete
- basically represent the problem in terms of index
- do all possible stuff on that index
- return max or min or sum (all ways)

```ts
function editDistance(s1: string, s2: string, i: number, j: number){
    if(j === 0){
        if(s1[i] === s2[j]){
            // because i deletion is required let's say i = 4 , j is 0 , then 0th and 5th (i.e., 4 index) char are same then to make s1 to s2 0,1,2,3, needs to be deleted , if i is 0,then both are equal , return i i.e., 0 no need operations 
            return i
        }
        return i + 1
    }
    
    if(i === 0) {
        if(s1[i] === s2[j]){
            // because j insertion will be required to make s1 to s2
            return j
        }

        return j+1
    }
    
    if(s1[i] === s2[j]){
        let r = editDistance(s1, s2, i-1, j-1)
        return r
    }else {
        // insert so move to next string match thus j-1, i is as is because we inserted hence i will remain as it is
        let insert = 1 + editDistance(s1, s2, i, j-1)

        // delete the current char at s1 thus i-1, and j will remain as is 
        let del = 1 + editDistance(s1, s2, i-1, j)

        // replace the char from s1
        let replace = 1 + editDistance(s1, s2, i-1, j-1)

        return Math.min(insert, Math.min(del, replace))
    }
}

export function call_editDistance(){
    let s1 = 'horse'
    let s2 = 'ros'
    console.log(editDistance(s1, s2, s1.length-1, s2.length-1))
}
```
