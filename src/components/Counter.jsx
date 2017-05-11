import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  count: state.counter.count,
})

const dispathStateToProps = dispatch => ({
  countUp     : () => dispatch({type: 'COUNTER.ADD', payload: {number: 1} }),
  countDown   : () => dispatch({type: 'COUNTER.ADD', payload: {number: -1} }),
  countDouble : () => dispatch({type: 'COUNTER.DOUBLE' }),
  asyncCountDouble : () => setTimeout(() => dispatch({type: 'COUNTER.DOUBLE' }), 2000)
})

@connect(mapStateToProps, dispathStateToProps)
export default class Counter extends React.Component{
  render() {

    const {
      count, 
      countUp,
      countDown,
      countDouble,
      asyncCountDouble
    } = this.props

    return (
      <main>
        <h2>{'counter'}</h2>
        <h3>{'result'} : { count } </h3>
        <button onClick={countUp}>{'up'}</button>
        <button onClick={countDown}>{'down'}</button>
        <button onClick={countDouble}>{'double'}</button>
        <button onClick={asyncCountDouble}>{'double'}</button>
      </main>
    )
  }
}