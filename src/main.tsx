import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
// import { RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import { store } from './store/index.ts'
// import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
    {/* </RouterProvider> */}
  </React.StrictMode>,
)
