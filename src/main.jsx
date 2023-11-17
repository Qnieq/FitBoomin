import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './components/Routing/Routing'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import AuthProvider from './components/Provider/authProvider'

let persistor = persistStore(store);

  ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider>
            <Routing />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  )