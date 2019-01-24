export const getAvatar = avatarOption => {
  let displayAvatar = false
  let notFalseBool = avatarOption !== false
  let notFalseString = avatarOption !== 'false'
  let notFalseArray = avatarOption[0] !== 'false'
  let wantedAvatar = notFalseBool && notFalseString && notFalseArray
  if (wantedAvatar) {
    displayAvatar = true
  }
  return displayAvatar
}
