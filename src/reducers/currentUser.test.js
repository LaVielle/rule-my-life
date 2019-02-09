import currentUser from './currentUser'
import data_currentUser from '../data_currentUser.json'

describe('currentUser reducer', () => {
  it('should handle initial state', () => {
    expect(
      currentUser(undefined, {})
    ).toEqual({})
  })

  it('should set currentUser', () => {
    expect(
      currentUser({}, {
        type:'SET_CURRENT_USER',
        currentUser
      })
    ).toEqual(currentUser)
  })

})
