import React from 'react'
import CardContainer from '../containers/CardContainer'
import '../styles/CardList.css'

const CardList = (props) => (
  <div className="CardList-container">
    {props.decisions.map(item => <CardContainer key={item.id} {...item}/> )}
  </div>
)

export default CardList
