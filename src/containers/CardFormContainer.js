import { connect } from 'react-redux'
import CardForm from '../components.CardForm'

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(
  mapDispatchToProps
)(CardForm)
