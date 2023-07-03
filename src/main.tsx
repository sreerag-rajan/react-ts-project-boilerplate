import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { store } from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
