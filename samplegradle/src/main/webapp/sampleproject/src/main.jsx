import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { legacy_createStore as createStore } from 'redux'
import rootReducer from './reducer/index.jsx'
import { Provider } from 'react-redux'


const store = createStore(rootReducer)

console.log(store.getState())



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
)

