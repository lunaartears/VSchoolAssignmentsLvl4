//1. split words and target words into arrays.
//2. filter through words
//3. use conditional to check if any words in the aray have all the same leters as target word
//4. return those words joined and put back in original order????
//5. return new aray

function filterAnagrams(arr, target) {
    let letters = target.split('')
    let sortedLetters = letters.sort()
    let words = arr.map(word => word)
    let sortedWords = words.map((word) => word.split('').sort())
    let arr2 = [];
    let indexes = []
    sortedWords.map((sortedWord, index) => {
        if (sortedWord.join('').toLowerCase() === sortedLetters.join('').toLowerCase()) {
            arr2.push(sortedWord.join(''));
            // Save index if condition is true
            indexes.push(words[index])
        }
    })
    // console.log(letters)
    // console.log(sortedLetters)
    // console.log(words)
    // console.log(sortedWords)
    // console.log(arr2)
    // console.log('indexes', indexes)



    return indexes
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);
console.log(anagrams); // Output: ['listen', 'silent']


// 1. iterate through object with sort
// 2. return ages sorted
// 3. return names sorted

function sortByMultipleCriteria(people) {
    //   let sortedAges = people.sort(function (a, b) {
    //       return a.age - b.age
    //   })
    //   return sortedAges

    let sortedNames = people.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        return 0
    })
    return sortedNames
}
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 },
];

const people2 = [
    { name: 'Clark', age: 56 },
    { name: 'Erik', age: 34 },
    { name: 'Winter', age: 11 },
    { name: 'Lori', age: 55 }


]

const sortedPeople = sortByMultipleCriteria(people2);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'David', age: 25 },
//  { name: 'Bob', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]
