/** root reducer 정의 */
import counter from "./counter" // 리듀서 임포트
import { combineReducers } from "redux" // combineReducers 임포트 (리덕스에서)

// 리듀서들을 합친 것을 rootReducer에 담아서 export
const rootReducer = combineReducers({
  counter,
})

export default rootReducer

// 루트리듀서의 리턴값 타입 정의 : 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용할 수 있게 익스포트 해두기
export type RootState = ReturnType<typeof rootReducer>
