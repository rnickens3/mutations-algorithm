/*
Completed December 17th, 2025
Function will check if one element contains all letters of a second element.
Concepts learned: using FOR LOOPS, Logical NOT, and iteration.
*/

function mutation(arr) {
  const word1 = arr[0].toLowerCase();
  const letters = arr[1].toLowerCase().split("");  // All letters need to be lowercase in order to compare efficiently

  for (const currentLetter of letters) {
    if (!word1.includes(currentLetter)) {  // Used NOT here to simply check if letters are contained in element 1
      return false
    } 
  }
  return true
}

console.log(mutation(["hello", "he"])) // This should work for any two words
