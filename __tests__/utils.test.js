import { characters } from '../src/characters'
import { getCharacter, makeCharacterArray } from '../src/utils'

describe('getCharacter', () => {
  test('should return user selected character if only one is input into the array', () => {
    let userSelectedCharacters = ['invisible-woman']
    let invisibleWoman = characters[0]
    expect(getCharacter(userSelectedCharacters)).toEqual(invisibleWoman)
  })
  test('should return user selected character if only one is input as a string', () => {
    let userSelectedCharacters = 'invisible-woman'
    let invisibleWoman = characters[0]
    expect(getCharacter(userSelectedCharacters)).toEqual(invisibleWoman)
  })
  test("should return randomly selected character from user's list if more than one is entered into the array", () => {
    let userSelectedCharacters = ['invisible-woman', 'x-23', 'wasp']
    let chosenName = getCharacter(userSelectedCharacters).name
    expect(userSelectedCharacters).toEqual(expect.arrayContaining([chosenName]))
  })
  test('should return default character when an empty array is given', () => {
    let userSelectedCharacters = []
    let defaultCharacter = characters[2]
    expect(getCharacter(userSelectedCharacters)).toEqual(defaultCharacter)
  })
  test('should return default character when an array with an empty string is given', () => {
    let userSelectedCharacters = ['']
    let defaultCharacter = characters[2]
    expect(getCharacter(userSelectedCharacters)).toEqual(defaultCharacter)
  })
  test('should return default character when an empty string is given', () => {
    let userSelectedCharacters = ''
    let defaultCharacter = characters[2]
    expect(getCharacter(userSelectedCharacters)).toEqual(defaultCharacter)
  })
  test("should return randomly selected character from character list when 'random' is entered", () => {
    let chosenName = getCharacter('random').name
    let characterNames = makeCharacterArray()
    expect(characterNames).toEqual(expect.arrayContaining([chosenName]))
  })
  test("should return randomly selected character from character list when 'random' is entered into the array", () => {
    let chosenName = getCharacter(['random']).name
    let characterNames = makeCharacterArray()
    expect(characterNames).toEqual(expect.arrayContaining([chosenName]))
  })
  test("should return random character from heroes list when 'hero' is entered", () => {
    let chosenName = getCharacter('hero').name
    let characterNames = makeCharacterArray('hero')
    expect(characterNames).toEqual(expect.arrayContaining([chosenName]))
  })
  test("should return random character from villians list when 'villian' is entered", () => {
    let chosenName = getCharacter('villian').name
    let characterNames = makeCharacterArray('villian')
    expect(characterNames).toEqual(expect.arrayContaining([chosenName]))
  })
})
