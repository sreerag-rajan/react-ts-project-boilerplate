import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { store } from './store/index.ts'
import {theme} from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
