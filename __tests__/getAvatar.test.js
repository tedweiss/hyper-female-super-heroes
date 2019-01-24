import { getAvatar } from '../src/getAvatar'

describe('getAvatar', () => {
  test('should return true when user selects true for wanting an avatar', () => {
    expect(getAvatar(true)).toEqual(true)
  })
  test("should return true when user selects 'true' for wanting an avatar", () => {
    expect(getAvatar('true')).toEqual(true)
  })
  test("should return true when user selects ['true'] for wanting an avatar", () => {
    expect(getAvatar(['true'])).toEqual(true)
  })
  test("should return true when user selects [true] for wanting an avatar", () => {
    expect(getAvatar([true])).toEqual(true)
  })
  test('should return false when user selects false for not wanting an avatar', () => {
    expect(getAvatar(false)).toEqual(false)
  })
  test("should return false when user selects 'false' for not wanting an avatar", () => {
    expect(getAvatar('false')).toEqual(false)
  })
  test("should return false when user selects ['false'] for not wanting an avatar", () => {
    expect(getAvatar(['false'])).toEqual(false)
  })
  test('should return false when user selects [false] for not wanting an avatar', () => {
    expect(getAvatar([false])).toEqual(false)
  })
})
