/* eslint-disable testing-library/prefer-screen-queries */
import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Todos from "./"

test("할 일 추가, 완료 및 삭제", () => {
  const { getByText, getByPlaceholderText } = render(<Todos />)

  // 할 일 추가
  const inputField = getByPlaceholderText("할 일을 입력하세요")
  fireEvent.change(inputField, { target: { value: "새로운 할 일" } })
  fireEvent.click(getByText("추가"))

  // 추가된 할 일 확인
  expect(getByText("새로운 할 일")).toBeInTheDocument()
})
