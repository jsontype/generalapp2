// /* eslint-disable testing-library/prefer-screen-queries */
import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Counter from "./"

// 초기 상태가 0인 Counter를 렌더링하는지 테스트
test("초기 상태가 0인 Counter를 렌더링", () => {
  const { getByText } = render(<Counter />)
  const linkElement = getByText(/Counter: 0/i)
  expect(linkElement).toBeInTheDocument()
})

// Counter가 증가하는지 테스트
test("Counter 증가", () => {
  const { getByText } = render(<Counter />)
  const plusButton = getByText("+")

  fireEvent.click(plusButton)
  const numberText = getByText(/Counter: 1/i)
  expect(numberText).toBeInTheDocument()
})

// Counter가 감소하는지 테스트
test("Counter 감소", () => {
  const { getByText } = render(<Counter />)
  const minusButton = getByText("-")

  fireEvent.click(minusButton)
  const numberText = getByText(/Counter: -1/i)
  expect(numberText).toBeInTheDocument()
})
