// To run the code, open it in the browser using the VS Code Live Server
// Then open the console.  You can directly call these function in the console to test.

/*  --------------------------------------------------------
    encodeVowelWord()

    Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end.

    For example:
        "eat" becomes "eat-yay"
        "omelet" becomes "omelet-yay" 

        if word starts with aeiou add a - and yay
        need to tell it to look for the first letter

*/

let vowels = ['a', 'e', 'i', 'o', 'u']

function encodeVowelWord(word) {
 

  for (let index = 0; index < vowels.length; index++) {
    let vowel = vowels[index]
    if (word.startsWith(vowel)) {
      word += '-yay'
    }
  }
  console.log(word)
  return word 
}


// Write your unit tests here
let vowelTest1 = encodeVowelWord('eat')
console.assert(vowelTest1 === 'eat-yay', {
  test: 'encodVowelWord on eeat',
  expected: 'beae-yay',
  result: vowelTest1
})


let vowelTest2 = encodeVowelWord('omelet')
console.assert(vowelTest2 === 'omelet-yay', {
  test: 'encodVowelWord on omelet',
  expected: 'omelet-yay',
  result: vowelTest2
})



/*  --------------------------------------------------------
    encodeConsonantWord()

    Encode words that begin with a consonant sound from english to pig latin.
    For words that begin with consonant sounds, all letters before the initial vowel 
    are placed at the end of the word sequence, preceded by a hyphen "-". Then, "ay" is added. 
    
    For example:
        "latin" becomes "atin-lay"
        "cheers" becomes "eers-chay"

        
        need to slice/splice when i hit a vowel

*/
function encodeConsonantWord(word) {
  let wordStart = ""
  let run = true

  while (run === true) {

    const element = word[0]
    if (vowels.includes(element)) {
      run = false
    } else {
      wordStart += word[0]
      word = word.slice(1)
    }
    
  } return word + "-" + wordStart + "ay"
}

// Write your unit tests here
console.assert(encodeConsonantWord("latin") === "atin-lay" ,encodeConsonantWord("latin"))
console.log(encodeConsonantWord("latin"))

console.assert(encodeConsonantWord("cheers") === "eers-chay" ,encodeConsonantWord("cheers"))
console.log(encodeConsonantWord("cheers"))

/*  --------------------------------------------------------
    encodeWord()

    Decide whether a given word starts with a vowel sound or consonant sound,
    and call encodeVowelWord(word) or encodeConsonantWord(word) when relevant.

    For example:
        "eat" becomes "eatyay" because it starts with a vowel "e"
        "omelet" becomes "omeletyay" because it starts with a vowel "o"
        "latin" becomes "atin-lay" because it starts with a consonant "l""
        "cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
        "you" becomes "ou-yay" because it starts with a consonant "y"
*/
function encodeWord(word) {
  return ""; // replace this!
}

// Write your unit tests here

/*  --------------------------------------------------------
    encodeText()    

    Encode a full sentence or paragraph from english to pig latin.
*/
function encodeText(text) {
  return ""; // replace this!
}

// Write your unit tests here
