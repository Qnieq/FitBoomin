import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './components/Routing/Routing'
import { Provider } from 'react-redux'
import {store} from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store} >
      <Routing />
    </Provider>
  </React.StrictMode>,
)
