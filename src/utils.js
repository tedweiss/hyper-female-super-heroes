import { characters } from './characters'

export const getCharacter = userSelectedCharacters => {
  let chosenCharacter = ''
  let defaultCharacter = 'x-23'
  // Create character array if 'random' is selected
  userSelectedCharacters = determineRandom(userSelectedCharacters)
  // Create character array if a side is selected
  userSelectedCharacters = determineSide(userSelectedCharacters)

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

const determineRandom = selection => {
  let randomString = selection === 'random'
  let randomArray = selection[0] === 'random'
  let random = randomString || randomArray
  if (random) {
    selection = makeCharacterArray()
  }
  return selection
}

const determineSide = userSelectedCharacters => {
  let returnedCharacters = userSelectedCharacters
  let side = []
  // heroes
  let heroesString = userSelectedCharacters === 'heroes'
  let heroesArray = userSelectedCharacters[0] === 'heroes'
  let heroes = heroesString || heroesArray ? 'heroes' : ''
  // villians
  let villiansString = userSelectedCharacters === 'villians'
  let villiansArray = userSelectedCharacters[0] === 'villians'
  let villians = villiansString || villiansArray ? 'villians' : ''

  let chosenSide = heroes || villians
  if (chosenSide) {
    for (var i = 0; i < characters.length; i++) {
      let character = characters[i]
      let characterSide = character.side
      if (chosenSide === characterSide) {
        side.push(character.name)
      }
    }
    returnedCharacters = side
  }
  return returnedCharacters
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

export const makeCharacterArray = side => {
  let characterNames = []
  for (var i = 0; i < characters.length; i++) {
    let character = characters[i]
    let characterName = character.name
    if (side) {
      let characterSide = character.side
      if (side === characterSide) {
        characterNames.push(characterName)
      }
    } else {
      characterNames.push(characterName)
    }
  }
  return characterNames
}
