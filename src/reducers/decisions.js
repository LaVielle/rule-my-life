const decisions = (state = [], action) => {
  switch (action.type) {
    case 'GET_DECISION_LIST':
      return action.decisionList
    case 'CREATE_DECISION': {
      return [...state, {...action.data}]
    }
    case 'VOTE': {
      const decisions = [...state]
      const theDecision = decisions.find(el => el.id === action.data.decision)
      theDecision.votes = [...theDecision.votes, action.data]
      return decisions
    }
    case 'CHANGE_VOTE': {
      const decisions = [...state]
      const theDecision = decisions.find(el => el.id === action.data.decision)
      const theVote = theDecision.votes.find(el => el.voter === action.data.voter)
      theVote.option = action.data.option
      return decisions
    }
    case 'UNVOTE': {
      const decisions = [...state]
      const theDecision = decisions.find(el => el.id === action.data.decision)
      const theVoteIndex = theDecision.votes.find(el => el.voter === action.data.voter)
      theDecision.votes.splice(theVoteIndex, 1)
      return decisions
    }
    default:
      return state
  }
}

export default decisions
