import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './Info'
import About from './About'
import Footer from './Footer'
import './App.css'
import './Info.css'
import './About.css'
import './Footer.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Info />
    <About />
    <Footer />
  </React.StrictMode>,
)
