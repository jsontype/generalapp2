import React from "react"
import { useSelector } from "react-redux"
import style from "./style.module.scss"

// props 타입 정의
type CounterProps = {
  number: number
  onIncrease: () => void
  onDecrease: () => void
}

function Counter({ number, onIncrease, onDecrease }: CounterProps) {
  const a = useSelector(
    // Global State를 조회할 때에는 state의 타입을 RootState로 지정해야 한다.
    (state: any) => state.counter.number
  )

  return (
    <div>
      <h1>Counter: {number}</h1>
      <button className={style.btnPrimary} onClick={onIncrease}>
        +
      </button>
      <button className={style.btnSecondary} onClick={onDecrease}>
        -
      </button>
      <h1>{a}</h1>
    </div>
  )
}

export default React.memo(Counter)
