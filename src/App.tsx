import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Research from './components/Research'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LangProvider } from './context/LangContext'

function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Products />
          <Research />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}

export default App