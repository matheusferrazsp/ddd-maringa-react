import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/services.css'
import './styles/corporate.css'
import './styles/banner-timeline.css'
import './styles/testimonials-contact.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
