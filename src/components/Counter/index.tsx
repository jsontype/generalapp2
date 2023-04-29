import React, { useState } from "react"
import "./style.css"

export default function Counter() {
  const [number, setNumber] = useState<number>(0) // local state

  return (
    <div>
      <h1>Counter: {number}</h1>
      <button className="btn-primary" onClick={() => setNumber(number + 1)}>
        +
      </button>
      <button className="btn-secondary" onClick={() => setNumber(number - 1)}>
        -
      </button>
    </div>
  )
}
