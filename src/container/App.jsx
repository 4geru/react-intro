import React from 'react'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import counterReducer from '../reducers/counter'
import noteReducer from '../reducers/note'
import Counter from '../components/Counter'
import Note from '../components/Note'


const store = createStore(combineReducers({ // root data
  counter: counterReducer,
  note: noteReducer
}))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <div>
          <h1>{ 'hello redux' }</h1>
          <Counter />
          <Note />
        </div>
      </Provider>
    )
  }
}