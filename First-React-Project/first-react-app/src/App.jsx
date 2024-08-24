import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter'
import Die from '../Die'

function App() {

  return (
      <div>
        <Greeter person="Bill" from="Colt"/>
        <Greeter/>
        <Greeter person="Harry" from="Anaaa"/>
        <Die numSides={20}/>
        <Die numSides={10}/>
        <Die/>

      </div>
  )
}

export default App
