import React from 'react';
import { connect } from 'react-redux'
import { getDecisionList, setCurrentUser } from '../actions'
import DecisionList from '../containers/DecisionList'
import CardFormContainer from '../containers/CardFormContainer'
import data_decisions from '../data_decisions.json'
import data_currentUser from '../data_currentUser.json'
import '../styles/App.css'

const App = ({ dispatch }) => {

  dispatch(getDecisionList(data_decisions))
  dispatch(setCurrentUser(data_currentUser))

  return (
    <div className="App">
      <div className="App-inner">
      <DecisionList />
      <CardFormContainer />
      </div>
    </div>
  )
}

export default connect()(App);
