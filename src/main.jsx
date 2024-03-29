import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import './index.css'
import { FilterContextProvider } from './components/useContext/FilterContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <FilterContextProvider>
    <App />
    </FilterContextProvider>
    </Provider>
  </React.StrictMode>,
)
