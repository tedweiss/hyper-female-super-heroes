export const getAvatar = avatarOption => {
  let displayAvatar = true
  let falseBool = avatarOption === false
  let falseString = avatarOption === 'false'
  let falseArray = avatarOption[0] === 'false'
  let falseArrayBool = avatarOption[0] === false
  let notWantedAvatar = falseBool || falseString || falseArray || falseArrayBool
  if (notWantedAvatar) {
    displayAvatar = false
  }
  return displayAvatar
}
