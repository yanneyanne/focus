import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducer'
import styles from './styles/main.less';

'use strict';

const store = createStore(reducer)

render(
	<Provider store = {store}>
		<App />
	</Provider>,
	document.getElementById('content')
)
