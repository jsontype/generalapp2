/** action 타입 정의 */
const INCREASE = "counter/INCREASE" as const
const DECREASE = "counter/DECREASE" as const

/** action 생성함수 정의 : + - 버튼은 파라미터 불필요 */
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

/* action 타입 선언 : 타입스크립트용 타입 */
type CounterAction =
  // ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해준다.
  ReturnType<typeof increase> | ReturnType<typeof decrease>

/* State 타입 선언 : 타입스크립트용 타입  */
type CounterState = {
  number: number
}

/** state 초기값 정의 */
const initialState: CounterState = {
  number: 0,
}

/** reducer 정의 */
export default function counter(state = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      }
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      }
    default:
      return state
  }
}
