/*
  find longest palindromic substring from given string
*/

export function longestPalindromicSubstring(string: string) {
  // Write your code here.
  let longest = [0, 1]
  for (let i = 1; i < string.length; i++) {
    const even = getLongestPallindrome(string, i-1, i)
    const odd = getLongestPallindrome(string, i-1, i+1)
    const currentLongest = even[1] - even[0] > odd[1] - odd[0] ? even : odd
    longest = longest[1] - longest[0] > currentLongest[1] - currentLongest[0] ? longest : currentLongest;     
  }
  return string.slice(longest[0], longest[1]);
}

function getLongestPallindrome(string: string, left: number, right: number){
  while(left >= 0 && right < string.length){
    if(string[left] !== string[right]) break
    left--;
    right++;
  }
  return [left + 1, right]
}
