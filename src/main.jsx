import React from 'react'
import ReactDOM from 'react-dom/client'
import { DigimonApp } from './DigimonApp'

import './styles.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store= {store}>
      <DigimonApp />
    </Provider>
  </React.StrictMode>
)
