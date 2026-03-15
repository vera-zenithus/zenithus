import React from 'react'
import Hero from './Hero'
import About from './About'
import Products from './Products'
import Research from './Research'
import Team from './Team'
import Contact from './Contact'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Research />
      <Team />
      <Contact />
    </>
  )
}

export default Home
