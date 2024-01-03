import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Nav, Hero, Cards, DataVisualization } from './components'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <Cards />
      <DataVisualization />
    </>
  )
}

export default App
