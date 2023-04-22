import React from "react"
import { useState } from "react"

import TopMenu from "./components/TopMenu"
import Movies from "./components/Movies"
import Counter from "./components/Counter"
import Todos from "./components/Todos"

export default function App() {
  // JS
  const [openMovies, setOpenMovies] = useState(false)
  const [openCounter, setOpenCounter] = useState(false)
  const [openTodos, setOpenTodos] = useState(false)

  // XML
  return (
    <>
      <TopMenu
        setOpenMovies={setOpenMovies}
        setOpenCounter={setOpenCounter}
        setOpenTodos={setOpenTodos}
      />
      {openMovies && <Movies />}
      {openCounter && <Counter />}
      {openTodos && <Todos />}
    </>
  )
}
