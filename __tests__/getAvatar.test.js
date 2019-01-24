import { getAvatar } from '../src/getAvatar'

describe('getAvatar', () => {
  test('should return true when user selects true for wanting an avatar', () => {
    expect(getAvatar(true)).toEqual(true)
  })
})
