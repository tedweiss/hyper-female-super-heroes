import { characters } from './characters'

export const getCharacter = userSelectedCharacters => {
  let randomString = userSelectedCharacters === 'random'
  let randomArray = userSelectedCharacters[0] === 'random'
  let random = randomString || randomArray
  if (random){
    userSelectedCharacters = makeCharacterArray()
  }
  let chosenCharacter = ''
  let defaultCharacter = 'x-23'
  let isArray = Array.isArray(userSelectedCharacters)
  let hasUserSelectedCharacters = userSelectedCharacters.length > 0
  let noValueInArrayPositionOne = !userSelectedCharacters[0]
  let hasSelections = isArray && hasUserSelectedCharacters && !noValueInArrayPositionOne
  if (hasSelections) {
    let randomCharacter = userSelectedCharacters[Math.floor(Math.random() * userSelectedCharacters.length)]
    chosenCharacter = randomCharacter
  } else if (noValueInArrayPositionOne) {
    chosenCharacter = defaultCharacter
  } else {
    chosenCharacter = userSelectedCharacters || defaultCharacter
  }
  let returnedCharacter = matchCharacter(chosenCharacter)
  return returnedCharacter
}

const matchCharacter = chosenCharacterName => {
  for (var i = 0; i < characters.length; i++) {
    let character = characters[i]
    let characterName = character.name
    if (chosenCharacterName === characterName) {
      return character
    }
  }
}

export const makeCharacterArray = () => {
  let characterNames = []
  for (var i = 0; i < characters.length; i++) {
    let character = characters[i]
    let characterName = character.name
    characterNames.push(characterName)
  }
  return characterNames
}
