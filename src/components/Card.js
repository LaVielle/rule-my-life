import React from 'react'
import { connect } from 'react-redux'
import { handleVote, handleChangeVote, handleUnvote } from '../actions'
import '../styles/Card.css'

const Card = (props, { dispatch }) => {

  const userHasVoted = props.votes.some(el => el.voter === props.currentUser.id)
  const optionVoted = userHasVoted ? props.votes.filter(el => el.voter === props.currentUser.id)[0].option : null

  const clickOptionBtn = (option) => {
    if (userHasVoted) {
      if (option !== optionVoted) {
        props.dispatch(handleChangeVote({
          voter: props.currentUser.id,
          decision: props.id,
          option
        }))
      } else {
        props.dispatch(handleUnvote({
          voter: props.currentUser.id,
          decision: props.id,
          option
        }))
      }
    } else {
      props.dispatch(handleVote({
        voter: props.currentUser.id,
        decision: props.id,
        option
      }))
    }
  }

  return(
    <div className="Card-container">
      <div className="Card-title">{props.title}</div>
      <div style={{height: 10}} />
      <div className="Card-options-container">

        <div
          className={`Card-option ${optionVoted === 'A' ? 'Card-option-selected' : null}`}
          onClick={() => { clickOptionBtn('A') }}
        >{props.optionA}</div>

        <div style={{width: 10}} />

        <div
          className={`Card-option ${optionVoted === 'B' ? 'Card-option-selected' : null}`}
          onClick={() => { clickOptionBtn('B') }}
        >{props.optionB}</div>

      </div>
    </div>
  )

}

export default connect()(Card)
