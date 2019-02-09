import { connect } from 'react-redux'
import CardList from '../components/CardList'

const getDecisionList = decisions => decisions

const mapStateToProps = state => ({
  decisions: getDecisionList(state.decisions)
})

export default connect(
  mapStateToProps
)(CardList)
