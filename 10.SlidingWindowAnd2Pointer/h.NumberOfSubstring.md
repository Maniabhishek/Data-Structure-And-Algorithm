![image](https://github.com/user-attachments/assets/e87746e9-51ce-43ba-acbc-344cd874ade1)



![image](https://github.com/user-attachments/assets/a9f5d515-bae4-40a6-bdf9-fac03dac62c3)

```ts
function NumberofSubstringContainingAllCharacters(str: string){

    let count = 0
    for(let i = 0; i < str.length; i++){
        let abcCount = new Array(26).fill(0)
        for(let j = i; j < str.length; j++){
            abcCount[str.charCodeAt(j) - 97] = 1
            if(abcCount[0] + abcCount[1] + abcCount[2] === 3){
                count += str.length - j
                break
            }
        }
    }
    return count
}

export function Call_NumberofSubstringContainingAllCharacters(){
    const str = "aabcba"
    console.log(NumberofSubstringContainingAllCharacters(str))
}
```

- above program has O(N*N) time complexity we can improve it to O(N) times
```ts
function NumberofSubstringContainingAllCharactersSlidingWindow(str: string){
    let i = 0;
    let abcMap = {a: -1, b:-1, c: -1}
    let count = 0
    while(i < str.length){
        abcMap[str[i]] = i
        if(abcMap['a'] !== -1 && abcMap['b'] !== -1 && abcMap['c'] !== -1){
            const minIdx = Math.min(abcMap['a'], Math.min(abcMap['b'], abcMap['c']))
            count += minIdx + 1
        }
        i++
    }
    return count
}

export function Call_NumberofSubstringContainingAllCharacters2(){
    let str = "aabcba"
    str = "aabcbabc"
    console.log(NumberofSubstringContainingAllCharactersSlidingWindow(str))
}

```
