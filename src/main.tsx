import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <head>
      <title>Jim's Personal Site</title>
      <meta name="description" content="Jim's personal site with projects and blog posts" />
    </head>
    <App />
  </StrictMode>,
)
