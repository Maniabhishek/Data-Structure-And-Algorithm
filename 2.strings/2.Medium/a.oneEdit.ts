/**
 * there are two given strings stringOne and stringTwo
 * .
    Write a function that determines if these two strings can be made equal
    using only one edit.
    There are three possible edits 
    Replace: : One character in one string is swapped for a different
    Add: One character is added at any index in one string.
    Remove: : One character is removed at any index in one string.
    
    Note that both strings will contain at least one character. If the strings
    are the same, your function should return true.
    sample input : hello hollo
    output: true
 */
//O(n+m) time complexity O(n+m) space n is length of stringOne and m is the lenght of stringTwo

function oneEdit(stringOne: string, stringTwo: string){
    const lengthOne = stringOne.length;
    const lengthTwo = stringTwo.length;
    if(Math.abs(lengthOne-lengthTwo) > 1 ) return false;
    for(let i = 0; i< Math.min(stringOne.length,stringTwo.length) ; i++){
        if(stringOne[i] !== stringTwo[i]){
            if(lengthOne === lengthTwo){
                return stringOne.slice(i+1,lengthOne) === stringTwo.slice(i+1,lengthTwo);
            }else if(lengthOne > lengthTwo){
                return stringOne.slice(i+1,lengthOne) === stringTwo.slice(i,lengthTwo);
            }else{
                return stringOne.slice(i,lengthOne) === stringTwo.slice(i+1,lengthTwo);
            }
        }
    }
    return true;
}

//improved time and space complexity

function oneEdit2(stringOne: string, stringTwo: string){
    let madeEdit = false;
    const lengthOne = stringOne.length;
    const lengthTwo = stringTwo.length;
    if(Math.abs(lengthOne-lengthTwo) > 1 ) return false;
    let indexOne = 0;
    let indexTwo = 0;
    while(indexOne < lengthOne && indexTwo < lengthTwo){
        if(stringOne[indexOne] !== stringTwo[indexTwo]){
            if(madeEdit) return false;
            madeEdit = true;

            if(lengthOne > lengthTwo){
                indexOne++;
            }else if(lengthOne < lengthTwo){
                indexTwo++;
            }else{
                indexOne++;
                indexTwo++;
            }
        }else{
            indexOne++;
            indexTwo++;
        }
    }
    return true;
}
