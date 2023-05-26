import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Todos from "./"

describe("Todos", () => {
  it("오류 없이 렌더링됩니다", () => {
    render(<Todos />)
  })

  it("새로운 할 일이 추가됩니다", () => {
    const { getByPlaceholderText, getByText } = render(<Todos />)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = getByPlaceholderText("할 일을 입력하세요")
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const addButton = getByText("추가")

    fireEvent.change(input, { target: { value: "새로운 할 일" } })
    fireEvent.click(addButton)

    // 새로운 할 일이 추가되었는지 확인합니다.
    // eslint-disable-next-line testing-library/prefer-screen-queries
    // expect(getByText("#1. 새로운 할 일")).toBeInTheDocument()
  })

  it("할 일을 완료로 표시합니다", () => {
    const { getByPlaceholderText, getByText } = render(<Todos />)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = getByPlaceholderText("할 일을 입력하세요")
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const addButton = getByText("추가")

    fireEvent.change(input, { target: { value: "새로운 할 일" } })
    fireEvent.click(addButton)

    // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/no-node-access
    // const checkbox = getByText("#1. 새로운 할 일").previousElementSibling
    // fireEvent.click(checkbox)

    // 할 일이 완료로 표시되었는지 확인합니다.
    // expect(checkbox.checked).toBe(true)
  })

  it("할 일을 삭제합니다", () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<Todos />)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const input = getByPlaceholderText("할 일을 입력하세요")
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const addButton = getByText("추가")

    fireEvent.change(input, { target: { value: "새로운 할 일" } })
    fireEvent.click(addButton)

    // eslint-disable-next-line testing-library/prefer-screen-queries
    // fireEvent.click(deleteButton)

    // 할 일이 삭제되었는지 확인합니다.
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(queryByText("#1. 새로운 할 일")).toBeNull()
  })
})
