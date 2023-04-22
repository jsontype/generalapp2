import React from "react"
import "./style.css"
import Button from "@mui/material/Button"

type TopMenuProps = {
  setOpenMovies: React.Dispatch<React.SetStateAction<boolean>>
  setOpenCounter: React.Dispatch<React.SetStateAction<boolean>>
  setOpenTodos: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TopMenu({
  setOpenMovies,
  setOpenCounter,
  setOpenTodos,
}: TopMenuProps) {
  const reset = () => {
    setOpenMovies(false)
    setOpenCounter(false)
    setOpenTodos(false)
  }

  return (
    <div className="topMenu">
      <Button
        className="topMenuButton"
        sx={{ mr: "10px" }}
        variant="contained"
        onClick={() => {
          reset()
          setOpenMovies(true)
        }}
      >
        무비
      </Button>
      <Button
        className="topMenuButton mr-2"
        sx={{ mr: "10px" }}
        variant="contained"
        onClick={() => {
          reset()
          setOpenCounter(true)
        }}
      >
        카운터
      </Button>
      <Button
        className="topMenuButton mr-3"
        sx={{ mr: "10px" }}
        variant="contained"
        onClick={() => {
          reset()
          setOpenTodos(true)
        }}
      >
        투두리스트
      </Button>
    </div>
  )
}
