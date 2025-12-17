# Mutations Algorithm
Function compares two elements and checks if string in first element contains all letters of second element.

##Assignment
* FreeCodeCamp.org JavaScript Course Assignment
### User Stories:
1. Create a function named mutation that takes an array as its argument.
2. mutation should return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise. For example:
3. mutation(["hello", "Hello"]), should return true because all of the letters in the second string are present in the first, ignoring case.
4. mutation(["hello", "hey"]) should return false because the string hello does not contain a y.
5. mutation(["Alien", "line"]), should return true because all of the letters in line are present in Alien.

##Tools & Languages Used
* JavaScript

##Features
* Any two words can be compared using this function.
* Returns true if element 2 contains all letters in element 1.
* Returns false if otherwise.

##Concepts Learned
* For Loops
* Iteration
* Logical NOT

##Examples
```
function mutation(arr) {
  const word1 = arr[0].toLowerCase();
  const letters = arr[1].toLowerCase().split("");

  for (const currentLetter of letters) {
    if (!word1.includes(currentLetter)) {
      return false
    } 
  }
  return true
}

console.log(mutation(["hello", "he"])) // Returns TRUE

```
```
function mutation(arr) {
  const word1 = arr[0].toLowerCase();
  const letters = arr[1].toLowerCase().split("");

  for (const currentLetter of letters) {
    if (!word1.includes(currentLetter)) {
      return false
    } 
  }
  return true
}

console.log(mutation(["hello", "bye"])) // Returns FALSE

```

## How to Run
1. Clone the repository
2. Run the script using Node.js or import the function into any JS file
