import { useState } from "react"

import { Header } from "./components/header"
import { Filters } from "./components/filters"
import { CardsContainer } from "./components/cards-container"

function App() {

  const [filter, setFilter] = useState('All')
  return (
    <main className="light-gradient min-h-screen flex flex-col items-center dark:dark-gradient">
      <section className="w-[343px] my-6 md:w-[672px] xl:w-[1170px]">
        <Header/>
        <Filters filter={filter} setFilter={setFilter}/>
        <CardsContainer filter={filter}/>
      </section>
    </main>
  )
}

export default App
