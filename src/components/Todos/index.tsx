import React, { memo, useMemo, useCallback, useState } from "react"
import style from "./style.module.scss"
// ref는 키값을 설정할 때 사용(게시판 키 등)
import Checkbox from "@mui/material/Checkbox"
// 체크박스 사용 mui
import DeleteIcon from "@mui/icons-material/Delete"
import Button from "@mui/material/Button"

import { Todo } from "../../modules/todos"

// props 타입 정의
type TodoListProps = {
  // 이 컴포넌트에서는 할 일 정보를 지니고 있는 todo들을 모아둔 배열인 todos라는 props를 받아온다.
  todos: Todo[]
  onInsert: (text: string) => void
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

function Todos({ todos, onInsert, onToggle, onRemove }: TodoListProps) {
  const handleInsert = useCallback(
    (text: string) => {
      onInsert(text)
    },
    [onInsert]
  )
  const handleToggle = useCallback(
    (id: number) => {
      onToggle(id)
    },
    [onToggle]
  )
  const handleRemove = useCallback(
    (id: number) => {
      onRemove(id)
    },
    [onRemove]
  )

  const [text, setText] = useState("")

  const onChange = useCallback((e: { target: { value: string } }) => {
    const { value } = e.target
    // input validation
    if (value.length > 100) {
      alert("최대 100자까지 입력 가능.")
      return
    }
    setText(value)
  }, [])

  // 여기서부터 배열 추가 코드
  const onCreate = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault() // form이 새로고침 하는 것을 방지
      if (text.length <= 0) {
        alert("내용을 입력해주세요.")
        return
      }

      // 할 일 추가 된 todolist 작성
      handleInsert(text)
      setText("") // 내용 입력 후 빈칸으로 만들기
    },
    [handleInsert, text]
  )

  // 할일 목록 렌더링
  const render = useMemo(
    () =>
      todos.map((item) => {
        // render라는 함수를 만들고 todos를 map으로 돌려서 return으로
        return (
          // item을 return으로 하나 씩 돌림, 고유한 key가 있어야하니 item의 id로 지정
          <div key={item.id}>
            <span>#{item.id}.</span>
            <span>{item.title}</span>
            <span onClick={() => handleToggle(item.id)}>
              <Checkbox defaultChecked={item.completed} />
            </span>
            <span className={style.deleteIcon}>
              <DeleteIcon onClick={() => handleRemove(item.id)}>
                삭제
              </DeleteIcon>
            </span>
          </div> // completed는 true거나 false이기 때문에 삼항연산자로 표시했음
          // 클릭을 하면 item.id를 줘서 onComplete라는 함수를 실행함
          // true일때만 defaultChecked
        ) // span태그로 걸어서
      }),
    [handleRemove, handleToggle, todos]
  )

  return (
    <>
      <div className={style.App}>
        <h1>Todo App</h1>
        <form onSubmit={onCreate}>
          <input
            className={style.inputText}
            name="todo"
            type="text"
            value={text}
            onChange={onChange}
            placeholder="할 일을 입력하세요"
          ></input>
          <Button type="submit" variant="contained">
            추가
          </Button>
        </form>
        <div>{render}</div>
      </div>
    </>
  )
}

export default memo(Todos)
