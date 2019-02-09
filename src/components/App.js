import React from 'react';
import { connect } from 'react-redux'
import { getDecisionList, setCurrentUser } from '../actions'
import DecisionList from '../containers/DecisionList'
import data_decisions from '../data_decisions.json'
import data_currentUser from '../data_currentUser.json'

const App = ({ dispatch }) => {

  dispatch(getDecisionList(data_decisions))
  dispatch(setCurrentUser(data_currentUser))

  return (
    <div className="App">
      <DecisionList />
    </div>
  )
}

export default connect()(App);
