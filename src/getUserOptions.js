import { getCharacter } from './getCharacter'
import { getAvatar } from './getAvatar'

export const getUserOptions = ({ FemaleSuperHeroes: config = {} }) => {
  return Object.assign(
    {},
    {
      get character () {
        return getCharacter(config.character)
      },
      get avatar () {
        return getAvatar(config.avatar)
      }
    }
  )
}
