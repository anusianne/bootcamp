import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeter from "./Greeter";
import Die from "../Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import ColorList from "./ColorList";
import Game from "./Game";
import ShoppingList from "./ShoppingList";
import RentalProperties from "./RentalProperties";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";

// const data = [
//   { id: 1, item: "eggs", qty: 12, completed: false },
//   { id: 2, item: "milks", qty: 1, completed: true },
//   { id: 3, item: "chicken breasts", qty: 4, completed: false },
//   { id: 4, item: "carrots", qty: 6, completed: true },
// ];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

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
      {/* <ShoppingList items={data} /> */}
      {/* <RentalProperties propies={properties} /> */}
      {/* <Clicker /> */}
      {/* <Form /> */}
      <Clicker message="HI!!!" buttonText="Please Click me" />
      <br />
      <Clicker message="Please Stop Clicking me!" buttonText="do not click" />
      <Counter num={1} />
    </div>
  );
}

export default App;
