import * as actions from './index'
import data_decisions from '../data_decisions.json'
import data_currentUser from '../data_currentUser.json'

describe('decision actions', () => {

  it('handleVote should create a VOTE action', () => {
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

  it('handleChangeVote should create a CHANGE_VOTE action', () => {
    expect(actions.handleChangeVote({
      voter: data_currentUser.id,
      decision: data_decisions[0].id,
      option: 'A'
    })).toEqual({
      type: 'CHANGE_VOTE',
      data: {
        voter: data_currentUser.id,
        decision: data_decisions[0].id,
        option: 'A'
      }
    })
  })

  it('handleUnvote should create a UNVOTE action', () => {
    expect(actions.handleUnvote({
      voter: data_currentUser.id,
      decision: data_decisions[0].id,
      option: 'A'
    })).toEqual({
      type: 'UNVOTE',
      data: {
        voter: data_currentUser.id,
        decision: data_decisions[0].id,
        option: 'A'
      }
    })
  })

  it('setCurrentUser should create a SET_CURRENT_USER action', () => {
    expect(actions.setCurrentUser(
      data_currentUser
    )).toEqual({
      type: 'SET_CURRENT_USER',
      currentUser: data_currentUser
    })
  })

  it('getDecisionList should create a GET_DECISION_LIST action', () => {
    expect(actions.getDecisionList(
      data_decisions
    )).toEqual({
      type: 'GET_DECISION_LIST',
      decisionList: data_decisions
    })
  })

})
