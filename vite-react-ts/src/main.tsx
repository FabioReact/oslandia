import React from 'react'
import ReactDOM from 'react-dom/client'
import { App as Application } from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Application teacher='Fabio' course='React'>
      <p>Enfant</p>
    </Application>
  </React.StrictMode>,
)
