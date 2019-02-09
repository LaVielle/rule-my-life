import { connect } from 'react-redux'
import CardForm from '../components/CardForm'

const setCurrentUser = currentUser => currentUser

const mapStateToProps = state => ({
  currentUser: setCurrentUser(state.currentUser),
})

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm)
