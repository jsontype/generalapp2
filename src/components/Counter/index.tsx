import React from "react"
import style from "./style.module.scss"

// props 타입 정의
type CounterProps = {
  number: number
  onIncrease: () => void
  onDecrease: () => void
}

function Counter({ number, onIncrease, onDecrease }: CounterProps) {
  return (
    <div>
      <h1>Counter: {number}</h1>
      <button className={style.btnPrimary} onClick={onIncrease}>
        +
      </button>
      <button className={style.btnSecondary} onClick={onDecrease}>
        -
      </button>
    </div>
  )
}

export default React.memo(Counter)
