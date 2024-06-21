import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Passwordgenerator from './Components/Passwordgenerator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Header />
    <Passwordgenerator/>
    <Footer/>
  </React.StrictMode>,
)
