import { connect } from 'react-redux'
import Card from '../components/Card'

const setCurrentUser = currentUser => currentUser
const getDecisionList = decisions => decisions

const mapStateToProps = state => ({
  currentUser: setCurrentUser(state.currentUser),
  decisions: getDecisionList(state.decisions)
})

export default connect(
  mapStateToProps
)(Card)
