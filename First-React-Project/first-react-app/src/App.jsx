import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter'
import Die from '../Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import ColorList from './ColorList'
import Game from './Game'

function App() {

  return (
      <div>
        {/* <Greeter person="Bill" from="Colt"/>
        <Greeter/>
        <Greeter person="Harry" from="Anaaa"/>
        <Die numSides={20}/>
        <Die numSides={10}/>
        <Die/>
      <ListPicker values={[1,2,3]}/>
      <ListPicker values={['a','b','c']}/>
      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/>
      <ColorList colors={["red","pink","yellow"]}/> */}
      <Game val1="🍑" val2="🍑" val3="🍑"/>
      <Game val1="🍎" val2="🍉" val3="🍒"/>
      </div>
  )
}

export default App
