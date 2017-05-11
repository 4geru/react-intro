import React from 'react'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from    'react-redux'

// read router
import { BrowserRouter, Route} from 'react-router-dom' // component
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// read reducer
import counterReducer from '../reducers/counter'
import noteReducer from '../reducers/note'

// read component
import Counter from '../components/Counter'
import Note from '../components/Note'
import HomeView from '../components/HomeView'
import Header from '../components/Header'


const history = createHistory()
const historyMiddleWare = routerMiddleware(history)

const store = createStore(
  combineReducers({ // root data
    counter : counterReducer,
    note    : noteReducer,
    router  : routerReducer
  }),
  applyMiddleware(historyMiddleWare)
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter history={ history }>
          <div>
            <Header />
            <Route path='/'         component={HomeView} exact />
            <Route path='/counter'  component={Counter} exact />
            <Route path='/note'     component={Note} exact />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}