const stringsArray = [
  'a',
  'bc',
  'def',
  'klm sdafdf',
  'klm sdafdf',
  'no',
  'p',
  'ghij',
  'ghij',
]

let currentLongestString = null
let winnerIndex = 0

for (let index = 0; index < stringsArray.length; index++) {
  const element = stringsArray[index]
  const currentLengthString = element.length

  winnerIndex = currentLongestString === null
    ? index
    : currentLengthString > currentLongestString
      ? index
      : winnerIndex

  currentLongestString = index === winnerIndex ? currentLengthString : currentLongestString
}

console.log('**** WINNER INDEX ***** -> ', winnerIndex)
