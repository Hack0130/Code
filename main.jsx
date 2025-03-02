import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducersAndActions/reducers/index.jsx'
import { StyledEngineProvider } from '@mui/material'

const store = createStore(rootReducer)
// console.warn(store);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </Provider>
)
