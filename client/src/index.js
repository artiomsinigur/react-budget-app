import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

// Inject CSS into the DOM
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css'

import 'bootstrap/dist/js/bootstrap.min.js'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
      <AppRouter />
  </Provider>, 
  document.getElementById('root')
)