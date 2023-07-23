// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (<div className="app">
    <header className='app-header'>
      <Header />
    </header>

    <main className='app-main'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Projects" element={<Projects/>}/>
        <Route exact path="/Resume" element={<Resume/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
      </Routes>
    </main>
  <Footer />

</div>
  )
}

export default App
