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
import ShoppingList from './ShoppingList'

const data = [
  {id: 1, item: 'eggs', qty: 12, completed: false},
  {id: 2, item: 'milks', qty: 1, completed: true},
  {id: 3, item: 'chicken breasts', qty: 4, completed: false},
  {id: 4, item: 'carrots', qty: 6, completed: true},
]


function App() {

  return (
      <div>
        {/* {/* <Greeter person="Bill" from="Colt"/>
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
      {/* <Game val1="🍑" val2="🍑" val3="🍑"/>
      <Game val1="🍎" val2="🍉" val3="🍒"/> */}
      <ShoppingList items={data}/>
      </div>
  )
}

export default App
