import { characters } from '../src/characters'
import { getCharacter } from '../src/utils'

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
})
