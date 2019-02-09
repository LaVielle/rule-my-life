import { connect } from 'react-redux'
import Card from '../components/Card'

const setCurrentUser = currentUser => currentUser

const mapStateToProps = state => ({
  currentUser: setCurrentUser(state.currentUser),
})

export default connect(
  mapStateToProps
)(Card)
