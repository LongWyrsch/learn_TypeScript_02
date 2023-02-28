import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import List from "./components/List"
import Section from "./components/Section"

function App() {

  return (
    <>
      <Heading title="Hello"></Heading>
      <Section title="different title">This is my section</Section>
      <Counter></Counter>
      <List items={['🏀coffee', '⛱️umbrella', '🌮taco']} render={(item: string) => <span className="gold">{item}</span>}/>
    </>
  )
}

export default App
