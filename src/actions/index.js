export const handleVote = data => ({
  type: 'VOTE',
  data
})

export const handleChangeVote = data => ({
  type: 'CHANGE_VOTE',
  data
})

export const handleUnvote = data => ({
  type: 'UNVOTE',
  data
})

export const setCurrentUser = currentUser => ({
  type: 'SET_CURRENT_USER',
  currentUser
})

export const getDecisionList = decisionList => ({
  type: 'GET_DECISION_LIST',
  decisionList
})

export const createDecision = data => ({
  type: 'CREATE_DECISION',
  data
})
