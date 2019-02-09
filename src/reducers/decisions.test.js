import decisions from './decisions'
import data_decisions from '../data_decisions.json'
import data_currentUser from '../data_currentUser.json'

describe('decisions reducer', () => {
  it('should handle initial state', () => {
    expect(
      decisions(undefined, {})
    ).toEqual([])
  })

  // // vote for option A (first one to vote)
  // it('vote option A', () => {
  //   expect(
  //     decisions([], {
  //       voter: data_currentUser.id,
  //       decision: data_decisions[0].id,
  //       option: 'A'
  //     })
  //   ).toEqual([
  //     {
  //       voter: data_currentUser.id,
  //       decision: data_decisions[0].id,
  //       option: 'A'
  //     }
  //   ])
  // })

})
