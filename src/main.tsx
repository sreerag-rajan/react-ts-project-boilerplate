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
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
