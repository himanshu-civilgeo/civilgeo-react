import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tailwind from './tailwind.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Tailwind />
  </StrictMode>,
)
