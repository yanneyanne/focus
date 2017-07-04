import React from 'react'
import {render} from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers/'
import styles from './styles/main.less';

'use strict';

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
    )
  )
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({})
render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('content')
)
