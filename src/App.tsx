import React from "react"
import { Routes, Route, Link } from "react-router-dom"

import Movies from "components/Movies"
import Counter from "components/Counter"
import Todos from "components/Todos"

export default function App() {
  // JS

  // XML
  return (
    <>
      <Link to="/movies">무비</Link> /<Link to="/counter">카운터</Link> /
      <Link to="/todos">투두</Link>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
  )
}
