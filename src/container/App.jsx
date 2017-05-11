import React from 'react'
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import counterReducer from '../reducers/counter'
import Counter from '../components/Counter'

const store = createStore(combineReducers({ // root data
  counter: counterReducer
}))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <div>
          <h1>{ 'hello redux' }</h1>
          <Counter />
        </div>
      </Provider>
    )
  }
}