import { characters } from './characters'

export const getCharacter = userSelectedCharacters => {
  let chosenCharacter = ''
  let defaultCharacter = 'x-23'
  let isArray = Array.isArray(userSelectedCharacters)
  let hasUserSelectedCharacters = userSelectedCharacters.length > 0
  let notEmptyStringInArray = userSelectedCharacters[0] !== ''
  let notEmptyArray = userSelectedCharacters !== []
  let hasSelections = isArray && hasUserSelectedCharacters && notEmptyStringInArray && notEmptyArray
  if (hasSelections) {
    let randomCharacter = userSelectedCharacters[Math.floor(Math.random() * userSelectedCharacters.length)]
    chosenCharacter = randomCharacter
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
