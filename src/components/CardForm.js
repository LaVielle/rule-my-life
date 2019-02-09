import React from 'react'
import { connect } from 'react-redux'
import { createDecision } from '../actions'
import '../styles/CardForm.css'
import uuidv4 from 'uuid/v4'

class CardForm extends React.Component {

  state = {
    question: '',
    optionA: '',
    optionB: '',
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleValueChange = (event, field) => {
    this.setState({ [field]:  event.target.value})
  }

  handleSubmit = (event) => {
    if (this.state.question.length > 0 &&
        this.state.optionA.length > 0 &&
        this.state.optionB.length > 0) {

      const data = {
        title: this.state.question,
        optionA: this.state.optionA,
        optionB: this.state.optionB,
        user: this.props.currentUser.id,
        id: uuidv4(),
        votes: []
      }

      this.props.dispatch(createDecision(data))

      this.setState({ question: '', optionA: '', optionB: '' })
    }
    event.preventDefault();
  }

  render() {
    return (
      <form className="CardForm-form">

        <label className="CardForm-label">Your question</label>
        <input
          className="CardForm-input"
          placeholder='Should I...'
          value={this.state.question}
          onChange={e => {this.handleValueChange(e, 'question')}}
        />

        <div style={{height: 10}}/>

        <div className="CardForm-options-container">
          <div className="CardForm-option">
            <div className="CardForm-label">Option A</div>
            <input
              className="CardForm-input"
              placeholder='do this?'
              value={this.state.optionA}
              onChange={e => {this.handleValueChange(e, 'optionA')}}
            />
          </div>

          <div style={{width: 10}}/>

          <div className="CardForm-option">
            <div className="CardForm-label">Option B</div>
            <input
              className="CardForm-input"
              placeholder='do that?'
              value={this.state.optionB}
              onChange={e => {this.handleValueChange(e, 'optionB')}}
            />
          </div>
        </div>

        <div style={{height: 10}}/>

        <div className="CardForm-submit" onClick={this.handleSubmit}>Submit</div>

      </form>
    )
  }
}

export default connect()(CardForm)
