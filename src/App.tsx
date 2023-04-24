import { useState } from 'react'
import './App.css'
import Router from './router/Router'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Body from './layouts/Body'
import GoUp from './components/GoUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" id='app'>
      <Header />
      <Body>
        <Router />
      </Body>
      <Footer />
      <GoUp/>
    </div>
  )
}

export default App
