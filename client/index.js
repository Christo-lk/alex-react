import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import App from './components/App'
import './style.css'

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
