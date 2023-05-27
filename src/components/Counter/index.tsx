import React, { memo, useState } from "react"
import style from "./style.module.scss"
import { useTranslation } from "react-i18next"

function Counter() {
  const { t } = useTranslation()

  const [number, setNumber] = useState<number>(0) // local state

  return (
    <div>
      <h1>
        {String(t("counter:counter"))}: {number}
      </h1>
      <button
        className={style.btnPrimary}
        onClick={() => setNumber(number + 1)}
      >
        +
      </button>
      <button
        className={style.btnSecondary}
        onClick={() => setNumber(number - 1)}
      >
        -
      </button>
    </div>
  )
}

export default memo(Counter)
