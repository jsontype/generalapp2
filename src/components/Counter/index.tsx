import React, { useState } from "react";
import style from "./style.module.scss";

export default function Counter() {
  const [number, setNumber] = useState<number>(0); // local state

  return (
    <div>
      <h1>Counter: {number}</h1>
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
  );
}
