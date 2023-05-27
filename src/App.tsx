import React from "react"
import { Routes, Route, Link } from "react-router-dom"

import Movies from "components/Movies"
import TodosContainer from "components/Todos/Container"
import CounterContainer from "components/Counter/Container"

export default function App() {
  // JS

  // XML
  return (
    <>
      <Link to="/movies">무비</Link> /<Link to="/counter">카운터</Link> /
      <Link to="/todos">투두</Link>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/counter" element={<CounterContainer />} />
        <Route path="/todos" element={<TodosContainer />} />
      </Routes>
    </>
  )
}
