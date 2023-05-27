import React from "react"
import { Routes, Route, Link } from "react-router-dom"

import Movies from "components/Movies"
import Counter from "components/Counter"
import Todos from "components/Todos"

export default function App({ i18n }: any) {
  // JS
  const onChangeToKO = () => {
    i18n.changeLanguage("ko")
  }

  const onChangeToJA = () => {
    i18n.changeLanguage("ja")
  }

  const onChangeToEN = () => {
    i18n.changeLanguage("en")
  }

  // XML
  return (
    <>
      <Link to="/movies">무비</Link> /<Link to="/counter">카운터</Link> /
      <Link to="/todos">투두</Link>
      <span>
        <button onClick={() => onChangeToKO()}>한</button>
        <button onClick={() => onChangeToJA()}>일</button>
        <button onClick={() => onChangeToEN()}>영</button>
      </span>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
  )
}
