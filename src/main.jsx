import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './components/context/useContext.jsx'
import { ThemeProvider } from './components/context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <ThemeProvider>
       <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
       </ThemeProvider>
  </StrictMode>,
)
