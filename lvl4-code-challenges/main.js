// 1. use filter to itterate through the array
// 2. use conditional to check if any words in the aray have all the same leters as target word
// 3. return those words

function filterAnagrams(arr, target) {
    let letters = target.split("")
    let sortedLetters = letters.sort()
    let words = arr.map(word => word)
    let sortedWords = words.map((word) => word.split('').sort())
    let filtered = sortedWords.filter((sortedWord) => {
        if (sortedLetters === sortedWords) {
            return sortedWord.join('')
        }
    })
    console.log(letters)
    console.log(sortedLetters)
    console.log(sortedWords)
    console.log(words)
    return filtered
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']
