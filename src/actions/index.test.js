import * as actions from './index'
import data_decisions from '../data_decisions.json'
import data_currentUser from '../data_currentUser.json'

describe('decision actions', () => {
  it('handleVote should create a VOTE actions', () => {
    expect(actions.handleVote({
      voter: data_currentUser.id,
      decision: data_decisions[0].id,
      option: 'A'
    })).toEqual({
      type: 'VOTE',
      data: {
        voter: data_currentUser.id,
        decision: data_decisions[0].id,
        option: 'A'
      }
    })
  })
})
