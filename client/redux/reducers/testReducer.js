export default function reducer (state = false, action) {
  switch (action.type) {
    case 'IS_REDUCING':
      return true

    case 'IS_NOT_REDUCING':
      return false
    default : return state
  }
}
