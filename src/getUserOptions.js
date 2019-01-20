import { getCharacter } from './utils'

export const getUserOptions = ({ FemaleSuperHeroes: config = {} }) => {
  return Object.assign(
    {},
    {
      get character () {
        return getCharacter(config.character)
      }
    }
  )
}
