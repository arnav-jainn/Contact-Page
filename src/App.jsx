import React from 'react'
import Navbar from './components/Navbar'
import ContactHeader from './components/ContactHeader'
import ContactForm from './components/ContactForm'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
      <ContactHeader/>
      <ContactForm/>
      </main>

    </div>
  )
}

export default App



//(Button.jsx,ContactForm.jsx)- use of props
//(ContactForm.jsx)-use of useState      -extract values from form
//(Button.jsx)- ternery operator used for classes