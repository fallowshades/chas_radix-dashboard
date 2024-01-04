import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card, Inset } from '@radix-ui/themes'

import { Header, Nav, Hero, Cards, DataVisualization } from './components'

function App() {
  return (
    <>
      <Header />
      <Card className="m-0 p-0">
        <Inset clip="padding-box" side="top" pb="current">
          <Nav />
        </Inset>

        <br />
        <Hero />
        <Cards />
        <DataVisualization />
      </Card>
    </>
  )
}

export default App
