import React from "react"
import "./style.css"

// Components
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

// Cards Data (Mock API)
import cardsData from "./data.js"

function App() {
  let cards = cardsData.map(card => <Card key={card.id} card={card} />)
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  )
}

export default App
